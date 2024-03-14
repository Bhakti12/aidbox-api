import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import AWS from 'aws-sdk';
import ENV from '../config/env';

export async function videoConvert(args) {
    try {
        console.log('in video converter');
        const { document, isLinkDocument } = args;
        const webm = await new Promise((resolve, reject) => {
            ffmpeg(document.location)
                .setFfmpegPath(ENV.FFMPEG_PATH)
                .setFfprobePath(ENV.FFPROBE_PATH)
                .inputOptions(['-fflags', '+genpts'])
                .toFormat('mp4')
                .outputOptions('-r 24')
                .on('start', (commandLine) => {
                    // console.log(`Spawned Ffmpeg with command: ${commandLine}`);
                })
                .on('error', (err, stdout, stderr) => {
                    // console.log('error', err, stdout, stderr);
                    reject(err);
                })
                .on('end', (stdout, stderr) => {
                    // console.log('end', stdout, stderr);
                    resolve({ status: true });
                })
                .saveToFile(`${__dirname}/${document.key.split('/')[1]}`);
        });

        const readFile = await fs.readFileSync(`${__dirname}/${document.key.split('/')[1]}`);

        // console.log('readFile', readFile);

        const params = {
            Bucket: isLinkDocument ? 'thelinkproject/link_documents' : 'thelinkproject/library_documents',
            Key: document.key,
            Body: readFile,
            ContentType: document.mimetype,
            ACL: 'public-read',
        };

        const s3 = new AWS.S3();

        await s3.upload(params, (err, data) => {
            if (err) {
                console.log(`err. ${err}`);
            }
            // console.log(data);
            // console.log(`File uploaded successfully.${JSON.stringify(data)}`);
        });

        await fs.unlinkSync(`${__dirname}/${document.key.split('/')[1]}`);
        // console.log('in end video converter');
    } catch (error) {
        // console.log('Error', error);
    }
}

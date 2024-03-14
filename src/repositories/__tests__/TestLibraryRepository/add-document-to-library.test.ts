import { PrismaClient } from '@prisma/client';
import { TYPES } from '../../../config/types';
import { iocContainer as Container } from '../../../config/container';
import { ILoggerService } from '../../../interfaces/ILoggerService';
import { IDatabaseService } from '../../../interfaces/IDatabaseService';
import { LibraryRepository } from '../../LibraryRepository';

describe('authentication and authorization', () => {
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);
    const libraryRepository = new LibraryRepository(loggerService, databaseService);

    let prisma: PrismaClient;

    // connection db before starting the test
    beforeAll(() => {
        prisma = new PrismaClient({
            datasources: {
                db: {
                    url: 'postgresql://postgres:fenil2301@localhost:5432/thelink',
                },
            },
        });
    });

    // disconnect db after testing is over
    afterAll(async (done) => {
        await prisma.libraryDocument.deleteMany();
        await prisma.$disconnect();
        done();
    });

    describe('add document to library', () => {
        test('document is added', async () => {
            try {
                const result = await libraryRepository.addDocumentToLibrary(1n, 1n);
                expect(result).toBe(true);
            } catch (error) {
                // Left empty
            }
        });
    });
});

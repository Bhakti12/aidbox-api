import { inject, injectable } from 'inversify';
import { TYPES } from '../config/types';
import { InternalServerError } from '../errors/InternalServerError';
import { NotFound } from '../errors/NotFound';
import { IDatabaseService } from '../interfaces/IDatabaseService';
import { ILoggerService } from '../interfaces/ILoggerService';
import { ITestRepository } from '../interfaces/ITestRepository';
import { User } from '../types/Test';

@injectable()
export class TestRepository implements ITestRepository {
    private _loggerService: ILoggerService;

    private _databaseService: IDatabaseService;

    constructor(
        @inject(TYPES.LoggerService) loggerService: ILoggerService,
        @inject(TYPES.DatabaseService) databaseService: IDatabaseService,
    ) {
        this._loggerService = loggerService;
        this._databaseService = databaseService;
    }

    async getUser(emailId: string): Promise<User> {
        this._loggerService.getLogger().info(`Getting user using ${emailId}`);

        try {
            const client = this._databaseService.Client();
            this._loggerService.getLogger().info('WE are connected to database');
            const user = await client.accountUser.findUnique({
                where: {
                    emailId,
                },
                select: {
                    id: true,
                    name: true,
                    companyName: true,
                },
            });
            console.log(user);

            if (user == null) {
                throw new NotFound('User not found');
            }

            return user;
        } catch (e) {
            console.log('Error', e);

            if (e instanceof NotFound) {
                throw e;
            }
            throw new InternalServerError('Db not connected');
        } 
    }
}

import { inject, injectable } from 'inversify';
import { TYPES } from '../config/types';
import { ITestRepository } from '../interfaces/ITestRepository';
import { ITestService } from '../interfaces/ITestService';
import { User } from '../types/Test';

@injectable()
export class TestService implements ITestService {
    private _testService: ITestRepository;

    constructor(@inject(TYPES.TestRepository) testRepository: ITestRepository) {
        this._testService = testRepository;
    }

    async getUser(emailId: string): Promise<User> {
        const user = await this._testService.getUser(emailId);
        console.log(user, 'in service');

        return user;
    }
}

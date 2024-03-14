/* eslint-disable import/no-cycle */
import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';

import { TYPES } from './types';
import { IQuestionnaireResponseRepository } from '../interfaces/IQuestionnaireResponseRepository';
import { IQuestionnaireResponseService } from '../interfaces/IQuestionnaireResponseService';
import { QuestionnaireResponseRepository } from '../repositories/QuestionnaireResponseRepository';
import QuestionnaireResponseService from '../services/QuestionnaireResponseService';
// import QuestionnaireResponseService from '../services/QUestionnaireResponseServicevice';

const iocContainer = new Container();

// make inversify aware of inversify-binding-decorators
iocContainer.load(buildProviderModule());

// Services
iocContainer.bind<IQuestionnaireResponseRepository>(TYPES.QuestionnaireResponseRepository).to(QuestionnaireResponseRepository);
iocContainer.bind<IQuestionnaireResponseService>(TYPES.QuestionnaireResponseService).to(QuestionnaireResponseService);

export { iocContainer };
/* eslint-disable import/no-cycle */
import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';

import { TYPES } from './types';
import { IQuestionnaireResponseRepository } from '../interfaces/IQuestionnaireResponseRepository';
import { IQuestionnaireResponseService } from '../interfaces/IQuestionnaireResponseService';
import { QuestionnaireResponseRepository } from '../repositories/QuestionnaireResponseRepository';
import QuestionnaireResponseService from '../services/QuestionnaireResponseService';
import { ISubscriptionRepository } from '../interfaces/ISubscriptionRepostiory';
import { ISubscriptionService } from '../interfaces/ISubscriptionService';
import { SubscriptionRepostory } from '../repositories/SubscriptionRepository';
import { SubscriptionService } from '../services/SubscriptionService';
import { IPathwayscenarioRepository } from '../interfaces/IPathwayscenarioRepository';
import PathwayScenarioController from '../controllers/pathwayScenarioController';
import PathwayscenarioRepository from '../repositories/PathwayscenarioRepository';
import { IPathwayscenarioService } from '../interfaces/IPathwayscenarioService';
import PathwayscenarioService from '../services/PathwayscenarioService';
import { IPathwayRepository } from '../interfaces/IPathwayRepository';
import PathwayRepository from '../repositories/PathwayRepository';
import { IPathwayService } from '../interfaces/IPathwayService';
import pathwayService from '../services/PathwayService';
import { ICarePlanRepository } from '../interfaces/ICarePlanRepository';
import CareplanRepository from '../repositories/CareplanRepository';
import { ICarePlanService } from '../interfaces/ICarePlanService';
import CareplanService from '../services/CareplanService';
import { IFormtypesRepository } from '../interfaces/IFormtypesRepository';
import Formtypes from '../repositories/FormtypesRepository';
import { IFormtypesService } from '../interfaces/IFormtypesService';
import formtypeService from '../services/FormtypesService';
// import QuestionnaireResponseService from '../services/QUestionnaireResponseServicevice';

const iocContainer = new Container();

// make inversify aware of inversify-binding-decorators
iocContainer.load(buildProviderModule());

// Services
iocContainer.bind<IQuestionnaireResponseRepository>(TYPES.QuestionnaireResponseRepository).to(QuestionnaireResponseRepository);
iocContainer.bind<IQuestionnaireResponseService>(TYPES.QuestionnaireResponseService).to(QuestionnaireResponseService);
iocContainer.bind<ISubscriptionRepository>(TYPES.SubscriptionRepostory).to(SubscriptionRepostory);
iocContainer.bind<ISubscriptionService>(TYPES.SubscriptionService).to(SubscriptionService);
iocContainer.bind<IPathwayscenarioRepository>(TYPES.PathwayscenarioRepository).to(PathwayscenarioRepository);
iocContainer.bind<IPathwayscenarioService>(TYPES.PathwayscenarioService).to(PathwayscenarioService);
iocContainer.bind<IPathwayRepository>(TYPES.PathwayRepository).to(PathwayRepository);
iocContainer.bind<IPathwayService>(TYPES.PathwayService).to(pathwayService);
iocContainer.bind<ICarePlanRepository>(TYPES.CarePlanRepository).to(CareplanRepository);
iocContainer.bind<ICarePlanService>(TYPES.CarePlanService).to(CareplanService);
iocContainer.bind<IFormtypesRepository>(TYPES.FormtypesRepository).to(Formtypes);
iocContainer.bind<IFormtypesService>(TYPES.FormtypesService).to(formtypeService);

export { iocContainer };
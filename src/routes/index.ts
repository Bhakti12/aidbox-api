/* eslint-disable import/no-cycle */
import questionnareRouter from './questionnaire.route';
import subscriptionRouter from './subscription.route';
import pathwayRouter from './pathwayscenario.route';
import pathway_formtypesRouter from './pathway_formtypes.route';
import careplan_pathwayRouter from './careplan_pathway.route';
import formtypesRouter from './formtypes.route';
import careplanRouter from './careplan.route';
import transferResourcedatacontrolRouter from './transferResourceData.route';

export default {
    questionnareRouter,
    subscriptionRouter,
    pathwayRouter,
    pathway_formtypesRouter,
    careplan_pathwayRouter,
    formtypesRouter,
    careplanRouter,
    transferResourcedatacontrolRouter
};

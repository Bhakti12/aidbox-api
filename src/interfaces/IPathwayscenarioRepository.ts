export interface IPathwayscenarioRepository{
    addPathway_formtypes():Promise<any>;
    addCareplan_pathway():Promise<any>;
    getFormsOfPatient():Promise<any>;
}
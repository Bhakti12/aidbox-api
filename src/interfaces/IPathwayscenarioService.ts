import { careplan_pathway, formtypes_pathway } from "../types/Pathwayscenario";

export interface IPathwayscenarioService{
    addPathway_formtypes(pathwayFormtype:formtypes_pathway):Promise<any>;
    addCareplan_pathway(careplanPathway:careplan_pathway):Promise<any>;
    getFormsOfPatient():Promise<any>;
}
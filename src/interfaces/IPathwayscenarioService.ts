import { aidboxQuery, careplan_pathway, formtypes_pathway } from "../types/Pathwayscenario";

export interface IPathwayscenarioService{
    addPathway_formtypes(pathwayFormtype:formtypes_pathway):Promise<any>;
    addCareplan_pathway(careplanPathway:careplan_pathway):Promise<any>;
    storeQuery(query:aidboxQuery,queryName:string):Promise<any>;
    getFormsOfPatient(queryName:string):Promise<any>;
}
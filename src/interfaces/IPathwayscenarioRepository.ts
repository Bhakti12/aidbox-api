import { aidboxQuery, careplan_pathway, formtypes_pathway } from "../types/Pathwayscenario";

export interface IPathwayscenarioRepository{
    storeQuery(query:aidboxQuery,queryName:string):Promise<any>;
    getFormsOfPatient(queryName:string):Promise<any>;
}
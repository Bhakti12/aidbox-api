import { formtypes_pathway } from "../types/Pathwayscenario";

export interface IPathway_formtypesService{
    addPathway_formtypes(pathwayFormtype:formtypes_pathway):Promise<any>;
}
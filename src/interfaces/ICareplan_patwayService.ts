import { careplan_pathway } from "../types/Pathwayscenario";

export interface ICareplan_pathwayService{
    addCareplan_pathway(careplanPathway:careplan_pathway):Promise<any>;
}
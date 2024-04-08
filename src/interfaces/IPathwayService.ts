import { pathwayDetails } from "../types/Question";

export interface IPathwayService{
    addPathwayData(pathway:pathwayDetails) : Promise<any>;
    getPathway(): Promise<any>;
}
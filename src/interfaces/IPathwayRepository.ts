import { pathwayDetails } from "../types/Question";

export interface IPathwayRepository{
    addPathwayData(pathway:pathwayDetails) : Promise<any>;
    getPathway(): Promise<any>;
}
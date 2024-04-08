import { IPathwayRepository } from "../interfaces/IPathwayRepository";
import { pathwayDetails } from "../types/Question";

export default class PathwayRepository implements IPathwayRepository{
    addPathwayData(pathway: pathwayDetails): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getPathway(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}
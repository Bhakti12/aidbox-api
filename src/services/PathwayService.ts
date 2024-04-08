import { IPathwayService } from "../interfaces/IPathwayService";
import { pathwayDetails } from "../types/Question";

export default class pathwayService implements IPathwayService{
    addPathwayData(pathway: pathwayDetails): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getPathway(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}
import { injectable } from "inversify";
import { IPathwayscenarioRepository } from "../interfaces/IPathwayscenarioRepository";

@injectable()
export default class PathwayscenarioRepository implements IPathwayscenarioRepository{
    addPathway_formtypes(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    addCareplan_pathway(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getFormsOfPatient(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}
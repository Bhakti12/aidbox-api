import { inject, injectable } from "inversify";
import { IFormtypesRepository } from "../interfaces/IFormtypesRepository";
import { IFormtypesService } from "../interfaces/IFormtypesService";
import { formtypesDetails } from "../types/Question";
import { TYPES } from "../config/types";
import { InternalServerError } from "../errors/InternalServerError";

@injectable()
export default class formtypeService implements IFormtypesService {
  private _formtypesRepo: IFormtypesRepository;

  constructor(
    @inject(TYPES.FormtypesRepository)
    formtypesRepo: IFormtypesRepository
  ) {
    this._formtypesRepo = formtypesRepo;
  }
  async addFormTypeData(formtype: formtypesDetails): Promise<any> {
    try {
      const result = await this._formtypesRepo.addFormTypeData(formtype);
      return result;
    } catch (err: any) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async getFormType(): Promise<any> {
    try {
      const result = await this._formtypesRepo.getFormType();
      return result;
    } catch (err: any) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}

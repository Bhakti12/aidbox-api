import { injectable } from "inversify";
import { ISubscriptionRepository } from "../interfaces/ISubscriptionRepostiory";
import { InternalServerError } from "../errors/InternalServerError";
import { Subscription } from "../types/Subscription";

@injectable()
export class SubscriptionRepostory implements ISubscriptionRepository {
  async createSubscription(subscription:Subscription): Promise<any> {
    try {
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async getStatusOfSubscription(): Promise<any> {
    try {
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async getSubscriptionEvents(): Promise<any> {
    try {
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async deleteSubscriptions(): Promise<any> {
    try {
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}

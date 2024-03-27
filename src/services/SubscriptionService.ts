import { inject, injectable } from "inversify";
import { ISubscriptionService } from "../interfaces/ISubscriptionService";
import { ISubscriptionRepository } from "../interfaces/ISubscriptionRepostiory";
import { TYPES } from "../config/types";
import { Subscription } from "../types/Subscription";
import { InternalServerError } from "../errors/InternalServerError";

@injectable()
export class SubscriptionService implements ISubscriptionService {
  private _subscriptionRepo: ISubscriptionRepository;

  constructor(
    @inject(TYPES.SubscriptionRepostory)
    subscriptionRepo: ISubscriptionRepository
  ) {
    this._subscriptionRepo = subscriptionRepo;
  }

  async createSubscription(subscription:Subscription): Promise<any> {
    try {
        const operations = await this._subscriptionRepo.createSubscription(subscription);
        return operations;
      } catch (err) {
        console.log("err", err);
        throw new InternalServerError(
          "An error occurred while interacting with the database"
        );
      }
  }
  async getStatusOfSubscription(): Promise<any> {
    try {
        const operations = await this._subscriptionRepo.getStatusOfSubscription();
        return operations;
      } catch (err) {
        console.log("err", err);
        throw new InternalServerError(
          "An error occurred while interacting with the database"
        );
      }
  }
  async getSubscriptionEvents(): Promise<any> {
    try {
        const operations = await this._subscriptionRepo.getSubscriptionEvents();
        return operations;
      } catch (err) {
        console.log("err", err);
        throw new InternalServerError(
          "An error occurred while interacting with the database"
        );
      }
  }
  async deleteSubscriptions(): Promise<any> {
    try {
        const operations = await this._subscriptionRepo.deleteSubscriptions();
        return operations;
      } catch (err) {
        console.log("err", err);
        throw new InternalServerError(
          "An error occurred while interacting with the database"
        );
      }
  }
}

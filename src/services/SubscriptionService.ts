import { inject, injectable } from "inversify";
import { ISubscriptionService } from "../interfaces/ISubscriptionService";
import { ISubscriptionRepository } from "../interfaces/ISubscriptionRepostiory";
import { TYPES } from "../config/types";
import { Subscription } from "../types/Subscription";

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
    throw new Error("Method not implemented.");
  }
  async getStatusOfSubscription(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async getSubscriptionEvents(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async deleteSubscriptions(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

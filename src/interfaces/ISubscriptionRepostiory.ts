import { Subscription } from "../types/Subscription";

export interface ISubscriptionRepository{
    createSubscription(subscription:Subscription):Promise<any>;
    getStatusOfSubscription():Promise<any>;
    getSubscriptionEvents():Promise<any>;
    deleteSubscriptions():Promise<any>;
}
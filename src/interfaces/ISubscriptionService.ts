import { Subscription } from "../types/Subscription";

export interface ISubscriptionService{
    createSubscription(subscription:Subscription):Promise<any>;
    getStatusOfSubscription():Promise<any>;
    getSubscriptionEvents():Promise<any>;
    deleteSubscriptions():Promise<any>;
}
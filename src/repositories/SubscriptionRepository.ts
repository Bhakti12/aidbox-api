import { injectable } from "inversify";
import { ISubscriptionRepository } from "../interfaces/ISubscriptionRepostiory";
import { InternalServerError } from "../errors/InternalServerError";
import { Subscription } from "../types/Subscription";
import { config } from "../config/env";
import axios from "axios";

@injectable()
export class SubscriptionRepostory implements ISubscriptionRepository {
  async createSubscription(subscription: Subscription): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/fhir/Subscription`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;
      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );
      const result = await axios.post(url, subscription, {
        headers: {
          Authorization: `Basic ${credentials}`,
          accept: "application/json",
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }

  async getStatusOfSubscription(): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/fhir/Subscription/cf153a1fde850de90215a6cd0f0abcf5/$status`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;
      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );
      const result = await axios.get(url, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  
  async getSubscriptionEvents(): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/Subscription/cf153a1fde850de90215a6cd0f0abcf5/$events`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;
      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );
      const result = await axios.get(url, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }

  async deleteSubscriptions(): Promise<any> {
    try {
        const url = `${config.AIDBOX_URL}/Subscription/cf153a1fde850de90215a6cd0f0abcf5`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;
      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );
      const result = await axios.delete(url, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}

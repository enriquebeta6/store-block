import { IOClients } from "@vtex/api";
import GiphyClient from './giphy';

export class Clients extends IOClients {
  public get giphy() {
    return this.getOrSet('giphy', GiphyClient)
  }
}

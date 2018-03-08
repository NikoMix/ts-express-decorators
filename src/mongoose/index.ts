import {ConnectionOptions} from "mongoose";
import {MDBConnection} from "./interfaces/MDBConnection";

declare interface IServerSettings {
    mongoose: {
        url?: string;
        connectionOptions?: ConnectionOptions;
        urls?: { [key: string]: MDBConnection }
    };
}

export * from "./services/MongooseService";
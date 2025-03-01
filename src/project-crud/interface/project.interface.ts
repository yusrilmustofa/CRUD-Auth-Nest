import { Document } from "mongoose";

export class Project extends Document{
    readonly title: String;
    readonly description: String
}
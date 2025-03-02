import { Document } from 'mongoose';
export class User extends Document {
    readonly name: string;
    readonly email: string;
    password: string;
}
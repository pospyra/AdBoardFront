import { Guid } from "guid-typescript"

export interface UserDto{
id: Guid;
name: string;
login: string;
password: string;
number: string;
email: string;
region: string;
}
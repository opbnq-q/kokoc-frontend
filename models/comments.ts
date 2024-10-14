import type { IUser } from "./user";

export interface IComment {
    id: number,
    createdAt: string,
    content: string,
    columnId: number,
    authorId: number,
    matchId: number,
    author: IUser
}
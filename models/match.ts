import type { IComment } from "./comments";
import type { IMember } from "./member";

export interface IMatch {
    id: number,
    createdAt: string,
    matchName: string,
    dateTime: string,
    videoUrl: string,
    secondTeamName: string,
    kokocGoalsScored: number,
    kokocGoalsConceded: number,
    secondTeamGoalsScored: number,
    secondTeamGoalsConceded: number,
    kokocYellowCards: number,
    kokocRedCards: number,
    secondTeamYellowCards: number,
    secondTeamRedCards: number,
    result: "win" | "loss" | "draw",
    kokocComposition: IMember[],
    secondTeamComposition: IMember[],
    comments: IComment[]
}
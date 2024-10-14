import type { EMemberRole } from "./memberRole";
import type { IStatistics } from "./statistics";

export interface IMember {
    id: number,
    birthDate: string,
    createdAt: string,
    info: string,
    matches: [],
    attachments: [],
    name: string,
    role: keyof typeof EMemberRole,
    statistics: IStatistics
}

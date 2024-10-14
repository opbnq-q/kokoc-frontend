import type { ECategory } from "./category";

export interface IColumn {
    id: number,
    createdAt: string,
    category: keyof typeof ECategory,
    title: string,
    content: string,
    likes: number,
    dislikes: number,
    liked: boolean,
    disliked: boolean,
    summary: string,
    image?: string
}
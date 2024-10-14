export interface HTTPResponse<T> {
    status: "success" | "error",
    data: T,
    message?: string
}


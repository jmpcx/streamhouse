interface ApiResponse<T> {
    success: boolean;        // whether the request succeeded
    message: string;         // human-readable status/info
    data: T;                 // payload (generic)
}

export type { ApiResponse };
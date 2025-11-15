import type { ApiError } from "@/lib/types/interfaces";

export type HttpMethod = 'get' | 'post';

export interface RequestOptions<TBody = unknown> {
    method: HttpMethod;
    url: string;
    body?: TBody;
    headers?: Record<string, string>;
    params?: Record<string, string | number>;
}

export interface ApiResponse<TData> {
    success: boolean;
    data?: TData;
    error?: ApiError;
}
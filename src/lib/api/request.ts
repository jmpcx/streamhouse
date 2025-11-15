import { http } from './transport';
import type { RequestOptions, ApiResponse } from '@/lib/network/types';
import type { ApiError } from "@/lib/types/interfaces";

export async function request<TResponse, TBody = unknown>(options: RequestOptions<TBody>): Promise<ApiResponse<TResponse>> {
    const { method, url, body, headers, params } = options;

    try {
        const res = await http.request<ApiResponse<TResponse>>({
            method,
            url,
            data: body,
            headers,
            params
        });

        return res.data;
    } catch (err: unknown) {
        const apiError: ApiError = { code: 'NETWORK_ERROR', message: 'Failed to reach server', details: err };

        return {
            success: false,
            error: apiError
        };
    }
}
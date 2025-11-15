import { request } from './request';
import { getSession } from './session';
import type { Movie } from '@/lib/types/interfaces';

export const MoviesApi = {
    async getAll() {
        const session = await getSession();
        if (!session) return;

        return request<Movie[]>({method: 'get', url: `movies?guestId=${session.guestId}`});
    }
}
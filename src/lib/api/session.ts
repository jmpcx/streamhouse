import { request } from './request';

export interface GuestSession {
    guestId: string;
    createdAt: string;
    expiresAt: string;
}

let session: GuestSession | null = null;

export async function getSession() {
    if (session) return session;

    const res = await request<GuestSession>('post', 'user/guest-session');
    if (res.success) session = res.data;

    return session;
}

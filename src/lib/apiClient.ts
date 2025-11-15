import axios from 'axios';
import type {ApiResponse} from "@/lib/networkUtil.ts";

const apiURL = 'http://localhost:3000/api/v1/';

const apiClient = axios.create({
    baseURL: apiURL,
    timeout: 3000, // 3 seconds
    validateStatus: function () {
        return true
    }
})

interface GuestSession {
    guestId: string;
    createdAt: string;
    expiresAt: string;
}

interface Movie {
    movieId: string,
    title: string,
    description: string
}

let currentGuestSession: GuestSession | null = null;

const createGuestSession = async () => {
    if (currentGuestSession) return currentGuestSession;

    try {
        const axiosResponse = await apiClient.post<ApiResponse<GuestSession>>('user/guest-session');
        const apiResponse = axiosResponse.data;

        if (apiResponse.success) {
            currentGuestSession = apiResponse.data;
        } else {
            console.log('Failed to create guest session: ', apiResponse.message);
            return;
        }
    } catch (err) {
        console.error('Network error or timeout: ', err);
    }

    return currentGuestSession;
}

const getAllMovies = async () => {
    const session = currentGuestSession ?? (await createGuestSession());
    if (!session) { return; } //  A quick band-aid cuz typescript complaining

    try {
        const axiosResponse: ApiResponse<Movie[]> = await axios.get(`movies?guestId=${session.guestId}/`);
        return axiosResponse.data;
    } catch (err) {
        console.error('Failed to get movies: ', err);
    }
}

const SHClient = {
    session: currentGuestSession,
    createGuestSession,
    getAllMovies
};

export default SHClient;
// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

import axios from 'axios';
import { User, RandomUserOptions, ApiResponse } from './types.js';

export class RandomUserClient {
    private baseUrl = 'https://randomuser.me/api/';

    /**
     * Fetch a single random user.
     */
    async getUser(options?: Omit<RandomUserOptions, 'results'>): Promise<User> {
        const users = await this.getUsers({ ...options, results: 1 });
        return users[0];
    }

    /**
     * Fetch multiple random users.
     */
    async getUsers(options?: RandomUserOptions): Promise<User[]> {
        try {
            const response = await axios.get<ApiResponse>(this.baseUrl, { params: options });
            return response.data.results;
        } catch (error: any) {
            throw new Error(`Failed to fetch users: ${error.message}`);
        }
    }
}

export * from './types.js';

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

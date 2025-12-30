// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface User {
    gender: string;
    name: Name;
    email: string;
    nat: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export interface RandomUserOptions {
    results?: number;
    gender?: 'male' | 'female';
    nat?: string;
    seed?: string;
}

export interface ApiResponse {
    results: User[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

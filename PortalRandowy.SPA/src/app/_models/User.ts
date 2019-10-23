import { Photo } from './Photo';

export interface User {
        /** Podstawowe informacje */
        id: number;
        username: string;
        gender: string;
        age: number;
        zodiacSign: string;
        created: Date;
        lastActive: Date;
        city: string;
        country: string;
        /** Zakladka Info */
        growth: string;
        eyeColor: string;
        hairColor: string;
        martialStatus: string;
        education: string;
        profession: string;
        children: string;
        languages: string;
        /** Zakladka O Mnie */
        motto: string;
        description: string;
        personality: string;
        lookingFor: string;
        /** Zakladka Pasje, Zainteresowania */
        interests: string;
        freeTime: string;
        sport: string;
        movies: string;
        music: string;
        /** Zakladka preferencje */
        iLike: string;
        idoNotLike: string;
        makesMeLaugh: string;
        itFeelsBestIn: string;
        friendeWouldDescribeMe: string;
        /** Zakladka Zdjęcia */
        photos: Photo[];
        photoUrl: string;
}

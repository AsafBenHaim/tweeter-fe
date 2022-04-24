import { User } from './user.model';

export interface Tweet {
    time: Date;
    message: string;
    user: User;
    retweets: number;
    likes: number;
}

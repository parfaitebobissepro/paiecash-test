import { User } from "../modules/users/models/user"

type Auth = {
    currentUser: User,
    connected: boolean,
}

export type { Auth }

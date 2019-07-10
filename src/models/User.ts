import {Films} from './Films';

export class User {

    constructor(
        public id: number = 0,
        public username: string = '',
        public password: string = '',
        public email: string = '',
        public avatar: string = '',
        public usersFilms: Films[] = [],
        public status: string = '',
        public subscribes: string[] = [],
        public folowing: string[] = [],
        public role: string = ''
    ) {
    }
}

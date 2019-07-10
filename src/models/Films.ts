export class Films {
    constructor(
        public id: number = null,
        public name: string = ' ',
        public aboutFilm: string = ' ',
        public year: string = ' ',
        public country: string = ' ',
        public quality: string = ' ',
        public  picture: string = ' ',
        public  movie: string = ' ',
        public  genre: string [] = [],
        public  score: number = null,
        public trailer: string = '',
        public screenShots: string [] = [],
        public audio: string [] = []
    ){}
}

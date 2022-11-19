export class NewsModel {
    constructor(
        public total_hits: number,
        public author : string, 
        public title : string, 
        public excerpt : string, 
        public link : string, 
        public media : string, 
        public summary : string, 
        public published_date : string, 
        public rights: string
    ){}
}

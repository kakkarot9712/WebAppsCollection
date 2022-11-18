export class NewsModel {
    constructor(
        public totalResults: number,
        public author : string, 
        public title : string, 
        public description : string, 
        public url : string, 
        public urlToImage : string, 
        public content : string, 
        public publishedAt : string, 
        public source : {
            id: string,
            name: string
        }
    ){}
}

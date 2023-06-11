
export class Book{
    constructor(
        public bookId:number=0,
        public title:string='',
        public description:string='',
        public image:string='',
        public previewLink:string='',
        public infoLink:string='',
        public publisher:string='',
        public publishedOn:Date=new Date(),
        public authors:string[]=[],
        public authorIds:number[]=[]
    ){}
}

export class Category{
    constructor(
        public categoryId:number=0,
        public categoryName:string='',
        public bookIds:number[]=[],
        public books:Book[]=[]
    ){}
}

export class Author{
    constructor(
        public authorId:number=0,
        public authorName:string='',
        public bookIds:number[]=[],
        public books:Book[]=[]  
    ){}
}


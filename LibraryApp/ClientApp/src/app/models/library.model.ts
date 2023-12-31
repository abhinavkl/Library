import { Pagination } from "./pagination.model";

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
        public authorIds:number[]=[],
        public categories:string[]=[],
        public categoryIds:number[]=[]
    ){}
}

export class BookResult{
    constructor(
        public books:Book[],
        public filters:BookFilters,
        public pagination:Pagination
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

export class BookFilters{
    constructor(
        public categories:number[]=[]
    ){}
}


import { Brand } from "./Brand";
import { Category } from "./Category";


export class Product{
    id?:number;
    name:string;
    ref:string;
    description: string;
    price:number;
    brand:Brand;
    category:Category;

    constructor(name:string,
        ref: string, 
        description: string, 
        price:number, 
        brand:Brand, 
        category: Category, 
        id?:number)
        {
        this.name = name;
        this.ref = ref;
        this.description = description;
        this.price = price;
        this.brand = brand;
        this.category = category;
        this.id = id;
    }
}
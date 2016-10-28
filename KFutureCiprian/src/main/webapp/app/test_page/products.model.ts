export class Product{
    public productId: number;
    public productName: string;
    public price: number;
    public releaseDate: string;
    public description: string;

    constructor( productId: number, productName: string, price: number, releaseDate: string, description: string){
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.releaseDate = releaseDate;
        this.description = description;
    }
    
}
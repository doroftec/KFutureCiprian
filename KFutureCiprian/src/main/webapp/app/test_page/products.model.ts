export class Product{
    public productId: number;
    public productName: string;
    public price: number;
    public releaseDate: string;

    constructor( productId: number, productName: string, price: number, releaseDate: string){
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.releaseDate = releaseDate;
    }
}
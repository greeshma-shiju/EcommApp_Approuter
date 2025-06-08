import { ServiceBase } from "./service-base";
export class ProductsService extends ServiceBase {
    static getProducts =async () =>{
        var productsRes=await fetch(this.getUrl('/products'),{
            next:{
                revalidate:60
            }
            // cache:'no-store' 
            //disabling cache
        });

    var products=await productsRes.json();
    return products;

    }
    static getProductById = async (id:number) =>{
        var productRes=await fetch(this.getUrl('/products/'+ id));
    var product=await productRes.json();
    return product; 
    }
}
export class Cart {
  private readonly products: Product[] = [];

  public insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  public quantityOfProducts(): number {
    return this.products.length;
  }

  public totalAmount(): number {
    return this.products.reduce((soma, product) => soma + product.price, 0);
  }


}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product("T-shirt", 99);
const product2 = new Product("lapTop", 1490.89);
const product3 = new Product("Apple vision Pro", 3999.9);
const cart = new Cart();

cart.insertProduct(product1, product2, product3);

console.table(cart);
console.log(cart.quantityOfProducts());
console.log(cart.totalAmount());


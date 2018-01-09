export class Product {
  id: string;
  name: string;
  pid: string;
  categoryRef: string;
  attributes: Array<Object>;
  variants: Array<{
    name: string,
    sku: string,
    price: number,
    images: Array<string>,
    attributes: Array<Object>,
    featured: boolean,
    description: string,
    brand: string,
    categoryRef: string
  }>;
}

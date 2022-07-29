import connection from '../models/connection';
import ProductModel from '../models/product.model';
import ProductInterface from '../interfaces/product.interface';

export default class ProductsService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: ProductInterface): Promise<ProductInterface> {
    return this.model.create(product);
  }

  public async getAll(): Promise<ProductInterface[]> {
    const products = await this.model.getAll();
    return products;
  }
}

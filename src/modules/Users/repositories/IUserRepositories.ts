import { Address } from "../entities/Address";
import { User } from "../entities/User";
import { Product } from "modules/Products/entities/Product";

export interface IUserRepositories{
  create(body: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findAll(limit: number, offset: number): Promise<User[]>
  findById(id: string): Promise<User | null>;
  update(id: string, data: User): Promise<void>;
  delete(id: string): Promise<void>;
  addNewAddress(userId: string, address: Address): Promise<void>;
  removeAddress(userId: string, addressId: string): Promise<void>;
  findByAddressId(userId: string, addressId: String): Promise<Address | null>;
  addFavoriteProduct(userId: string, productId: string): Promise<void>;
  findFavoriteProductById(userId: string, productId: string): Promise<Product | null>;
  removeFavoriteProduct(userId: string, productId: string): Promise<void>;
}


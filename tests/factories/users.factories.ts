import { Product } from "@/modules/Products/entities/Product";
import ProductSchema from "@/modules/Products/schemas/ProductSchema";
import { User } from "@/modules/Users/entities/User";
import UserSchema from "@/modules/Users/schemas/UserSchema";
import {faker} from '@faker-js/faker'
import { ObjectId } from "mongodb";
import { dirname, join } from "path";
import fs from "fs";


export function createPathAndImage(){
  const __dirname = dirname(new URL(import.meta.url).pathname);
  const folderPath = join(__dirname, "images");
  if(!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
  const imageName =  `image.png`;
  const imageContent = "";
  const imagePath = join(folderPath, imageName);
  fs.writeFileSync(imagePath, imageContent); 

  return imagePath;
}

export function newUser(){
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: createPathAndImage(),
    admin: faker.datatype.boolean()
  };
}

export async function newUserDB(){
  const user = newUser();
  const userDB = await UserSchema.create(user);
  return userDB;
}

export function newInvalidUserSchema(){
 const user = newUser();
  return {...user, name: 12, password: 111, email: false}
}

export function newInvalidToken(){
  return faker.string.uuid();
}

export function newRandomObjectId(){
  return new ObjectId();
}

export function newUserWithoutPassword(){
  const user = newUser();
  const {password, ...userWithoutPassword} = user;
  return userWithoutPassword;
}

export async function deleteUserDB(user: User){
  await UserSchema.deleteOne({_id: user._id});
}

export function newAddress(){
  return {
    street: faker.location.street(),
    number: faker.location.buildingNumber(),
    complement: faker.location.secondaryAddress(),
    zipcode: faker.location.zipCode()
  };
}

export function newInvalidAddressSchema(){
  const address = newAddress();
   return {...address, street: 12, number: false, zipcode: 22.5}
 }

export async function createUserAddressDB(user: User){
  const address = newAddress();
  await UserSchema.updateOne(
        {
          _id: user._id
        },
        {
          $push: {
            addresses: address
          }
        }
      );
}

export async function findUserById(user: User){
  return await UserSchema.findOne({_id: user._id});
}

export async function createProductDB(){
  const product = {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    unit_price: faker.number.float(),
    bar_code: faker.number.int({min: 8}),
    image: createPathAndImage(),
  };
  return await ProductSchema.create(product);
}

export async function addFavProductUserDB(user: User, product: Product){
  await UserSchema.updateOne(
        {
          _id: user._id
        },
        {
          $push: {
            favorite_products: {
              _id: product._id,
            }
          }
        }
      );
}

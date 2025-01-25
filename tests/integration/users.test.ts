import app, {init, close} from "../../src/app";
import supertest from "supertest";
import { cleanDB, generateToken } from "../helpers/utils";
import {  newUserWithoutPassword, 
          newInvalidToken, 
          newInvalidUserSchema, 
          newRandomObjectId, 
          newUser, 
          newUserDB, 
          deleteUserDB,
          newAddress,
          newInvalidAddressSchema,
          createUserAddressDB,
          findUserById,
          createProductDB,
          addFavProductUserDB,
          createPathAndImage} from "../factories/users.factories";

const supertestServer = supertest(app);

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await close();
});

beforeEach(async () => {
  await cleanDB();
}, 100_000);

describe("POST /user", () => {
  it("Should create a user and return status code 201", async () => {
    const user = newUser();
    const result = await supertestServer.post("/users/").send(user);

    expect(result.statusCode).toBe(201);
  });

  it("Should return status code 409 if user email already exists", async () => {
    const user = newUserDB();
    const result = await supertestServer.post("/users/").send(user);

    expect(result.statusCode).toBe(409);
  });

  it("Should return status code 409 if user schema incorrect", async () => {
    const user = newInvalidUserSchema();
    const result = await supertestServer.post("/users/").send(user);

    expect(result.statusCode).toBe(409);
  });

});

describe("GET /users", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.get("/users/");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .get("/users/")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .get("/users/")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should find all users and return status code 200 and Array", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const result = await supertestServer
      .get("/users/")
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
  });
});

describe("GET /users/:id", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.get("/users/1");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .get("/users/1")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .get("/users/1")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const fakeId = newRandomObjectId();
    const user = await newUserDB();
    const token = generateToken(user);
    const result = await supertestServer
      .get(`/users/${fakeId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
  });

  it("Should find user and return status code 200", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const result = await supertestServer
      .get(`/users/${user._id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({
      _id: expect.any(String),
      name: user.name,
      email: user.email,
      image: user.image,
      admin: user.admin,
      addresses: expect.any(Array),
      favorite_products: expect.any(Array),
      created_at: expect.any(String),
      });
  });

});

describe("PATCH /users/", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.patch("/users/");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .patch("/users/")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .patch("/users/")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    await deleteUserDB(user);
    const result = await supertestServer
      .patch(`/users/`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
  });

  it("Should update one user without password and return status code 204", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const body = newUserWithoutPassword();
    const result = await supertestServer
      .patch(`/users/`)
      .set("Authorization", `Bearer ${token}`)
      .send(body);

    expect(result.statusCode).toBe(204);
  });

  it("Should update one user with password and return status code 204", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const body = newUser();
    const result = await supertestServer
      .patch(`/users/`)
      .set("Authorization", `Bearer ${token}`)
      .send(body);

    expect(result.statusCode).toBe(204);

  });

});

describe("DELETE /users/", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.delete("/users/");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .delete("/users/")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .delete("/users/")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    await deleteUserDB(user);
    const result = await supertestServer
      .delete(`/users/`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
  });

  it("Should delete one user and return status code 204", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const result = await supertestServer
      .delete(`/users/`)
      .set("Authorization", `Bearer ${token}`)

    expect(result.statusCode).toBe(204);
  });
});

describe("POST /users/add-address", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.post("/users/add-address/");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .post("/users/add-address/")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .post("/users/add-address")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    await deleteUserDB(user);
    const result = await supertestServer
      .post(`/users/add-address`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
  });

  it("Should return status code 409 if address schema incorrect", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const address = newInvalidAddressSchema();

    const result = await supertestServer
      .post(`/users/add-address`)
      .set("Authorization", `Bearer ${token}`)
      .send(address);

    expect(result.statusCode).toBe(409);
  });

  it("Should add address and return status code 201", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const address = newAddress();

    const result = await supertestServer
      .post(`/users/add-address`)
      .set("Authorization", `Bearer ${token}`)
      .send(address);

    expect(result.statusCode).toBe(201);
  });
});

describe("DELETE /users/remove-address/:addressId", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.delete("/users/remove-address/1");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .delete("/users/remove-address/1")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .delete("/users/remove-address/1")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    await deleteUserDB(user);
    const result = await supertestServer
      .delete("/users/remove-address/1")
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
    expect(result.body.message).toEqual("User not found");
  });

  it("Should return status code 404 if address not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);

    const addressId = newRandomObjectId();

    const result = await supertestServer
      .delete(`/users/remove-address/${addressId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
    expect(result.body.message).toEqual("Address not found");
  });

  it("Should remove address and return status code 204", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    await createUserAddressDB(user);

    const userWithAddress = await findUserById(user);

    const addressId = userWithAddress?.addresses[0]?._id;

    const result = await supertestServer
      .delete(`/users/remove-address/${addressId}`)
      .set("Authorization", `Bearer ${token}`)

    expect(result.statusCode).toBe(204);
  });
});

describe("POST /users/add-favorite-product/:productId", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.post("/users/add-favorite-product/1");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .post("/users/add-favorite-product/1")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .post("/users/add-favorite-product/1")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    await deleteUserDB(user);
    const result = await supertestServer
      .post("/users/add-favorite-product/1")
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
    expect(result.body.message).toEqual("User not found");
  });

  it("Should return status code 404 if product not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);

    const productId = newRandomObjectId();

    const result = await supertestServer
      .post(`/users/add-favorite-product/${productId}`)
      .set("Authorization", `Bearer ${token}`)

    expect(result.statusCode).toBe(404);
    expect(result.body.message).toEqual("Product not found");
  });

  it("Should add favorite product and return status code 201", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const product = await createProductDB();

    await addFavProductUserDB(user, product);

    const userWithFavProduct = await findUserById(user);

    const productId = userWithFavProduct?.favorite_products[0]?._id;

    const result = await supertestServer
    .post(`/users/add-favorite-product/${productId}`)
    .set("Authorization", `Bearer ${token}`)
      .send(product._id);

    expect(result.statusCode).toBe(201);
  });
});

describe("DELETE /users/remove-favorite-product/:productId", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.delete("/users/remove-favorite-product/1");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .delete("/users/remove-favorite-product/1")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .delete("/users/remove-favorite-product/1")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    await deleteUserDB(user);
    const result = await supertestServer
      .delete("/users/remove-favorite-product/1")
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
    expect(result.body.message).toEqual("User not found");
  });

  it("Should return status code 404 if product not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);

    const productId = newRandomObjectId();

    const result = await supertestServer
      .delete(`/users/remove-favorite-product/${productId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
    expect(result.body.message).toEqual("Product not found");
  });

  it("Should remove favorite product and return status code 204", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const product = await createProductDB();

    await addFavProductUserDB(user, product);

    const userWithFavProduct = await findUserById(user);

    const productId = userWithFavProduct?.favorite_products[0]?._id;

    const result = await supertestServer
      .delete(`/users/remove-favorite-product/${productId}`)
      .set("Authorization", `Bearer ${token}`)

    expect(result.statusCode).toBe(204);
  });
});

describe("GET /users/avatar/:id", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.get("/users/avatar/1");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .get("/users/avatar/1")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .get("/users/avatar/1")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const fakeId = newRandomObjectId();
    const user = await newUserDB();
    const token = generateToken(user);
    const result = await supertestServer
      .get(`/users/avatar/${fakeId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
  });

  it("Should find avatar by user id and return status code 200", async () => {
    const user = await newUserDB();
    const token = generateToken(user);

    const result = await supertestServer
      .get(`/users/avatar/${user._id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(200);

  });

});


describe("PATCH /user/avatar/", () => {
  it("Should return status code 401 if no token is given", async () => {
    const result = await supertestServer.patch("/users/avatar/");

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid without Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .patch("/users/avatar/")
      .set("Authorization", `${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 401 if given token is invalid with Bearer", async () => {
    const token = newInvalidToken();
    const result = await supertestServer
      .patch("/users/avatar/")
      .set("Authorization", `Bearer ${token}`);  

    expect(result.statusCode).toBe(401);
  });

  it("Should return status code 404 if user not found", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    await deleteUserDB(user);
    const result = await supertestServer
      .patch("/users/avatar/")
      .set("Authorization", `Bearer ${token}`);

    expect(result.statusCode).toBe(404);
  });

  it("Should update user avatar and return status code 204", async () => {
    const user = await newUserDB();
    const token = generateToken(user);
    const pathImage = createPathAndImage();

    const result = await supertestServer
      .patch(`/users/`)
      .set("Authorization", `Bearer ${token}`)
      .attach("avatar", pathImage);

    expect(result.statusCode).toBe(204);

  });

});

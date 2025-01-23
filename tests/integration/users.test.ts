import app, {init, close} from "../../src/app";
import supertest from "supertest";

const supertestServer = supertest(app);

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await close();
});

describe("POST /user", () => {
  it("Should create a user and return status code 201", async () => {
    const result = await supertestServer.post("/users/").send({
        name: "Thiago",
        email: "thiago@gmail.com",
        password: "thiago123",
        image: "teste",
        admin: false
    });

    expect(result.statusCode).toBe(201);
  });
});
import "reflect-metadata";
import { generateToken } from "../helpers/utils";
import { mockCreateUserDB, newUserDB, userToCreateDb } from "../factories/users.factories";
import { Auth } from "@/modules/Auth/entities/Auth";
import { authRepository, singinService } from "../factories/singinService.factories";
import bcrypt from 'bcrypt'
import {jest} from '@jest/globals'
import loadEnvs from "@/helpers/environment";
import { ConflitError } from "@/helpers/errors/apiError";

loadEnvs();


describe("Execute function", () => {
  it("Should generate and return token", async () =>{
    const user = mockCreateUserDB();
    const data = new Auth(user.email,  user.password);
    const token = generateToken(user);

    const spyFindUser = jest.spyOn(authRepository, "findUserByEmail").mockResolvedValue(user);
    const spyBcrypt = jest.spyOn(bcrypt, "compareSync").mockReturnValue(true);
    const spyToken = jest.spyOn(authRepository, "generateToken").mockReturnValue(token);

    const result = await singinService.execute(data);

    expect(spyFindUser).toHaveBeenCalled();
    expect(spyBcrypt).toHaveBeenCalled();
    expect(spyToken).toHaveBeenCalled();
    expect(result).toBe(token);
    
  });

  it("Should return conflict error if user not found", async () => {
    const data = new Auth(userToCreateDb.email,  userToCreateDb.password);

    const spyFindUser = jest.spyOn(authRepository, "findUserByEmail").mockResolvedValue(null);

    await expect(singinService.execute(data)).rejects.toThrow(new ConflitError("Email or password invalid"));

    expect(spyFindUser).toHaveBeenCalled();
  });

  it("Should return conflict error if compare password hash is false", async () => {
    const user = mockCreateUserDB();
    const data = new Auth(userToCreateDb.email, "");

    const spyFindUser = jest.spyOn(authRepository, "findUserByEmail").mockResolvedValue(user);
    const spyBcrypt = jest.spyOn(bcrypt, "compareSync").mockReturnValue(false);

    await expect(singinService.execute(data)).rejects.toThrow(new ConflitError("Email or password invalid"));

    expect(spyFindUser).toHaveBeenCalled();
    expect(spyBcrypt).toHaveBeenCalled();
  });
});
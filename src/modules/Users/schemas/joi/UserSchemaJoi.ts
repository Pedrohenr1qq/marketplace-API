import joi from 'joi';

export const UserSchemaJoi = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  image: joi.string().required(),
  addresses: joi.array(),
  favorite_products: joi.array(),
  admin: joi.boolean(),
  created_at: joi.date().default(false),
})
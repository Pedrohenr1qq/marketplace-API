import joi from "joi"

export const  CartSchemaJoi =  joi.object({
  products: joi.array().required(),
  total_price: joi.number().required(),
  freight: joi.number().required(),
  user_id: joi.string(),
  created_at: joi.date()
});
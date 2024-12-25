import joi from 'joi';

export const ProductSchemaJoi = joi.object({
  name: joi.string().min(2).required(),
  description: joi.string().min(2).required(),
  unit_price: joi.number().required(),
  image: joi.string().required(),
  bar_code: joi.number().min(8).required(),
  categories: joi.array().required(),
  created_at: joi.date().default(false),
})
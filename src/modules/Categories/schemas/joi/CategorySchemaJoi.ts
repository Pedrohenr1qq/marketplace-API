import joi from 'joi';

export const CategorySchemaJoi = joi.object({
  name: joi.string().min(2).required()
})
import joi from 'joi';

export const AddressSchemaJoi = joi.object({
  street: joi.string().required,
  number: joi.number().positive().required(),
  complement: joi.string,
  zipcode: joi.string().required(),
  created_at: joi.date(),
})
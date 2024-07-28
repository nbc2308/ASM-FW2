import Joi from "joi";

export const productShema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  image: Joi.string(),
  category: Joi.string().required(),
});

export const categoryShema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
});

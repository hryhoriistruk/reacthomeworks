import Joi from "joi";

export const postValidator = Joi.object({
  title: Joi.string().required().max(100).messages({
    "string.max": "Max length is 100 characters.",
    "any.required": "Title is required",
  }),

  body: Joi.string().required().max(1000).messages({
    "string.max": "Max length is 100 characters.",
    "any.required": "Body is required",
  }),
});

import Validator from './validator.js'
import Joi from 'joi'

export default class AuthValidator extends Validator {
  login = Joi.object({
    email: Joi.string().max(100).required(),
    password: Joi.string().required()
  })

  signup = Joi.object({
    email_user: Joi.string().email().required(),
    phone_user: Joi.string().min(10).max(10).required(),
    password_user: Joi.string().min(8).required(),
  })
}
import AuthService from '../services/auth.js'
import AuthValidator from '../validators/auth.js'
const AuthServiceInstance = new AuthService()
const AuthValidatorInstance = new AuthValidator()

export async function signup (req, res) {
  const fields = req.body
  await AuthValidatorInstance.validate(req.body, AuthValidatorInstance.signup)
  const jwt = await AuthServiceInstance.signup({ fields })
  res.status(200).json({ jwt })
}

export async function login (req, res) {
  const { email, password } = req.body
  await AuthValidatorInstance.validate(req.body, AuthValidatorInstance.login)
  const jwt = await AuthServiceInstance.login({ email, password })
  res.status(200).json({ jwt })
}

export async function getUser (req, res) {
  const { id } = req.jwt.data
  const user = await AuthServiceInstance.getUser({ id })
  res.status(200).json({ message: 'Utilisateur récupéré', user })
}

export async function logout (req, res) {
  const { id } = req.jwt.data
  const jwt = await AuthServiceInstance.logout({ id })
  res.status(200).json({ message: 'Utilisateur déconnecté', jwt })
}
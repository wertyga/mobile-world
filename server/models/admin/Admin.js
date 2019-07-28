import mongoose from 'mongoose'
import crypto from 'crypto'
import { config } from '../../common/config'

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  hashPassword: String,
})

const createPassword = (pass) => (
  crypto.createHmac('sha256', config.hash.secret).update(pass).digest('hex')
)

adminSchema.methods.comparePasswords = function(pass) {
  return this.hashPassword === createPassword(pass);
}

adminSchema.virtual('pass')
  .get(function() { return this.hashPassword })
  .set(function(pass) { this.hashPassword = createPassword(pass) })

export const Admin = mongoose.model('admin', adminSchema)
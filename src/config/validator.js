import validator from 'validator'

const validate = {
  required: (value) => (value ? undefined : 'Required'),
  email: (value) => (validator.isEmail(value)) ? undefined : 'Enter a valid email'
}

export default validate

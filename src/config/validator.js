import validator from 'validator'

const validate = {
  required: (value) => (value ? undefined : 'Required'),
  url: (value) => (validator.isUrl(value)) ? undefined : 'Enter a valid url',
  email: (value) => (validator.isEmail(value)) ? undefined : 'Enter a valid email'
}

export default validate

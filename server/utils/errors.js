
const invalidDataError = (statusCode, details) => {
  const err = new Error('Invalid Data')
  err.statusCode = statusCode
  err.details = details
  return err
}

exports.invalidDataError = invalidDataError

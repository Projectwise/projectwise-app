import React from 'react'
import { FormGroup, Col } from 'reactstrap'

const TextInput = ({
  input,
  label,
  type,
  id,
  helpBlock,
  meta: { touched, error, warning },
  ...rest
}) => (
  <FormGroup row>
    <Col lg={12}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`form-control ${touched && error ? 'is-invalid' : null}`}
        {...input}
        type={type}
        {...rest}
      />
      {touched && helpBlock && error && <span className='invalid-feedback'><small>{error}</small></span>}
    </Col>
  </FormGroup>
)

export default TextInput

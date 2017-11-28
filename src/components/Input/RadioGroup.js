import React from 'react'
import { Col, FormGroup } from 'reactstrap'

const RadioGroup = ({
  input,
  label,
  options,
  helpBlock,
  meta: { touched, error }
}) => (
  <FormGroup row className={touched && error ? 'has-error' : null}>
    {options.map(radio => (
      <Col key={radio.value} lg={4}>
        <input
          className='form-control'
          {...input}
          id={radio.value}
          type='radio'
          value={radio.value}
          checked={radio.value === input.value}
        />
        <label htmlFor={radio.value}>{radio.title}</label>
      </Col>
    ))}
    {touched && helpBlock && error && (
      <Col lg={12} className='mt-2'>
        <span className='help-block'><small>{error}</small></span>
      </Col>
    )}
  </FormGroup>
)

export default RadioGroup

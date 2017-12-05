import React from 'react'
import Select from 'react-select'
import { FormGroup, Col } from 'reactstrap'

const SelectInput = ({
  input,
  label,
  type,
  id,
  helpBlock,
  options,
  values = [{value: 'ui', label: 'UI'}, {value: 'ux', label: 'User Experience'}],
  meta: { touched, error, warning },
  ...rest
}) => (
  <FormGroup row>
    <Col lg={12}>
      <label htmlFor={id}>{label}</label>
      <Select.Creatable
        {...input}
        id={id}
        multi
        options={values}
        className={`${touched && error ? 'is-invalid' : null}`}
        onChange={input.onChange}
        value={input.value}
        onBlur={() => input.onBlur([...input.value])}
        {...rest}
      />
      <div className='hint'>{options.hint}</div>
      {touched && helpBlock && error &&
        <span className='invalid-feedback'><small>{error}</small></span>}
    </Col>
  </FormGroup>
)

export default SelectInput

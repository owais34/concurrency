import React from 'react'
import PropTypes from 'prop-types'
import './Dropdown.scss'

const Dropdown = ({
  className = '',
  options = [],
  default_ = { label: 'SELECT', value: '' },
  ...props
}) => (
  <select
    className={`cg-input cg-input--rounded cg-input--dropdown ${className}`}
    {...props}
  >
    {[default_, ...options].map(
      opt =>
        opt && (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ),
    )}
  </select>
)

const Option = PropTypes.shape({
  value: PropTypes.string.isRequired,
})

Dropdown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(Option),
  default_: Option,
}

export default Dropdown

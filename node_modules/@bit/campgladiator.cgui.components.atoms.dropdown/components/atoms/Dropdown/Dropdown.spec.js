import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from './Dropdown'

describe('<Dropdown />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Dropdown />)).not.toThrow()
  })
})

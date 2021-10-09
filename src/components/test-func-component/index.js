import React from 'react'
import * as PropTypes from 'prop-types'

/**
 * Get sum
 *
 * @param {number} a
 * @param {number} b
 * @param {number} additional
 * 
 * @return {number}
 */
const getSum = (a, b, additional = 0) => a + b + additional;

const TestFuncComponent = ({ a, b, additional = 0 }) => {

  return (
    <div>
      {getSum(a, b, additional)}
    </div>
  )
}

TestFuncComponent.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  additional: PropTypes.number,
}

export default TestFuncComponent

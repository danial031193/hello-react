import React from 'react'

const TestFuncComponent = ({ a, b, additional = 0}) => {
  return (
    <div>
      {a + b + additional}
    </div>
  )
}

export default TestFuncComponent

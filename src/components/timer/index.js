import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

const Timer = () => {
  const [state, setState] = useState(0);

  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setState(prevState => prevState + 1)
    }, 1000)

    return () => clearTimeout(timer.current)
  }, [])

  return (
    <div>
      Timer: {state}
    </div>
  )
}

export default Timer

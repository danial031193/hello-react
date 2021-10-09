import React, {
  useEffect,
  useState,
} from 'react'

const MouseListener = ({ children }) => {
  const [coordinates, setCoordinates] = useState({ x:0 , y: 0})

  const onMouseMove = (e) => {
    setCoordinates({ x: e.x, y: e.y })
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => document.removeEventListener('mousemove', onMouseMove);
  }, [])

  return (
    <div>
      {children(coordinates)}
    </div>
  )
}

export default MouseListener

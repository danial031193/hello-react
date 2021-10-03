import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const updateCount = useCallback(() => setCount(count + 1), [count])

  const obj = useMemo(() => ({ a: 1, b: 2, count }), [count])

  useEffect(() => {
    if (count > 3) {
      return
    }

    document.title = `Вы нажали ${count} раз`
  }, [count])

  return (
    <div onClick={updateCount}>
      count: {count}

      <ul>
        {Object.entries(obj).map(([key,value]) => <li>{key}: {value}</li>)}
      </ul>
    </div>
  )
}

export default Counter

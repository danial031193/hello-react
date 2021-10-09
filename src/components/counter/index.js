import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const inputRef = useRef()

  const updateCount = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const focusInput = () => inputRef.current?.focus()

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

      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus input</button>
      <ul>
        {Object.entries(obj).map(([key,value]) => <li key={key}>{key}: {value}</li>)}
      </ul>
    </div>
  )
}

export default Counter

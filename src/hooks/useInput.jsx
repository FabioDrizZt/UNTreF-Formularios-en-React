import { useState } from 'react'

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)
  const onChange = (e) => setValue(e.target.value)
  const reset = () => setValue(initialValue)
  return [ value, onChange, reset ]
}

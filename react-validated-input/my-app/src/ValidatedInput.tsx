import { useState } from "react"
export function ValidatedInput(){
  const [isValue, setIsValue] = useState(0);

  function handleChange(){
    const value = 0

    return value

  }
  const value = 0
  return(
  <div>
    <input
    name='password'
    id='password'
    value={value}
    onChange={handleChange}></input>
    <div>hi</div>
  </div>
)
}

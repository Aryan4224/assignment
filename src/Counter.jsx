import React from 'react'
let counterSlice = createSlice
function Counter() {
    let count=userSelector((state)=>state.counter.value)
    let dispatch= useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(increment)}></button>
    </div>
  )
}

export default Count
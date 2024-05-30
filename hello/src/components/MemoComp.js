import React from 'react'

function MemoComp({name}) {
    console.log("Reandring Memo comp");
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)//rerender karta rokeee

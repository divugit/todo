import React from 'react'

const Item = (props) => {
  return (
    <div className='lis'  onClick={()=>props.deleteItems(props.id)}>
        <li>{props.text}</li>
    </div>
  )
}

export default Item
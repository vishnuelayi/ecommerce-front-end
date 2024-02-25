
import React from 'react'

const color = (props) => {
  const {colorData,setColor} = props;
  return (
    <>
       <ul className='colors ps-0'>
       {colorData?.map((item, index) => {
        return <li style={{backgroundColor:item?.hex}} key={index} onClick={() => {
          setColor(item._id)
        }}></li>
       })}
          
          
          
        
       </ul>
    </>
  )
}

export default color
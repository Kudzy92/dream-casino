import React, { useState } from 'react'
import { bottomheader_data } from '../data/dummydata'

const BottomHeader = () => {
  const[selectedIndex, setSelectedIndex] = useState(0);
  const handleCatItemClick= (index)=>{
 setSelectedIndex(index);
  }
  return (
    <div className='dt-bheader'>
      <div className='top-bg'></div>
        <div className='container'>
        <div className='wrapper'>

            {bottomheader_data.map((item,i)=>{
                return(
                    <div key={i} onclick={()=> handleCatItemClick(i)} className={i==selectedIndex ? 'cat-item active':'cat-item'}>
                <img src={item.icon}  className='icon'/>
                <span className='label'>{item.name}</span>
                </div>
            )
            })}
        </div>
    </div>
    </div>
  )
}

export default BottomHeader
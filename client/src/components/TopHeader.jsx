import React from 'react'
import { Redeem, Search }  from '@mui/icons-material';

const TopHeader = () => {
  return (
    <div className='dt-theader'>
        <div className='container'>
            <div className='wrapper'>
        <div className='dt-logo'>
            <div className='left'>log</div>
            <div className='right'>
                <h1>Dream</h1>
                <span>casino</span>
            </div>
        </div>
        <div className='dt-menu'>
         <div className='dtm-wrapper'>
          <div className='dtm-item'>
            <Search/>
          </div>
          <div className='dtm-item redeem'>
            <Redeem/>
          </div>
          <div className='dtm-item'>
            <span className='btn'>sign up</span>
          </div>
          <div className='dtm-item'>
            <span className='text'>log in</span>
          </div>
         </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default TopHeader
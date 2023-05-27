import React, { useState } from 'react'
import my_account  from '../images/icons/menu/MY-ACCOUNT.svg';
import { sidemenu,bottomheader_data } from '../data/dummydata'
import { ArrowForwardIos , Close} from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { showSideMenu, showOverlay, reset} from '../redux/dialogSlice'

const SideMenu = () => {
  const dispatch = useDispatch();
const sideMenuStatus = useSelector(state=> state.dialog.sideMenu);
    const[index,setIndex] = useState(1);
    const handleSMItemClick=(i)=>{
      setIndex(i);
    }
    const handleCloseSideMenu = ()=>{
      dispatch(showSideMenu(false));
      dispatch(showOverlay(false));
    }
  return (
    <div className={sideMenuStatus ? 'side-menu active': 'side-menu'}>

        <div className='sm-container'>
            <div className='wrapper'>
            <Close onClick={()=>handleCloseSideMenu()} className='close-btn'/>
                <div className='sm-frow'>
                <div className='top-bar'>
                    <div className='tb-row profile'>
                    <img src={my_account} alt='my account'/>
                    <h2 className='title-2'>Welcome, guest</h2>
                    </div>
                    <div className='tb-row signup'>
                        <span className='btn'>sign up</span>
                    </div>
                    <div className='tb-row chat'>
                        <span className='btn'>chat to us</span>
                    </div>
                    

                </div>
                
                <div className='mid-bar'>
                  <div className='wrapper'>
                  {sidemenu.slice(0,4).map((item,i)=>{
                    return(
                        <div key={i} onClick={()=> handleSMItemClick(item.id)} className={index===item.id ? 'sd-item active' : 'sd-item'}>
                            <div className='left'>
                            <img className='img-select' src={item.iconSelect} alt={item.name} />
                                <img className='img' src={item.icon} alt={item.name} />
                                <span className='name'>{item.name}</span>
                            </div>
                              <div className='right'>
                                {item.submenuStatus===1 ? 
                                <>
                                <ArrowForwardIos/> 
                                <div className='sbm-container'>
                                  <div className='wrapper'>
                                    <div className='heading'>
                                      <span className='btn'>All games</span>
                                    </div>
                                    <div className='sbm-list-wrapper'>
                                    {bottomheader_data.map((item,i)=>{
                    return(
                        <div key={i} onClick={()=> handleSMItemClick(item.id)} className={index===item.id ? 'sd-item active' : 'sd-item'}>
                            <div className='left'>
                            <img className='img' src={item.icon} alt={item.name} />
                                <span className='name'>{item.name}</span>
                            </div>
                              
                        </div>
                    )
                  })}
                                    </div>
                                  </div>
                                </div>
                                </>
                                : ''}
                              </div>
                        </div>
                    )
                  })}
                  </div>
                </div>
                </div>
                <div className='bottom-bar'>
                <div className='wrapper'>
                {sidemenu.slice(5,sidemenu.length).map((item,i)=>{
                    return(
                        <div key={i+5} onClick={()=> handleSMItemClick(i+5)} className={index===i ? 'sd-item active' : 'sd-item'}>
                            <div className='left'>
                            <img className='img-select' src={item.iconSelect} alt={item.name} />
                                <img className='img' src={item.icon} alt={item.name} />
                                <span className='name'>{item.name}</span>
                            </div>
                              <div className='right'>
                                {item.submenuStatus===1 ? <ArrowForwardIos/> : ''}
                              </div>
                        </div>
                    )
                  })}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SideMenu
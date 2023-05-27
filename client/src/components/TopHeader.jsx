import React from 'react'
import { Redeem, Search, Casino, ExpandMore }  from '@mui/icons-material';
import SideMenu from './SideMenu';
import { useSelector, useDispatch } from 'react-redux'
import { showSideMenu, showOverlay, reset} from '../redux/dialogSlice'


const TopHeader = () => {
  const dispatch = useDispatch();
  const sideMenuStatus = useSelector(state=> state.dialog.sideMenu);
  const overlayStatus = useSelector(state=> state.dialog.overlay);
  const handleSideMenu = () => {
    console.log("clicked"+sideMenuStatus);
    dispatch(showSideMenu(!sideMenuStatus));
    dispatch(showOverlay(!overlayStatus));
    console.log("clicked overlay"+overlayStatus);
  }
  return (
    <div className='dt-theader'>
      <SideMenu/>
        <div className='container'>
            <div className='wrapper'>
              
        <div className='dt-logo'>
            <div className='left'><Casino/><ExpandMore onClick={()=> handleSideMenu()} /></div>
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
import React, { useState , useEffect} from 'react'
import { Search , ExpandMore , FilterList, ExpandLess}  from '@mui/icons-material';
import { bottomheader_data, gameList } from '../data/dummydata'
const SearchByCat = () => {
  const[searchIn,setSearchInput]= useState("");
  const[isOpenCatDd,setIsOpenCatDd] = useState(false);
  const handleCatDdClick=()=>{
      setIsOpenCatDd(!isOpenCatDd);
  }
  const handleSearchInput=(e)=>{
      setSearchInput(e.target.value);
  }

  const[selectedIndex,setSelectedIndex] = useState(0);
const[gameId,setGameId]=useState(1);
const[gamesByCat,setGameByCat]=useState([]);
useEffect(()=>{
    setGameByCat(gameList.filter(item => item.cat_id === gameId));
},[gameId]);
const handleGameByCat=(id,index)=>{
setGameId(id);
setSelectedIndex(index);
}

  return (
    <section className=''>
     <div className='container'>
      <div className='wrapper'>
      <div className='search-game'>
        <div className='search-game-container'>
            <div className='left'>
            <div className='search-input'>
                <Search/>
                <input type='text' placeholder='Find you game' onChange={(e)=> handleSearchInput(e)}/>
            </div>
            </div>
            <div className='right'>
             <div className='search-cat-dd'>
                <div className='left'>
                  <FilterList/>
                <span className='selected-cat'>All game providers</span>
                </div>
                <div className='right'>
                {isOpenCatDd ? <ExpandMore onclick={()=> handleCatDdClick}/> : <ExpandLess onclick={()=> handleCatDdClick}/>}
                </div>

                <ul className={isOpenCatDd ? 'all-game-dd active' : 'all-game-dd'}>
                    <li></li>
                </ul>
               

             </div>
            </div>
        </div>
        
    </div>

<div className='cat-home-nav'>
    <div className='chn-container'>
        <div className='wrapper'>
            {bottomheader_data.map((item,i)=>{
                return(

                    <div className={selectedIndex==1 ? 'cat-item-btn active' : 'cat-item-btn'} key={i}>
                      <img src={item.icon} alt={item.name}/>
                      <span className='name'>{item.name}</span>
                    </div>
                )
            })}
        </div>
    </div>
</div>

      </div>
     </div>
    </section>
    
  )
}

export default SearchByCat
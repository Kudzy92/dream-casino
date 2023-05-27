import './App.css';
import Pages from './pages/Pages';
import Loader from './components/Loader'
import store from './redux/store' 
import Overlay from './components/Overlay'
import { Provider } from 'react-redux'
import { useState } from 'react'
function App() {
  const[isLoading,setIsLoading] = useState(true);
  setTimeout(()=>{
    setIsLoading(false);
  }, 5000);
  return (
  <>
   {isLoading ? <Loader /> : <Provider store={store}><Overlay/><Pages/></Provider>}
   </>
  );
}

export default App;

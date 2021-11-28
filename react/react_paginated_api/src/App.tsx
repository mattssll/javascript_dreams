import './App.css';
import { Counter } from './components/Counter'
import {useState, useEffect, FC} from 'react'
import { FetchRandomAPI }  from './api/FetchRandomAPI'


function App() {

  const[userData, setUserData] = useState('');
  const[userInfo, setUserInfo] = useState<any>([]);
  const[nextPageNumber, setNextPageNumber] = useState(1);
  
  const fetchNextUser = () => {
    FetchRandomAPI(nextPageNumber).then((payload) => {
      const newUserInfos = [
        ...userInfo,
        ...payload.results,
      ]
      setUserInfo(newUserInfos);
      setNextPageNumber(payload.info.page + 1);
    });
  }

    useEffect(() => {
       fetchNextUser();
    }, []);
  
  return (
    <div className="App" style={{display:"inline-block"}}>
    <h1>Paginated API Requests</h1>
    
    <Counter />
    <button onClick={fetchNextUser}>Fetch Next User</button>
    
    {
      userInfo.map((userInfo: any, idx: number) => (
        <div key={idx}>
        <p>{userInfo.name.first + ' ' + userInfo.name.last}</p>
        <img src={userInfo.picture.thumbnail}></img>
        </div>
      ))
    }
    </div>
  );
}

export default App;

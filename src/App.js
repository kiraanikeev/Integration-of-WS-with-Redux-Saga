import './App.css';
import {useSelector } from 'react-redux';
import { iDataActionCreater } from './store/LogsReduser';

import { useDispatch } from 'react-redux';

function App() {

  const logs = useSelector(state => state.logs.logs)
  console.log('logs', logs)
const user = useSelector(state => state.user)
console.log('user', user)

const dispatch = useDispatch()


  return (
    <div>
<h1>SAGA</h1>


<button onClick={()=> dispatch(iDataActionCreater())}>saga</button>

<div className="App">
{logs
? <div className="logs">
{logs.map(item=> {
  return(
<div key={item.logData}><p>logData:{item.logData}</p></div>)})}
</div>
:<div>
  <p>ЖУРНАЛЫ ОТСУТСТВУЮТ</p>
</div>}

<p className="user">totalLogsCount: {user.totalLogsCount}</p>
</div>
    </div>
  );
}

export default App;

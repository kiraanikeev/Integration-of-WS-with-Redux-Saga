import './App.css';
import {useSelector } from 'react-redux';

function App() {

  const logs = useSelector(state => state.user)
  // console.log('logs', logs)
const st = useSelector(state => state)
console.log(':', st)
  return (
    <div className="App">
<h1>SAGA</h1>
{logs.length>0 
? <div>
{logs.map(item=>
  <div key={item.logs}>{item.logs}</div>)}
</div>
:<div>
  <p>ЖУРНАЛЫ ОТСУТСТВУЮТ</p>
</div>}
    </div>
  );
}

export default App;

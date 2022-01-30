import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ReactWindow from "./components/ReactWindow";
import { getLogs, getCount } from "./store/selectors";
import { dataActionCreater } from "./store/Logs/actions";

function App() {
   const dispatch = useDispatch();
   const logs = useSelector(getLogs)
   const count = useSelector(getCount)
  return (
    <div>
      <h1>Integration of WS with Redux Saga</h1>
      <button
        className={logs.length > 0 ? "invisible" : "button"}
        onClick={() => dispatch(dataActionCreater())}
      >
        START
      </button>
      <div className="data">
        <p className={logs.length > 0 ? "count" : "invisible"}>
          Total Logs Count: {count.totalLogsCount}
        </p>
      </div>
      <ReactWindow
      logs={logs}/>
    </div>
  );
}

export default App;

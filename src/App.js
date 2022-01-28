import "./App.css";
import { useSelector } from "react-redux";
import { iDataActionCreater } from "./store/LogsReduсer";
import { useDispatch } from "react-redux";



function App() {
  const logs = useSelector((state) => state.logs.logs);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Integration of WS with Redux Saga</h1>
      <button
        className={logs.length > 0 ? "invisible" : "button"}
        onClick={() => dispatch(iDataActionCreater())}
      >
        START
      </button>
      <div className="App">
          <div className="logs">
            {logs.map((item) => {
              return (
                <div key={item.logData} className="log">
                  <p>log Data: {item.logData}</p>
                </div>
              );
            })}
          </div>
        <p className={logs.length > 0 ? "count" : "invisible"}>
          Total Logs Count: {user.totalLogsCount}
        </p>
      </div>
    </div>
  );
}

export default App;

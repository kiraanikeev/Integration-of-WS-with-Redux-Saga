import "./App.css";
import { useSelector } from "react-redux";
import { iDataActionCreater } from "./store/LogsReduсer";
import { useDispatch } from "react-redux";
import ReactWindow from "./components/ReactWindow";


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
        <p className={logs.length > 0 ? "count" : "invisible"}>
          Total Logs Count: {user.totalLogsCount}
        </p>
      </div>

export default App;

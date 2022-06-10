import logo from "./logo.svg";
import "./App.css";
import StyledComponent from "../src/styledComponent/StyledComponent";
import MaterialUi from "../src/materialUi/MaterialUi";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StyledComponent /> */}
        <MaterialUi />
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import Button from "./Components/Button/Button";
import RealTimeSearch from "./Components/RealTimeSearch/RealTimeSearch";
import StyledButton from "./Components/StyledButton/StyledButton";

function App() {
  return (
    <div className="App">
      <h1>This is edited for a test branch</h1>
      <RealTimeSearch/>
      <Button>Button</Button>
      <StyledButton>StyledButton</StyledButton>
    </div>
  );
}

export default App;

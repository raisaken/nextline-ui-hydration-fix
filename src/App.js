import "./App.css";
import Button from "./Components/Button/Button";
import MapReduceFilter from "./Components/MapReduceFilter/MapReduceFilter";
import RealTimeSearch from "./Components/RealTimeSearch/RealTimeSearch";
import ComponentA from "./Components/ReduxFundamental/RFComponents/ComponentA";
import ComponentB from "./Components/ReduxFundamental/RFComponents/ComponentA";
import ComponentC from "./Components/ReduxFundamental/RFComponents/ComponentA";
import ComponentD from "./Components/ReduxFundamental/RFComponents/ComponentA";
import StyledButton from "./Components/StyledButton/StyledButton";

function App() {
  return (
    <div className="App">
      <h1>This is edited for a test branch</h1>
      <RealTimeSearch />
      <Button>Button</Button>
      <StyledButton>StyledButton</StyledButton>
      <MapReduceFilter></MapReduceFilter>
      <ComponentA />
     
    </div>
  );
}

export default App;

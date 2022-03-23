import React from "react";
import { Container } from "react-bootstrap";
import MapReduceFilter from "../Components/MapReduceFilter/MapReduceFilter";
import RealTimeSearch from "../Components/RealTimeSearch/RealTimeSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import ComponentA from "../Components/ReduxFundamental/RFComponents/ComponentA";

function Home() {
  return (
    <div>
      <Container>
        <MapReduceFilter />
        <RealTimeSearch />
        <ComponentA />
      </Container>
      <></>
    </div>
  );
}

export default Home;

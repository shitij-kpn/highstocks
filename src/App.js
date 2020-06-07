import React from "react";
import "./App.css";
import Header from "./components/Header";
import Chart from "./components/Chart";

import { connect } from "react-redux";

//get is pending to find if request is pending
// show loading if pending
//show chart when isPending = false

const mapStateToProps = (state) => ({
  isPending: state.dataReducer.isPending,
  error: state.dataReducer.error,
});

const Loading = () => {
  return <p>Loading...</p>;
};

const App = (props) => {
  const { isPending, error } = props;
  let component = undefined;
  if (isPending === "") {
    //if isPending is empty string
    component = undefined;
  } else {
    if (isPending === true) {
      //if fetching data
      component = <Loading />;
    } else {
      if (!isPending && error) {
        //if ispending is false and error is true
        component = <p>{error}</p>;
      } else if (!isPending && !error) {
        //if isPending is false and error is empty string
        component = <Chart />;
      }
    }
  }

  return (
    <div className="App">
      <Header />
      {component}
    </div>
  );
};

export default connect(mapStateToProps)(App);

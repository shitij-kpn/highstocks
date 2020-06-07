import React from "react";
import { setQueryField } from "./../actions/queryField";
import { requestQuery } from "./../actions/stockData";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  queryField: state.queryReducer.queryField,
});

function Header(props) {
  return (
    <header className="App-header-container">
      <div className="App-header">
        <input
          type="text"
          value={props.queryField}
          onChange={(e) => props.dispatch(setQueryField(e.target.value))}
          className="header-input"
          placeholder="Enter the Query here"
        />
        <div
          onClick={() => {
            if (!props.queryField) {
              return;
            }
            props.dispatch(requestQuery());
          }}
          className="submit-button"
        >
          Go
        </div>
      </div>
    </header>
  );
}

export default connect(mapStateToProps)(Header);

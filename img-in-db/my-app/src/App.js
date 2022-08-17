import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Board from "./component/board";
import Write from "./component/write";
import View from "./component/view";

import "./App.css";

class App extends Component {
  state = { username: null };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <TopMenu /> */}
          <Routes>
            <Route path="/" element={<Board />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route
              exact
              path="/view/:index"
              element={<View />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

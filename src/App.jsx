import "./App.css";
import Graphic from "./Graphic.jsx";
import { spot, futures } from "./cryptocurrencies.js";
import { Topbar } from "./Topbar.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [inProgress, setInProgress] = useState(false);
  const [tab, setTab] = useState('BTCUSDT.P');

  const loader = (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );

  return (
    <>
      <Router>
        <div>
          <Topbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{ height: "100vh", width: "100vw", marginTop: "22px" }}
                className="blockAnimation"
              >
                <Graphic id="1" whatchlist={futures} />
                <Graphic id="2" whatchlist={spot} />
              </div>
            }
          />
          <Route
            path="/single-f"
            element={
              <div
                style={{
                  height: "calc(100vh - 22px)",
                  width: "100vw",
                  marginTop: "22px",
                  overflow: 'hidden'
                }}
                className="blockAnimation"
              >
                <Graphic id="1" whatchlist={futures} fullscreen isFutures />
              </div>
            }
          />
          <Route
            path="/single-s"
            element={
              <div
                style={{
                  height: "calc(100vh - 22px)",
                  width: "100vw",
                  marginTop: "22px",
                  overflow: 'hidden'
                }}
                className="blockAnimation"
              >
                <Graphic id="1" whatchlist={spot} fullscreen />
              </div>
            }
          />
          <Route
            path="/horizontal"
            element={
              <div
                style={{ height: "100vh", width: "100vw", marginTop: "22px" }}
                className="blockAnimation"
              >
                <Graphic id="1" whatchlist={futures} />
                <Graphic id="2" whatchlist={spot} />
              </div>
            }
          />
          <Route
            path="/vertical"
            element={
              <div
                style={{
                  height: "calc(100vh - 22px)",
                  width: "100vw",
                  marginTop: "22px",
                  display: "flex",
                }}
                className="blockAnimation"
              >
                <Graphic id="1" whatchlist={futures} orientation="vertical" />
                <Graphic id="2" whatchlist={spot} orientation="vertical" />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// <div style={{ height: "100vh", width: "100vw", display: "flex", }}>
//     <Graphic id="1" whatchlist={spot} />
//     <Graphic id="2"  whatchlist={futures} />
// </div>

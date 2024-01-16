"use client";
import React, { useEffect, useRef, useState } from "react";

const Graphic = ({
  currency = "ETHUSDT",
  id = "1",
  watchList = [],
  period = "5",
  hideTopLeftBars = false,
  whatchlist = [],
  orientation,
  fullscreen,
  isFutures,
}) => {
  const onLoadScriptRef = useRef(null);
  let tvScriptLoadingPromise = null;
  const [current, setCurrent] = useState("BTCUSDT.P");

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current(),
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (document.getElementById(id) && "TradingView" in window) {
        console.log(window.TradingView);
        window &&
          new window.TradingView.widget({
            autosize: true,
            symbol: current,
            interval: period,
            timezone: "Europe/Vilnius",
            theme: "dark",
            style: "1",
            locale: "ru",
            toolbar_bg: "#14161c",
            // fullscreen: true,
            // disabled_features: ["use_localstorage_for_settings"],
            // enabled_features: ["study_templates"],
            // enable_publishing: false,
            // allow_symbol_change: true,
            // "withdateranges": true,
            hide_top_toolbar: false,
            hide_side_toolbar: false,
            container_id: id,
            watchlist: whatchlist,
          });
      }
    }
  }, [currency, watchList]);

  const [list, setList] = useState([]);

  return fullscreen ? (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <div id={id} style={{ height: "100%", width: "100%" }} />
      {isFutures ? (
        <div
          style={{
            height: "calc(100vh - 22px)",
            overflowY: "scroll",
            overflowX: "hidden",
            width: 200,
          }}
        >
          <ul style={{ padding: "0 15px" }}>
            {whatchlist.sort().map((cur) => (
              <li
                style={{
                  background: list.includes(cur) ? "#2862FF" : "",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={cur}
              >
                <span
                  onClick={() =>
                    setList((prev) => prev.filter((el) => el !== cur))
                  }
                >
                  D
                </span>
                <span
                  onClick={() =>
                    setList((prev) => {
                      setCurrent(cur);
                      return [...prev, cur];
                    })
                  }
                >
                  {cur}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  ) : (
    <div
      style={{
        height: orientation === "vertical" ? "100%" : "60%",
        width: orientation === "vertical" ? "50%" : "100%",
      }}
    >
      <div id={id} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default Graphic;

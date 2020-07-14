import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import ChatWrapper from "./components/ChatWrapper";
import "../src/components/FontawesomeIcons";
ReactDOM.render(
  <Suspense fallback={<p>Cargando...</p>} traceId={"load-app-trace"}>
    <ChatWrapper />
  </Suspense>,
  document.getElementById("un-colab-root")
);

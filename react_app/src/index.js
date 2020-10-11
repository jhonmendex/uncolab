import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatWrapper from "./components/ChatWrapper";
import HomeChat from "./HomeChat";
import { DataContextProvider } from "./context/DataContext";

import "../src/components/FontawesomeIcons";

ReactDOM.render(
  <DataContextProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/un_colab/:courseId/:taskId" component={HomeChat} />
        <Route path="/chat/:status" component={ChatWrapper} />
      </Switch>
    </BrowserRouter>
  </DataContextProvider>,
  document.getElementById("un-colab-root")
);

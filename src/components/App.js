import * as React from "react";

import { ChildContainer } from "./Child";

const App = () => (
  <div>
    <ChildContainer />
  </div>
);

export default App;

export const AppContainer = () => {
  // Do side-effect stuffs in container component
  alert("this is AppContainer");
  return <App />;
};

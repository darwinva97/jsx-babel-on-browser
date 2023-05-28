import { Component } from "./components.js"
import { Component } from "./data.js"
import { Component } from "./utils.js"

const App = () => (
  <div className="App">
    <Component title="GAA" />
  </div>
);

const root = document.querySelector("#root-products");

ReactDOM.createRoot(root).render(<App />);

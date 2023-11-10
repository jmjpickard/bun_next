import * as React from "react";
import * as ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
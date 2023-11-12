/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import * as React from "react";
import * as ReactDOM from "react-dom/client";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello World you bastards!!!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

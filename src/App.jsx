import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

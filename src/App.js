import "./styles/_app.scss"

import {
  Routes,
  Route
} from "react-router-dom";

import Navigation from "./components/Nav/Nav";
import Assignment from "./views/Assignment/Assignment";
import Dashboard from "./views/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Assignment />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

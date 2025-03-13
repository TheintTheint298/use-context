import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import Recommendations from "../src/components/Recommendations";
import Podcasts from "../src/components/Podcasts";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center py-6 my-2">useContext</h1>

      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

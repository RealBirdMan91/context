// App.tsx
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Home from "./components/Home";
import OtherPage from "./components/OtherPage";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { SkillsPage } from "./pages/skills";
import { ProjectsPage } from "./pages/projects";
import { ContactPage } from "./pages/contact";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Skills" element={<SkillsPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

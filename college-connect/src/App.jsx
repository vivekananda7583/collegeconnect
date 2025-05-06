import "./App.css";
import NavBar from "./components/NavBar";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/pages/Home";
import Features from "./components/pages/Features";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Dashboard from "./components/pages/Dashboard";
import Postidea from "./components/pages/Postidea";
import { ProjectProvider } from "./components/pages/ProjectContext";  // Ensure correct import

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="Features" element={<Features />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Postidea" element={<Postidea />} />
      </Route>
    )
  );

  return (
    <ProjectProvider>  {/* Ensure ProjectProvider is here */}
      <RouterProvider router={router} />
    </ProjectProvider>
  );
}

export default App;

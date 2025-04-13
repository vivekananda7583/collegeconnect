import "./App.css";
import NavBar from "./components/NavBar";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./components/pages/Home";
import Features from "./components/pages/Features";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Dashboard from "./components/pages/dashboard";
import Postidea from "./components/pages/Postidea";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar></NavBar>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="Features" element={<Features></Features>}></Route>
        <Route path="About" element={<About></About>}></Route>
        <Route path="Contact" element={<Contact></Contact>}></Route>
        <Route path="LogIn" element={<LogIn></LogIn>}></Route>
        <Route path="SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="Postidea" element={<Postidea></Postidea>}></Route>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

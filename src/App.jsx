import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Moviedetails from "./pages/Moviedetails";
import Mybookings from "./pages/Mybookings";
import Seatlayout from "./pages/Seatlayout";
import Favorite from "./pages/Favorite"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import Addshows from "./pages/admin/Addshows";
import Listshows from "./pages/admin/Listshows";
import Listbookings from "./pages/admin/Listbookings";

function App() {
  const isAdminroute=useLocation().pathname.startsWith("/admin");
  return (
    <>
    {!isAdminroute && <Navbar/>}
    <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
        <Route path="/movies/:id/:date" element={<Seatlayout />} />
        <Route path="/my-bookings" element={<Mybookings />} />
    
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/adimn/*" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>  
          <Route path="add-shows"  element={<Addshows/>}/>
          <Route path="list-shows"  element={<Listshows/>}/>
          <Route path="list-bookings" element={<Listbookings/>}/>


        
        </Route>
      </Routes>
         {!isAdminroute && <Footer/>}
    </>
  );
}

export default App;

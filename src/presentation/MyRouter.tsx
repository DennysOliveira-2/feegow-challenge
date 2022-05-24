import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointments from "./pages/Appointments";
import Home from "./pages/Home";

function MyRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MyRouter;

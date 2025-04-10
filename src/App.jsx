import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./pages/Payment";
import Home from "./Home";

function App() {
  function timeSpend(time) {
    return time;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;

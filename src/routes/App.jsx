import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Checkout from "../containers/Checkout";
import Home from "../containers/Home";
import Information from "../containers/Information";
import NotFound from "../containers/NotFound";
import Payment from "../containers/Payment";
import Success from "../containers/Success";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout/information" element={<Information />} />
          <Route exact path="/checkout/payment" element={<Payment />} />
          <Route exact path="/checkout/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
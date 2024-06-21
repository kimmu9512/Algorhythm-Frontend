import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import Layout from "./components/common/Layout";
import { routes } from "./routes"; // Import centralized routes

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {" "}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

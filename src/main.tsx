import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AdminLayout from "./layouts/admin/Admin";
import HomePage from "./pages/admin/Home";
import OrderPage from "./pages/admin/Order";
import TransactionPage from "./pages/admin/Transaction";
import ShipmentPage from "./pages/admin/Shipment";
import ReportPage from "./pages/admin/Report";
import ProductPage from "./pages/admin/Product";
import SettingPage from "./pages/admin/Setting";
import UserLayout from "./layouts/home";
import Home from "./pages/user/Home";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "order", element: <OrderPage /> },
      { path: "product", element: <ProductPage /> },
      { path: "report", element: <ReportPage /> },
      { path: "shipment", element: <ShipmentPage /> },
      { path: "transaction", element: <TransactionPage /> },
      { path: "setting", element: <SettingPage /> },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "cart", element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

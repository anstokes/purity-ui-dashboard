/*!

=========================================================
* Purity UI Dashboard - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)

* Design by Creative Tim & Coded by Simmmple
* Updated by Adrian Stokes <adrian@anstech.co.uk>

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import AuthLayout from "@layouts/Auth";
import AdminLayout from "@layouts/Admin";
import RTLLayout from "@layouts/RTL";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Default route */}
        <Route element={<Navigate to="/admin/dashboard" />} path="/" />
        {/* Auth routes */}
        <Route Component={AuthLayout} path="/auth/*" />
        {/* Admin routes */}
        <Route Component={AdminLayout} path="/admin/*" />
        {/* RTL routes */}
        <Route Component={RTLLayout} path="/rtl/*" />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);

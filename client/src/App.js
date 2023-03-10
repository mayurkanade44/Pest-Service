import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./components";

import {
  Landing,
  Dashboard,
  Error,
  Report,
  RegisterClient,
  Stats,
  SingleClient,
  Services,
} from "./pages";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="services" element={<Services />} />
          <Route path="add-client" element={<RegisterClient />} />
          <Route path="report" element={<Report />} />
          <Route path="client/:id" element={<SingleClient />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Profile from "./Profile";



function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Route */}
          <Route path="/" element={<DashboardLayout/>}>
          {/* Nested Routes */}
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
          <Route path="/notifications" element={<h1>Notifications</h1>} />
          <Route path="/reports" element={<h1>Reports</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

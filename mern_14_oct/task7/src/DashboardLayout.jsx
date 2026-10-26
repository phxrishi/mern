import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/settings">Settings</Link> |{" "}
        <Link to="/notifications">Notifications</Link>|{" s"}
        <Link to="/reports">Reports</Link>
      </nav>
      <hr />
      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

export default DashboardLayout;

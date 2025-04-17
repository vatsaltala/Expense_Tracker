import { Route, Routes } from "react-router-dom";
// import "./assets/adminlte.css";
import "./assets/adminlte.min.css";
import { UserSidebar } from "./Components/layouts/UserSidebar";
import UserProfile from "./Components/user/UserProfile";
import Login from "./Components/common/Login";
import { Signup } from "./Components/common/Signup";
import AddExpense from "./Components/user/AddExpense";
import Income from "./Components/user/AddIncome";
import History from "./Components/user/History";
import PrivateRoutes from "./Components/hooks/PrivateRoutes";
import AddCategory from "./Components/admin/AddCategory";
import { AdminSidebar } from "./Components/admin/AdminSidebar";
import UserDetail from "./Components/admin/UserDetail";
import UserCalculation from "./Components/admin/UserCalculation"; // Add this import
import Chart from "./Components/user/chart";
// import { ChartDemo1 } from "./Components/admin/AdminChart";
import { Userchart } from "./Components/admin/Userchart";
import AddIncomeCategory from "./Components/admin/AddIncomeCategory";
import AdminProfile from "./Components/admin/AdminProfile";
import Chart1 from "./Components/admin/AdminChart";
import { ResetPassword } from "./Components/common/ResetPassword";


function App() {
  return (
    <div className="layout-fixed sidebar-expand-lg bg-body-tertiary app-loaded sidebar-open">
      <div className="app-wrapper">
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/resetpassword" element={<ResetPassword/>}></Route>
          <Route element={<PrivateRoutes/>}>
            <Route path="/user" element={<UserSidebar/>}>
              <Route path="profile" element={<UserProfile/>}></Route>
              <Route path="AddExpense" element={<AddExpense/>}></Route>
              <Route path="income" element={<Income/>}></Route>
              <Route path="AllExpense" element={<History/>}></Route>
              <Route path="chart" element={<Chart/>}></Route>
            </Route>

            <Route path="/admin" element={<AdminSidebar/>}>  
              <Route path="addcategory" element={<AddCategory/>}></Route>
              <Route path="addincomecategory" element={<AddIncomeCategory/>}></Route>
              <Route path="userdetails" element={<UserDetail/>}></Route>
              <Route path="calculation/:userId" element={<UserCalculation/>}></Route>
              <Route path="chart1" element={<Chart1/>}></Route>
              <Route path="userchart/user/:userid" element={<Userchart/>}></Route>
              <Route path="adminprofile" element={<AdminProfile/>}></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
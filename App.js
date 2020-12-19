import React from "react";
// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
import AdminPage from "./components/AdminPage";
import './App.css'

function App() {
  return <div className = "app">
    {/* <Route path = '/' component = {LoginForm}/> */}
    <AdminPage></AdminPage>
  </div>
}

export default App;
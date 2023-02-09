import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./auth/ProtectedRoute";
import Transaction from "./components/Transaction";
import SingleTransaction from "./components/SingleTransaction";
import IpAddress from "./components/IpAddress";
import User from "./components/User"
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";

import "./index.css";
import SharedNavbarLayout from "./shared/SharedNavbarLayout";
import Home from "./pages/Home";
import SharedCardLayout from "./shared/SharedCardLayout";
import Card from "./components/Card";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import CardNavbar from "./components/CardNavbar";


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedNavbarLayout />}>
          <Route index element={<Home />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='signIn' element={<SignIn setUser={setUser} />} />
            <Route path='/cardboard/*' element={
                    <ProtectedRoute user={user}>
                        <Routes>
                            <Route path='/' element={<SharedCardLayout />}>
                                <Route index element={<Dashboard />} />
                                <Route path='/users' element={<User/>} />
                            </Route>
                        </Routes>
                    </ProtectedRoute>
                }
            />

        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

{/*<Route path='/dashboard' element={<Dashboard user={user} />}>*/}
{/*  <Route index element={<CardNavbar />} />*/}
// {/*  <Route path='*/users' element={<User/>} />*/}
//   {/*  <Route path='*/cards' element={<Card/>} />*/}
//     {/*  <Route path='*/transactions' element={<Transaction/>} />*/}
//       {/*  <Route path='*/ip' element={<IpAddress/>} />*/}

        {/*  <Route*/}
        {/*    path=':transactionId'*/}
        {/*    element={<SingleTransaction />}*/}
        {/*  />*/}

        {/*</Route>*/}

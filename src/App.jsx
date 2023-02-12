import React, { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";

import ProtectedRoute from "./auth/ProtectedRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./index.css";
import SharedNavbarLayout from "./shared/SharedNavbarLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AdminPanel from "./pages/AdminPanel";
import SupportPanel from "./pages/SupportPanel";
import MerchantPanel from "./pages/MerchantPanel";

const App = () => {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("appUsername")),
    flashMessages: [],
    user: {
      username: localStorage.getItem("appUsername"),
      password: localStorage.getItem("appPassword"),
      role: localStorage.getItem("appRole"),
    },
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        return;
      case "logout":
        draft.loggedIn = false;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("appUsername", state.user.username);
      localStorage.setItem("appPassword", state.user.password);
      localStorage.setItem("appRole", state.user.role);
    } else {
      localStorage.removeItem("appUsername");
      localStorage.removeItem("appPassword");
      localStorage.removeItem("appRole");
    }
  }, [state.loggedIn]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedNavbarLayout />}>
              <Route index element={<Home />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="signIn" element={<SignIn />} />
            </Route>

            {/*admin*/}
            <Route
              path="/admin"
              element={
                <ProtectedRoute user={state.user}>
                  <Routes>
                    <Route path="/" element={state.loggedIn && state.user.role === "ADMINISTRATOR" ? <AdminPanel /> : <Error />}></Route>
                  </Routes>
                </ProtectedRoute>
              }
            />

            {/*support*/}
            <Route
              path="/support"
              element={
                <ProtectedRoute user={state.user}>
                  <Routes>
                    <Route path="/" element={state.loggedIn && state.user.role === "SUPPORT" ? <SupportPanel /> : <Error />}></Route>
                  </Routes>
                </ProtectedRoute>
              }
            />

            {/*merchant*/}
            <Route
              path="/merchant"
              element={
                <ProtectedRoute user={state.user}>
                  <Routes>
                    <Route path="/" element={state.loggedIn && state.user.role === "MERCHANT" ? <MerchantPanel /> : <Error />}></Route>
                  </Routes>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}

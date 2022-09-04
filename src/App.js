import Login from "./components/Login";
import Profile from "./components/Profile"
import React from 'react';
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { toggletheme } from "../src/slices/themeSlice"

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme)
  return (
    <div className={theme.value}>
      <Profile />
      <Login />
      <button onClick={(e) => dispatch(toggletheme())}>Toggle Theme:{theme.value}</button>
    </div>
  )
}

export default App;

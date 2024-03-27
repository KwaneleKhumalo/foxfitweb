import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import {PayPalScriptProvider} from '@paypal/react-paypal-js'
import "react-toastify/dist/ReactToastify.css"
import 'react-icons'
import "animate.css"
import "./styles/App.css"


const App = () => {
  return (
    <PayPalScriptProvider>
      <div className="App">
        <Outlet />
        <ToastContainer position="top-left" theme="dark" autoClose={2000} />
      </div>
    </PayPalScriptProvider>
  )
}

export default App;

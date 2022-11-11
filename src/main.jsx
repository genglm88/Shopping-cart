import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./App"
import {ShoppingContextProvider} from "./shoppingContext"



ReactDOM.createRoot(document.getElementById('root')).render(
    <ShoppingContextProvider>
        <Router>
            <App />
        </Router>
    </ShoppingContextProvider>
      )
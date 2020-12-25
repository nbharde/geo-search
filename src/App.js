import React from "react";
import Navbar from "./components/elements/Navbar";
import GeoNames from "./components/geoNames/GeoNames";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar/>
                <div className="main-container">
                    <div className="component">
                        <GeoNames/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default App;
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './index.css';
import { resolve } from "path";

ReactDOM.render(<App />, document.getElementById("root"));

new Promise(resolve => {
    setTimeout(() => {
         console.log('Bears');
         resolve();  //proimse has completed, keyword callback
    }, 2000);
})
.then(() => {
    console.log('Beets');
    console.log('Carrots');
});



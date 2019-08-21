import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './index.css';
import { resolve } from "path";

ReactDOM.render(<App />, document.getElementById("root"));

new Promise((resolve, reject) => {
    // use return keyword to ensure we escape the function for testing catch
    return reject(new Error('No Bears'));
    setTimeout(() => {
         resolve('Bears, and lions, oh my');  //proimse has completed, keyword callback
    }, 2000);
})
.then( quote => {
    console.log(quote);
    
})
.catch(error => console.log('error', error));



import * as React from 'react';
import { CelsiusDashboard } from "../celsiusdashboard/CelsiusDashboard";
import * as logo from "./logo.png";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={String(logo)} className="App-logo" alt="celsius network"></img>
                <h1 className="pt-2">my celsius network dashboard</h1>
            </header>
            <div className="disclaimer mb-0">
                This dashboard is made with &#9829; by <a href="https://t.me/fabu1" target="_blank">Fä bu</a> and has nothing todo with the celsius.network company
            </div>
            <div className="App-body">
                <CelsiusDashboard  />
            </div>
        </div>
    );
}

export default App;

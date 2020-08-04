import React from 'react';
import './App.css';
import "semantic-ui-css/semantic.min.css"
import {Tab} from "semantic-ui-react";
import ExampleInterface from "./spring-interface/ExampleInterface";

function App() {
    const panes = [
        {menuItem: "Interface Test", render: () => <Tab.Pane><ExampleInterface/></Tab.Pane>}
    ]

    return (
        <div>
            <Tab panes={panes}/>
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import 'primereact/resources/themes/nova-dark/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import {Alignment, InputGroup, Navbar, Tab, Tabs} from "@blueprintjs/core";
import {DataTableExample} from "./primereact/DataTable";
import PlainTextEditorExample from "./editor/plaintext";
import ColorfulEditorExample from "./editor/Color";

function App() {
    const [navbarTabId, setNavbarTagId] = useState("Home")

    const handleNavbarTabChange = (tabId) => {
        setNavbarTagId(tabId)
    }

    return (
        <div className={"index-box"}>
            <Navbar>
                <Navbar.Group>
                    <Navbar.Heading>
                        Current page: <strong>{navbarTabId}</strong>
                    </Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Tabs
                        selectedTabId={navbarTabId}
                        onChange={handleNavbarTabChange}>
                        <Tab id={"Home"} title={"Home"}/>
                        <Tab id={"Files"} title={"Files"}/>
                        <Tab id={"Builds"} title={"Builds"}/>
                    </Tabs>
                </Navbar.Group>
            </Navbar>
            <Tabs>
                <Tab id={"rx"} title={"React"} panel={<div>React</div>}/>
                <Tab id={"ng"} title={"Angular"} panel={<DataTableExample/>}/>
                <Tab id={"mb"} title={"Ember"} panel={<PlainTextEditorExample/>}/>
                <Tab id={"bb"} title={"Baby Boy"} panel={<ColorfulEditorExample/>}/>
                <Tabs.Expander/>
                <InputGroup type={"text"} placeholder={"Search..."}/>
            </Tabs>
        </div>
    );
}

export default App;

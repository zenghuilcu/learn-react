import React, {useState} from 'react';
import './App.css';
import {Alignment, InputGroup, Navbar, Tab, Tabs} from "@blueprintjs/core";

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
                <Tab id={"ng"} title={"Angular"} panel={<div>Angular</div>}/>
                <Tab id={"mb"} title={"Ember"} panel={<div>Ember</div>}/>
                <Tab id={"bb"} title={"Baby Boy"} panel={<div>BabyBoy</div>}/>
                <Tabs.Expander/>
                <InputGroup type={"text"} placeholder={"Search..."}/>
            </Tabs>
        </div>
    );
}

export default App;

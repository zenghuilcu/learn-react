import React, {useState} from 'react';
import './App.scss';
import 'primereact/resources/themes/nova-dark/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'semantic-ui-css/semantic.min.css'
import 'medium-draft/lib/index.css'
import './layout/layout.scss'
import {Alignment, InputGroup, Navbar, Tab, Tabs} from "@blueprintjs/core";
import {DataTableExample} from "./primereact/DataTable";
import PlainTextEditorExample from "./editor/example/plaintext";
import ColorfulEditorExample from "./editor/example/Color";
import {ShowEditor} from "./editor/EditorGroup";
import {MyExampleEditor} from "./editor/MyEditor";
import {AppFooter} from "./AppFooter";
import {AppTopbar} from "./AppTopbar";

function App() {
    return (
        <div>
            <AppTopbar/>
        </div>
    )
}

export default App;

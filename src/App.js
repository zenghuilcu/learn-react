import React, {Component} from 'react';
import classNames from "classnames"
import {Link, Redirect, Route} from "react-router-dom"
import 'primereact/resources/themes/nova-dark/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './App.scss';
import './layout/layout.scss'
import 'semantic-ui-css/semantic.min.css'
import 'medium-draft/lib/index.css'
import './my-site/MySite.css'
import ColorfulEditorExample from "./editor/example/Color";
import {ShowEditor} from "./editor/EditorGroup";
import {MyExampleEditor} from "./editor/MyEditor";
import {AppFooter} from "./AppFooter";
import {AppTopbar} from "./AppTopbar";
import {AppProfile} from "./AppProfile";
import {AppMenu} from "./AppMenu";
import {EmptyPage} from "./my-site/EmptyPage";
import {DashBoard} from "./my-site/DashBoard";
import {WebSocketPage} from "./my-site/WebSocketPage";
import {WorkPage} from "./my-site/WorkPage";
import {ExamplePage} from "./my-site/ExamplePage";
import {ButtonDemo} from "./primefaces/DemoButton";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            } else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        } else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }

        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
    }

    onMenuItemClick(event) {
        if (!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            {
                label: 'Dashboard', icon: 'pi pi-fw pi-home', command: () => {
                    window.location = '#/'
                }
            },
            {
                label: 'TestPage', icon: 'pi pi-fw pi-file', to: "/TestPage"
            },
            {
                label: 'WebSocket', icon: 'pi pi-fw pi-share-alt', to: "/WebSocket"
            },
            {
                label: "WorkPage", icon: 'pi pi-fw pi-briefcase', to: "/WorkPage"
            },
            {
                label: "DemoButton", icon: 'pi pi-fw pi-file', to:"/DemoButton"
            }
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {
        const logo = this.state.layoutColorMode === 'dark' ? 'assets/layout/images/logo-white.svg' : 'assets/layout/images/logo.svg';

        const wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu}/>

                <div ref={(el) => this.sidebar = el} className="layout-sidebar layout-sidebar-dark"
                     onClick={this.onSidebarClick}>
                    <div className="layout-logo">
                        <img alt="Logo" src={logo}/>
                    </div>
                    <AppProfile/>
                    <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick}/>
                </div>

                <div className="layout-main">
                    <Route path="/" exact component={DashBoard}/>
                    <Route path="/TestPage" exact component={EmptyPage}/>
                    <Route path="/WebSocket" exact component={WebSocketPage}/>
                    <Route path="/WorkPage" exact component={WorkPage}/>
                    <Route path="/example" exact component={ExamplePage}/>
                    <Route path="/DemoButton" exact component={ButtonDemo}/>
                </div>

                <AppFooter/>
                <div className="layout-mask"/>
            </div>
        );
    }
}

export default App;

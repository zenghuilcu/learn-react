import React, {Component, Fragment} from "react";
import {NavLink} from 'react-router-dom'
import App from "./App";

class AppSubmenu extends Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: null}
    }

    onMenuItemClick(event, item, index) {
        if (item.disabled) {
            event.preventDefault()
            return true;
        }
        if (item.command) {
            item.command({originalEvent: event, item: item})
        }

        if (index === this.state.activeIndex)
            this.setState({activeIndex: null})
        else
            this.setState({activeIndex: index})

        if (this.props.onMenuItemClick) {
            this.props.onMenuItemClick({
                originalEvent: event,
                item: item
            });
        }
    }


    renderLinkContent(item) {
        let submenuIcon = item.items && <i>Icon</i>
        let badge = item.badge && <span>{item.badge}</span>

        return (
            <React.Fragment>
                <i className={item.icon}/>
                <span>{item.label}</span>
                {submenuIcon}
                {badge}
            </React.Fragment>
        )
    }

    renderLink(item, i) {
        let content = this.renderLinkContent(item);

        if (item.to) {
            return (
                <NavLink to={item.to}
                         onClick={(e) => this.onMenuItemClick(e, item, i)} exact target={item.target}>
                    {content}
                </NavLink>
            )
        } else {
            return (
                <a href={item.url}
                   onClick={(e) => this.onMenuItemClick(e, item, i)}
                   target={item.target}>
                    {content}
                </a>
            )
        }
    }

    render() {
        let items = this.props.items && this.props.items.map((item, i) => {
            let active = this.state.activeIndex === i;
            return (
                <li key={i}>
                    {item.items && this.props.root === true && <div className={"arrow"}/>}
                    {this.renderLink(item, i)}
                    <AppSubmenu items={item.items} onMenuItemClick={this.props.onMenuItemClick}/>
                </li>
            )
        })
        return items ? <ul className={this.props.className}>{items}</ul> : null
    }
}

export class AppMenu extends Component {
    render() {
        return (
            <div>
                <AppSubmenu items={this.props.model} onMenuItemClick={this.props.onMenuItemClick} root={true}/>
            </div>
        );
    }
}

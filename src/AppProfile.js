import React, {Component} from "react";

export class AppProfile extends Component {
    constructor() {
        super();
        this.state = {
            expanded:false
        };
    }

    onClick = (event) => {
        this.setState({
            expanded: !this.state.expanded
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <div><img alt={"profile"}/></div>
                </div>
                <button onClick={this.onClick}>
                    <span>Claire Williams</span>
                </button>
            </div>
        )
    }
}
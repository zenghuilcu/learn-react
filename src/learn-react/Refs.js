import React from "react";

function FancyButton(props) {
    return (
        <button>
            {props.children}
        </button>
    )
}

function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log("old props:", prevProps)
            console.log("new props:", this.props)
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }

    return LogProps;
}
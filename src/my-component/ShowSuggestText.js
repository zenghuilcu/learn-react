import React from "react";

const ShowText = (props) => {
    let editorsStr = ["ColorfulEditor", "HTMLConvert", "EntityEditor", "Iframed", "LinkEditor", "PlainTest", "RichEditor", "Tweet"]

    editorsStr.forEach((value => {
        if (value === "") {
            return [];
        }
        if (value.indexOf(props.text) !== -1) {
            props.result.push(value)
        }
    }))
    return (
        <div>
            {props.result}
        </div>
    )
}

export const ShowSuggestText = () => {
    let result = [];
    return (
        <div>
            <ShowText text={value} result={result}/>
        </div>
    )
}

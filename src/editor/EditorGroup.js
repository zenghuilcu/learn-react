import React, {useState} from "react";
import ColorfulEditorExample from "./example/Color";
import HTMLConvertExample from "./example/ConvertFromHtml";
import EntityEditorExample from "./example/Entity";
import IframedEditorExample from "./example/iframe";
import LinkEditorExample from "./example/link";
import PlainTextEditorExample from "./example/plaintext";
import RichEditorExample from "./example/rich";
import TweetEditorExample from "./example/Tweet";

export const ShowEditor = () => {
    let editors = [<ColorfulEditorExample/>, <HTMLConvertExample/>, <EntityEditorExample/>, <IframedEditorExample/>,
        <LinkEditorExample/>, <PlainTextEditorExample/>, <RichEditorExample/>, <TweetEditorExample/>]
    const [value, setValue] = useState(0);
    let result = [];
    return (
        <div>
            <input value={value} onChange={(event) => {
                console.log(event.target.value)
                setValue(event.target.value)
            }}/>
            <div>
                <ShowText text={value} result={result}/>
            </div>
            <div>
                {editors[value]}
            </div>
        </div>
    )
}

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

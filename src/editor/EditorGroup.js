import React, {useState} from "react";
import ColorfulEditorExample from "./Color";
import HTMLConvertExample from "./ConvertFromHtml";
import EntityEditorExample from "./Entity";
import IframedEditorExample from "./iframe";
import LinkEditorExample from "./link";
import PlainTextEditorExample from "./plaintext";
import RichEditorExample from "./rich";
import TweetEditorExample from "./Tweet";

const EditorGroup = (values) => {
    let editors = [<ColorfulEditorExample/>, <HTMLConvertExample/>, <EntityEditorExample/>, <IframedEditorExample/>,
        <LinkEditorExample/>, <PlainTextEditorExample/>, <RichEditorExample/>, <TweetEditorExample/>]
    return editors[values];
}

export const ShowEditor = () => {
    let editors = [<ColorfulEditorExample/>, <HTMLConvertExample/>, <EntityEditorExample/>, <IframedEditorExample/>,
        <LinkEditorExample/>, <PlainTextEditorExample/>, <RichEditorExample/>, <TweetEditorExample/>]
    // return editors[values];
    const [value, setValue] = useState(0);
    return (
        <div>
        <input value={value} onChange={(event) => {
            console.log(event.target.value)
            setValue(event.target.value)
        }}/>
            {editors[value]}
        </div>
    )
}
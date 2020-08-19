import React, {useState} from "react";
import ColorfulEditorExample from "./example/Color";
import HTMLConvertExample from "./example/ConvertFromHtml";
import EntityEditorExample from "./example/Entity";
import IframedEditorExample from "./example/iframe";
import LinkEditorExample from "./example/link";
import PlainTextEditorExample from "./example/plaintext";
import RichEditorExample from "./example/rich";
import TweetEditorExample from "./example/Tweet";
import {Dropdown} from "primereact/dropdown";

export const ShowEditor = () => {
    let editors = [<ColorfulEditorExample/>, <HTMLConvertExample/>, <EntityEditorExample/>, <IframedEditorExample/>,
        <LinkEditorExample/>, <PlainTextEditorExample/>, <RichEditorExample/>, <TweetEditorExample/>]

    const [value, setValue] = useState(0);

    const selectOnChange = (value) => {
        setValue(value)
    }

    return (
        <div>
            <SelectComponent onChange={selectOnChange}/>
            <div>
                {editors[value]}
            </div>
        </div>
    )
}

const componentOptions = [
    {value: "0", label: "ColorfulEditor"},
    {value: "1", label: "HTMLConvert"},
    {value: "2", label: "EntityEditor"},
    {value: "3", label: "Iframed"},
    {value: "4", label: "LinkEditor"},
    {value: "5", label: "PlainTest"},
    {value: "6", label: "RichEditor"},
    {value: "7", label: "Tweet"}
]

const SelectComponent = (props) => {
    const [value, setValue] = useState("")
    return <div>
        <Dropdown value={value} options={componentOptions} onChange={(e) => {
            setValue(e.value)
            props.onChange(e.value)
        }} placeholder={"Select something..."}/>
    </div>;
}

import React, {useState} from "react";
import {Editor, Modifier} from "primereact/editor";

function MyEditor(props) {
    const [editorState, setEditorState] = React.useState(() => editorState.createEmpty())

    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE",
        {url: "http://www.baidu.com"})
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const contentStateWithLink = Modifier.applyEntity(
        contentStateWithEntity,
        selectionState,
        entityKey,
    );
    return <Editor editorState={editorState} onChange={setEditorState}/>
}

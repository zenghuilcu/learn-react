import React, {useState} from "react";
import {Editor, createEditorState} from "medium-draft"

export const MyExampleEditor = () => {
    const [editorState, setEditorState] = useState(
        createEditorState()
    )

    return (
        <Editor
            style={<styles className="editor"></styles>}
            editorState={editorState}
            onChange={setEditorState}
        />
    )
}

const styles = {
    editor: {
        border: '2px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
        width:600,
    }
}

import React, {useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";

export const WorkPage = () => {
    const [value, setValue] = useState("")

    return (
        <div className="p-grid p-dir-col">
            <InputTextarea
                className="p-col-4"
                rows={5}
                cols={40}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <div className="p-col-1">
                <Button  label={"Submit"}/>
            </div>
        </div>
    )
}
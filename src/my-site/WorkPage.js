import React, {useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {Divider} from "@blueprintjs/core";
import axios from "axios"

export const WorkPage = () => {
    const [value, setValue] = useState("")

    const submit = () => {
        const uri = "http://localhost:8282/item/insertOne";
        axios.post(uri, {
            content: value,
            createTime: Date.now()
        })
            .then(function (response) {
                console.log(response.status)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div className="p-grid p-dir-col">
            <div className="p-col">
                <div className="p-grid">
                    <div className="p-col-6 day-box">
                        <div className="p-grid p-dir-col">
                            <div className="p-col">
                                Today
                            </div>
                        </div>
                    </div>
                    <Divider/>
                    <div className="p-col">
                        <div className="p-grid p-dir-col">
                            <div className="p-col">
                                Yesterday
                            </div>
                            <Divider/>
                            <div className="p-col">
                                Tomorrow
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InputTextarea
                className="p-col-4"
                rows={5}
                cols={40}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <div className="p-col-1">
                <Button label={"Submit"} onClick={submit}/>
            </div>
        </div>
    )
}

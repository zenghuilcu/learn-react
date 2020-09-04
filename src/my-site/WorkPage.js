import React, {useEffect, useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {Divider} from "@blueprintjs/core";
import axios from "axios"

const insertUrl = "http://localhost:8282/item/insertOne";
const findAllUrl = "http://localhost:8282/item/findAll";


export const WorkPage = () => {
    const [value, setValue] = useState("")
    const [items, setItems] = useState([])

    const submit = () => {
        axios.post(insertUrl, {
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

    useEffect(() => {
        axios.get(findAllUrl)
            .then(response => {
                setItems(items => [...items, response.data])
            })
            .catch(error => {
                console.log(error)
            })
    },[])

    return (
        <div className="p-grid p-dir-col">
            <div className="p-col">
                <div className="p-grid">
                    <div className="p-col-6 day-box">
                        <div className="p-grid p-dir-col">
                            <div className="p-col">
                                Today {items.length}
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

import React, {useEffect, useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {Divider} from "@blueprintjs/core";
import axios from "axios"
import {ScrollPanel} from "primereact/scrollpanel";

const insertUrl = "http://localhost:8282/item/insertOne";
const findAllUrl = "http://localhost:8282/item/findAll";
const deleteByIdUrl = "http://localhost:8282/item/deleteById"
export const WorkPage = () => {
    const [value, setValue] = useState("")
    const [items, setItems] = useState([])
    const [update, setUpdate] = useState(false)

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
        setValue("")
        updateEvent()
    }

    const updateEvent = () => {
        console.log(update)
        setUpdate(!update)
    }

    useEffect(() => {
        axios.get(findAllUrl).then(({data}) => {
            setItems(() => {
                return data
            })
        })
    }, [update])

    const deleteItemHandler = (event) => {
        axios.get(deleteByIdUrl, {
            params: {
                id: event.target.value
            }
        }).then(response => {
            console.log(response)
        })
        updateEvent()
    }


    return (
        <div className="p-grid p-dir-col">
            <div className="p-col">
                <div className="p-grid">
                    <div className="p-col-6 day-box">
                        <div className="p-grid p-dir-col">
                            <div className="p-col">
                                Today {items.length}
                                <ScrollPanel style={{width: '100%', height: '350px'}}>
                                    <ul>
                                        {items.map(((item, index, array) =>
                                                <li key={index}>{index + " " + item.content}
                                                    <button value={item.id}
                                                            onClick={e => deleteItemHandler(e)}>X
                                                    </button>
                                                </li>
                                        ))}
                                    </ul>
                                </ScrollPanel>
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

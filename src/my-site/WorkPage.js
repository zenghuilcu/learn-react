import React, {useEffect, useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {Divider} from "@blueprintjs/core";
import axios from "axios"
import {ScrollPanel} from "primereact/scrollpanel";
import {Confirm} from "semantic-ui-react";
import {Card} from "primereact/card";
import "./MyItem.scss"
import {useToast} from "@chakra-ui/core";
import {Item} from "./Item";

const insertUrl = "http://localhost:1111/item/insertOne";
const findAllUrl = "http://localhost:1111/item/findAll";
const deleteByIdUrl = "http://localhost:1111/item/deleteById"
export const WorkPage = () => {
    const [value, setValue] = useState("")
    const [items, setItems] = useState([])
    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const [deleteId, setDeleteId] = useState("")
    const toast = useToast()

    const submit = () => {
        axios.post(insertUrl, {
            content: value,
            createTime: Date.now()
        })
            .then(function (response) {
                console.log(response.status)
                updateEvent()
                setValue("")
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const updateEvent = () => {
        setUpdate(!update)
    }

    useEffect(() => {
        axios.get(findAllUrl).then(response => {
            setItems(response.data)
        })
    }, [update])

    const deleteItemHandler = (event) => {
        setDeleteId(event.target.parentNode.value)
        setShow(true)
    }

    const onConfirm = () => {
        axios.get(deleteByIdUrl, {
            params: {
                id: deleteId
            }
        }).then(response => {
            console.log(response.status)
            setDeleteId("")
            setShow(false)
            console.log(show)
            updateEvent()
        }).catch(error => console.log(error))
    }
    const onCancel = () => {
        setShow(false)
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
                                    <ItemList items={items} deleteItemHandler={deleteItemHandler}/>
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
            <Confirm open={show}
                     onCancel={onCancel}
                     onConfirm={onConfirm}
            />
        </div>
    )
}

const ItemList = (props) => {
    // return props.items.map(((item, index, array) =>
    //         <div key={index} className="my-item">
    //             <div className="content">{item.content}</div>
    //             <Button icon="pi pi-times" className="p-button-rounded p-button-text p-float" value={item.id}
    //                     onClick={e => {
    //                         props.deleteItemHandler(e)
    //                     }}
    //             />
    //             <Button icon="pi pi-check" className="p-button-rounded p-button-text p-float"/>
    //         </div>
    // ))
    return props.items.map(((item, index) =>
            <Item item={item}/>
    ))
}

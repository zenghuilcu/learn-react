import React from "react";
import "./ButtonDemo.scss"
import "./MyItem.scss"
import {Button} from "semantic-ui-react";
import {BsCheck, BsX, BsPencil} from "react-icons/bs";

export const Item = (props) => {
    const onDelete = () => {
    }

    const onCheck = () => {
    }

    const onEdit = () => {
    }
    return (
        <div className="my-item">
            <div className="content">{props.item.content}
            </div>
            <div>
                <button className={"my-button"}>
                    <BsCheck color="green" size="1em"/>
                </button>
                <button className={"my-button"}>
                    <BsPencil className="grey" size="1em"/>
                </button>
                <button className={"my-button"}>
                    <BsX className="red" size="1em"/>
                </button>
            </div>
        </div>
    )
}

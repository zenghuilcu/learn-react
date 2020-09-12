import React from "react";
import "./ButtonDemo.scss"
import "./MyItem.scss"
import {Button, Icon} from "semantic-ui-react";
import {BsCheck} from "react-icons/bs"

export const EmptyPage = () => {
    return (
        <div>
            <div className="line"/>
            <div className="my-item">
                <div className="content">明月几时有
                </div>
                <div>
                    <button className="my-button">
                        <BsCheck color="red" size="1.5em"/>
                    </button>
                </div>
            </div>
            <div className="line"/>
            <div className="my-item">
                <div className="content">明月几时有</div>
            </div>
            <div className="line"/>
            <div className="my-item">
                <div className="content">明月几时有</div>
            </div>
            <div className="line"/>
            <div className="my-item">
                <div className="content">明月几时有</div>
            </div>
            <div className="line"/>
            <button className="my-button">My Button</button>
        </div>
    )
}

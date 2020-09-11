import React from "react";
import "./ButtonDemo.scss"
import "./MyItem.css"
import {Button, Icon} from "semantic-ui-react";

export const EmptyPage = () => {
    return (
        <div>
            <div className="line"/>
            <div className="my-item">
                <div className="content">明月几时有
                </div>
                <div>
                    <Icon link name="world" className="icon"/>
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

        </div>
    )
}

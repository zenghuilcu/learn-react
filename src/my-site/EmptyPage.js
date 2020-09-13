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
                    <Button icon="check" size="mini" color="green"/>
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
            <div>

                <button className="my-button ripple">M</button>
            </div>
        </div>
    )
}

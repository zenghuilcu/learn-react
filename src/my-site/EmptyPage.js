import React from "react";
import {Button} from "primereact/button";
import "./ButtonDemo.scss"
import {Card} from "primereact/card";

export const EmptyPage = () => {
    return (
        <div>
            <div className="button-demo">
                <div className="card">
                    <h5>Text Buttons</h5>
                    <Button label="Primary" className="p-button-text"/>

                    <h5>Rounded Text Icon Buttons</h5>
                    <Button icon="pi pi-check p-box-size" className="p-button-rounded p-button-text p-button-icon-only p-box-size"/>

                    <h5>Rounded and Outlined Icon Buttons</h5>
                    <Button icon="pi pi-check" className="p-button-rounded p-button-outlined"/>

                </div>
            </div>
        </div>
    )
}

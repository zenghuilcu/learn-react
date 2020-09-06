import React from "react";
import {Button} from "primereact/button";
import SockJS from "sockjs-client"
import Stomp from "stompjs"


const WEB_SOCKET_URL = " http://localhost:1111/gs-guide-websocket/"

export const WebSocketPage = () => {
    const connection = () => {
        let socket = new SockJS(WEB_SOCKET_URL)
        let stompClient = Stomp.over(socket)
        stompClient.connect({}, function (frame) {
            console.log("Connected!")
            stompClient.subscribe("/topic/greetings", function (greeting) {
                console.log(JSON.parse(greeting.body).content)
            })
        })
    }

    return (
        <div>
            WebSocketPage
            <Button value="connection" onClick={connection}/>
        </div>
    )
}

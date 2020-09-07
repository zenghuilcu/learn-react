import React, {useState} from "react";
import {Button} from "primereact/button";
import SockJS from "sockjs-client"
import Stomp from "stompjs"


const WEB_SOCKET_URL = " http://localhost:1111/chat"

export const WebSocketPage = () => {
    const [log, setLog] = useState([])
    let stompClient

    const connect = () => {
        let socket = new SockJS(WEB_SOCKET_URL)
        stompClient = Stomp.over(socket)
        stompClient.connect({}, function (frame) {
            setLog([...log, "status: " + frame])
            stompClient.subscribe("/topic/greetings", function (greeting) {
                console.log("Greeting")
                showGreeting(JSON.parse(greeting.body).content)
            })
            sendMessage()
        })
    }

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect()
        }
        console.log("status: Disconnected!")
    }

    const sendMessage = () => {
        if (stompClient !== null) {
            stompClient.send("/app/hello", {}, JSON.stringify({"name": "Hello World!"}))
        }
    }

    const showGreeting = (message) => {
        setLog([...log, message])
    }

    return (
        <div className="p-grid">
            <div className="p-col-5">
                <Button value="connection" onClick={connect} label="Connect"/>
                <Button label="Send Message" onClick={sendMessage}/>
            </div>
            <div className="p-col-5">
                <div>
                    <Button label={"Clear"} style={{float: "right"}} onClick={() => {
                        setLog([])
                    }}/>
                    Event Log <span className="menuitem-badge">2</span>
                </div>
                <div>
                    <pre>
                        {log.map((value, index) => <div key={index}>{value}</div>)}
                    </pre>
                </div>
            </div>
        </div>
    );
}

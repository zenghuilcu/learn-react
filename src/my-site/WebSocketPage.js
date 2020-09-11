import React, {useState} from "react";
import {Button} from "primereact/button";
import SockJS from "sockjs-client"
import Stomp from "stompjs"

const WEB_SOCKET_URL = " http://localhost:1111/chat"

export const WebSocketPage = () => {
    const [log, setLog] = useState([])
    const [stompClient, setStompClient] = useState(null)

    const connect = () => {
        const socket = new SockJS(WEB_SOCKET_URL)
        const stompClient = Stomp.over(socket)
        stompClient.connect({}, function (frame) {
            setStompClient(stompClient)
            addLog(frame)
            stompClient.subscribe("/topic/readFile", function (greeting) {
                addLog(greeting.body)
            })
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
            addLog("send message: /app/hello", JSON.stringify({"name": "Hello World"}))
        }
    }

    const addLog = (message) => {
        setLog(prevState => {
            let current = prevState.concat();
            current.push(message.toString())
            return current
        })
    }

    return (
        <div className="p-grid">
            <div className="p-col-5">
                <Button value="connection" onClick={connect} label="Connect"/>
                <Button label="Send Message" onClick={sendMessage}/>
                <Button label="Add Log" onClick={() => addLog(1)}/>
            </div>
            <div className="p-col-5">
                <div>
                    <Button label={"Clear"} style={{float: "right"}} onClick={() => {
                        setLog([])
                    }}/>
                    Event Log <span className="menuitem-badge">{log.length}</span>
                </div>
                <div className="p-shadow-3">
                    <pre>
                        {log.map((value, index) => <li key={index}>{value}</li>)}
                    </pre>
                </div>
            </div>
        </div>
    );
}

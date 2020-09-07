import React, {useState} from "react";
import {Button} from "primereact/button";
import SockJS from "sockjs-client"
import Stomp from "stompjs"


const WEB_SOCKET_URL = " http://localhost:1111/gs-guide-websocket/"

export const WebSocketPage = () => {
    const [log, setLog] = useState([])

    const connection = () => {
        let socket = new SockJS(WEB_SOCKET_URL)
        let stompClient = Stomp.over(socket)
        stompClient.connect({}, function (frame) {
            setLog([...log, "Connected!"])
            stompClient.subscribe("/topic/greetings", function (greeting) {
                setLog([...log, JSON.parse(greeting.body).content])
                console.log(log.length)
            })
        })
    }

    return (
        <div className="p-grid">
            <div className="p-col-5">
                <Button value="connection" onClick={connection} label="Connect"/>
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

const PrintLog = (props) => {
}

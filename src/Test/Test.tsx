import React, { useEffect, useState } from "react";
import Modal, { Smile } from "../Modal/Modal";
import Point from "../Point/Point";
import SendFile from "../SendFile/SendFile";
import FormName from "../SmallForms/FormName";
import './Test.css';
interface ITest {
    title: string,
    ws: WebSocket
}
interface messages {
    userName: string,
    text: string | File
}
const Test: React.FunctionComponent<ITest> = ({title, ws}) => {
    
    const [messages, setMessages] = useState([] as messages[]);
    const [userName, setUserName] = useState<string>();
    const [count, setCount] = useState<number>(0);
    const [modalSmiles, setModalSmiles] = useState<boolean>(false);
    const [modalFiles, setModalFiles] = useState<boolean>(false);

    const sendEventAndMessage = (event: any) => {
        if(event.key === 'Enter') {
            ws.send(JSON.stringify({userName: userName, text: event.target.value}));
            event.target.value = "";
        }
    }
    const sendSmile = (smile: Smile) => {
        ws.send(JSON.stringify({userName: userName, text: smile.img}));
    }
    const sendFile = (input: HTMLInputElement) => {
        //ws.send(input.files![0]);
    }
    const changeName = (event: any) => {
        setUserName(() => event.target.value)
    }
    const modalAction = () => {
        setModalSmiles(() => !modalSmiles);
    }
    useEffect(() => {
        ws.onopen = () => {
            console.log('Соединение открыто(client)');
        }
        ws.onmessage = (message) => {
            let msg = JSON.parse(message.data);
            if(msg.counter) {
                setCount(() => msg.counter)
            } else {
                msg.recconect ? console.log(msg.recconect) : setMessages((messages) => [...messages, {userName: msg.userName ? msg.userName : "Инкогнито", text: msg.text}]);
            }
        }
        ws.onclose = () => {
            console.log('Соединение закрыто(client)');
        }
    }, [])
    return(
        <div className="test">
            <div className="chat">
                <FormName onChangeName={changeName}/>
                <Point count={count}/>
                <div className="messages">
                   {messages.map((message) => <div className="message" key={message.userName}><div className="messages-userName"><b>{message.userName}</b></div>{message.text}</div>)}
                </div>
                <div>
                    { modalSmiles ? <Modal onSmile={sendSmile} onClick={modalAction} title="Выберите смайлик" /> :  
                     modalFiles ? <SendFile onSend={sendFile} onClose={() => setModalFiles(false)} title="Прикрепите файл"/> :
                     <span className="flex">
                     <input className="flex-input" type="text" placeholder="Введите сообщение" onKeyPress={sendEventAndMessage}/>
                        <span className="flex-image">
                           <img src="https://www.leukvoorkids.nl/wp-content/uploads/smiley-emoji-0019.gif" onClick={() => setModalSmiles(() => !modalSmiles)}/>
                        </span>
                        <span className="flex-image">
                           <img src="https://cdn.pixabay.com/photo/2013/07/12/14/15/documents-148079_1280.png" onClick={() => setModalFiles(() => !modalFiles)}/>
                        </span> 
                     </span> }
                </div>
            </div>
        </div>
    );
}

export default Test;
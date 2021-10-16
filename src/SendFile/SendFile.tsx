import React, { useState } from "react";
import './SendFile.css';

interface ISendFile {
    title: string,
    onClose: () => void,
    onSend: (file: any) => void
}
const SendFile: React.FunctionComponent<ISendFile> = ({title, onClose, onSend}) => {

    const [file, setFile] = useState<any>();

    return(
        <div className="sendFileForm">
            <h6>{title}</h6>
            <input type="file" onChange={(event) => setFile(event.target)}/>
            <button onClick={onClose} className="sendFileForm-btnClose">Закрыть</button>
            <button onClick={() => onSend(file)} className="sendFileForm-btnOpen">Отправить</button>
        </div>
    );
}

export default SendFile;
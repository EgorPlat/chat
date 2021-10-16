import React, { useState } from "react";
import './Modal.css';
import { Smiles } from "./Smile";
interface ModalProps {
    title: string,
    onSmile: (smile: any) => void,
    onClick: () => void
}
export interface Smile {
    img: string
}
const Modal: React.FunctionComponent<ModalProps> = (props) => {

    const [smiles, setSmiles] = useState<Smile[]>(Smiles as Smile[]);

    return(
        <div className="background">
            <div className="modals">
            <h6 className="modals-title">{props.title}</h6>
                <div className="modals-smiles">
                   { smiles.map((smile) => <span key={smile.img} className="modals-smiles-smile" onClick={() => {props.onSmile(smile)}}>{smile.img}</span>)}
                </div>
                <button className="modals-button" onClick={props.onClick}>Закрыть</button>
            </div>
        </div>
    );
}
export default Modal;
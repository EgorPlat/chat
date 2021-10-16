import React from "react";
import './FormName.css';

interface IFormName {
    onChangeName: (event: any) => void
}

const FormName: React.FunctionComponent<IFormName> = (props) => {
    return(
        <div className="form">
            <input type="text" placeholder="Как вас представить?" onChange={props.onChangeName}/>
        </div>
    );
}

export default FormName;
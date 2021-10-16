import React from "react";
import './Point.css';

interface IPoint {
    count: number
}
const Point: React.FunctionComponent<IPoint> = ({count}) => {
    return (
        <div className="wrapper">
            <span className="point"></span>
            <span className="count">{count}</span>
        </div>
    );
}

export default Point;
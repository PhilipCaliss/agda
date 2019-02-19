import React from "react";
import { Progress } from "antd";

export default function ProgressBar(props) {
    return (
        <div style={{ width: 170}}>
            <Progress percent={props.progress} size="small" showInfo={false}/>
        </div>
    );
}

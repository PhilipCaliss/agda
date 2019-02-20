import React from "react";
import { Spin, Icon } from "antd";

export default function Spinner() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
            <Spin tip="Hämtar information..." size="large" />
        </div>
    );
}

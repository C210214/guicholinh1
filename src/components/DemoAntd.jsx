import { QRCode, Space } from "antd";
import React from "react";

function DemoAntd() {
    return (
        <Space>
            <QRCode type="canvas" value="https://www.instagram.com/k26.ssk/" />
        </Space>
    );
}

export default DemoAntd;

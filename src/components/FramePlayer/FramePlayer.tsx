import React, { FC } from "react";

interface PropsPlayer<ValueType = any> {
    frames: string[],
    fps: number
}

const FramePlayer: FC<PropsPlayer> = ({frames, fps, ...props}) => {


    return (
        <>
            <div>
                <span>Esses são os frames</span>
                {frames.map((frame) =>{
                    return <p>{frame}</p>
                })}
            </div>
            <div>
                <span>{fps}</span>
            </div>

        </>
    );
};

export default FramePlayer;


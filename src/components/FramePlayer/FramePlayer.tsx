import React, {FC, useEffect, useState} from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {Slider} from "@mui/material";

interface PropsPlayer {
    frames:any[],
    fps: number
}

const FramePlayer: FC<PropsPlayer> = ({frames, fps, ...props}) => {
    const [framePorSegundo, setFramePorSegundo] = useState<number>(0)
    const [tempoTotalDaApresentação, setTempoTotalDaApresentação] = useState<number>(0)
    const [frame, setFrame] = useState<string>('')
    const [onPlay, setOnPlay] = useState<boolean>(false)
    const [time, setTime] = useState<number>(0)
    const [progress, setProgress] = useState(0);

    function definirTempos(){
        let tempoDeTela:number;
        let tempoTotal:number;

        tempoDeTela = 1/fps;
        setFramePorSegundo(tempoDeTela);

        tempoTotal = frames.length * tempoDeTela;
        setTempoTotalDaApresentação(tempoTotal)

    }

    useEffect(() => {
        definirTempos()
    });

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (onPlay){
             timer = setInterval(() => {
                 const timeAtual = time
                 setTime(timeAtual + 1)
                 setFrame(frames[time].url)
                 console.log(time);
             }, 1000);

        } else {
            return () => {
                clearInterval(timer);
            };
        }
    }, [onPlay, time]);

    const handleChange = (event: Event) => {
        const newTime:any = event.target
        setTime(newTime.value);
        setFrame(frames[time].url)
    };

    function playNaParada(){
        setOnPlay(!onPlay)
    }

    return (
        <>

            <img src={frame}/>
            <Slider
                defaultValue={0}
                min={0}
                max={tempoTotalDaApresentação}
                aria-label="Default"
                onChange={handleChange}
                valueLabelDisplay="auto"
                value={time}
                style={{width:"50%"}}/>
            <button onClick={playNaParada}>{!onPlay? "play":"stop"}</button>

            <div>
                <span>{time}</span>
            </div>
        </>
    );
};

export default FramePlayer;


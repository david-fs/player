import React, {FC, useEffect, useState} from "react";
import {Button, Card, CardMedia, Slider} from "@mui/material";


interface PropsPlayer {
    frames: any[],
    fps: number
}

const FramePlayer: FC<PropsPlayer> = ({frames, fps}) => {
    const [tempoDeTela, setTempoDeTela] = useState<number>(0)
    const [tempoTotalDaApresentação, setTempoTotalDaApresentação] = useState<number>(0)
    const [frame, setFrame] = useState<string>(frames[0].url)
    const [onPlay, setOnPlay] = useState<boolean>(false)
    const [time, setTime] = useState<number>(0)

    function definirTempos() {
        let calculoDoTempoDeTela: number;
        let tempoTotal: number;

        calculoDoTempoDeTela = 1 / fps;
        setTempoDeTela(calculoDoTempoDeTela);

        tempoTotal = frames.length * calculoDoTempoDeTela;
        setTempoTotalDaApresentação(tempoTotal)

    }

    function mudarImagem(tempo: number) {
        const imagePosition = Math.floor(tempo / tempoDeTela)
        setFrame(frames[imagePosition].url)
    }

    useEffect(() => {
        definirTempos()
    });

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (onPlay) {
            timer = setInterval(() => {
                if (time + 1 < tempoTotalDaApresentação) {
                    setTime(time + 1)
                    mudarImagem(time + 1)
                } else {
                    setTime(time + 1)
                    setOnPlay(false)
                }

            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [onPlay, time]);

    const handleChange = (event: Event) => {
        const newTime: any = event.target
        setTime(newTime.value);
        if (newTime.value === tempoTotalDaApresentação) {
            mudarImagem(newTime.value - 1)
        } else {
            mudarImagem(newTime.value)
        }

    };

    function playStop() {
        if (time === tempoTotalDaApresentação) {
            setTime(0);
            setOnPlay(true);
            mudarImagem(0)
        } else {
            setOnPlay(!onPlay);
        }
    }

    return (
        <>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    style={{objectFit: "contain"}}
                    component="img"
                    height="400"
                    image={frame}
                    alt="green iguana"
                />
            </Card>
            <Slider
                defaultValue={0}
                min={0}
                max={tempoTotalDaApresentação}
                aria-label="Default"
                onChange={handleChange}
                valueLabelDisplay="auto"
                value={time}
                style={{width: "50%"}}/>
            <Button variant="outlined" onClick={playStop}>{!onPlay ? "play" : "stop"}</Button>

            <div>
                <span>Tempo atual: {time}</span>
            </div>
        </>
    );
};

export default FramePlayer;


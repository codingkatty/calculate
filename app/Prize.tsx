import React from 'react';
import Tilt from 'react-parallax-tilt'

interface PrizeProps {
    title: string;
    description: React.ReactNode;
    image: string;
    timeEst: string;
}

export default function Prize({
    title,
    description,
    image,
    timeEst
}: PrizeProps) {
    return (
        <Tilt
            tiltReverse={true}
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            className="bg-[#272820] min-w-[50%] p-10 flex flex-col justify-between"
        >
            <div>
                <h1 className="text-4xl">{title}</h1>
                <br />
                <p className="font-pixel text-s -tracking-[.1em]">{description}</p>
            </div>
            <img src={image} className="py-10" />
            <p className="text-3xl">{timeEst}</p>
        </Tilt>
    )
}
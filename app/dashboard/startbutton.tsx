"use client"

interface buttonData {
    link: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Start({ link }: buttonData) {
    return (
        <button className="otherbtn mb-[60px] font-pirkkala text-xl lg:ml-[12px]" onClick={link}>start session!</button>
    )
}
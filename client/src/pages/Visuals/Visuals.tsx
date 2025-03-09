import { useEffect, useState } from "react";
import "./style.css"

type Response = {
    id: number,
    text: string
}

function Visuals () {
    const [text, setText] = useState<string>("");
    // TODO: False random? Substract those which have been used
    const [displayedIds, setDisplayedIds] = useState<number>(0);

    useEffect(() => {
        fetchText();
    }, [])

    const fetchText = async () => {
        const res = await fetch(`/api/queSon`)
        const parsedRes = await res.json() as Response;
        setText(parsedRes.text)
        setDisplayedIds(parsedRes.id)
    }

    return <main className="visual">
        <div className="visual__text">
            <span className="visual__fix">Els 30 són</span>
            <span className="visual__resposta">{` ${text}`}</span>
        </div>
    </main>
}

export default Visuals
import { ChangeEvent, useState } from "react";
import "./style.css"

function Home () {
    const [text, setText] = useState<string>("")

    const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(text)
        // setText(text)
    }

    const onClickSend = async () => {
        console.log()
    }

    return <main className="home">
        <div className="home__resposta">
            <h1 className="resposta__title">Els 30 són... </h1>
            <textarea 
                className="resposta__input"
                placeholder="Escriu aquí" 
                value={text} 
                onChange={onChangeText}
            />
            <button 
                className="resposta__button" 
                type="submit" 
                onClick={onClickSend}
            >
                Enviar
            </button>
        </div>
    </main>
}

export default Home
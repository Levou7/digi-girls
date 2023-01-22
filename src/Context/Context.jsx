import { useState, createContext } from "react";

const Context = createContext();

function Provider({children}) {
    const [lang, setLang] = useState('')

    return (
        <Context.Provider value={{lang, setLang}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}
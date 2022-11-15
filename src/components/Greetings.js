function Greetings ({lang, children}) {
    return lang === 'de'? <p>Hallo {children}</p> : <p>Bonjour {children}</p> 
}

export default Greetings;
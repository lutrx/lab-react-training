function Greetings ({lang, children}) {
    console.log("lang: ", lang);
    console.log("children: ", children);
    return lang === 'de'? <p>Hallo {children}</p> : <p>Bonjour {children}</p> 
}

export default Greetings;
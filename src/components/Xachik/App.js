import React from "react";

const App = () => {

/* 2.ՏՐՎԱԾ Է ՆԱԽԱԴԱՍՈՒԹՅՈՒՆ,փորձեք տպել նույն նախադասությունը բայց արդեն առաջին բառը մեծատառ սարգած */    

/*     const string = "hello world";

        function toUpperCase(str) {
            const capitalize = () => str[0].toUpperCase() + str.slice(1)
            console.log(capitalize())
        }

    toUpperCase(string) */

    /* 3.Կա "խառը" տիպերով լցված զանգված, գտնել բոլոր այն բառերը , որոք պարունակում են մեծատառ */
    const arr = [12 , null, "hello", 25, "UPPERCASE", "MECATAR", true]
    const findCapitalize = (arr) => {
        const strings = arr.filter(item => typeof(item) === 'string')
        return strings.filter(item => item === item.toUpperCase())
    }

    console.log(findCapitalize(arr))

    return(
        <div>
            
        </div>
    )
}

export default App;
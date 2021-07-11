import React, { useState, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import Editor from "./Editor"
function App () {
    // Editor is the custom components for basic inputs.....
    // iframe for rendering output...
    // timeout for gap between writing in text editor and showing the output on the screen

    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState(' ')

    useEffect (() => {
        const timeout = setTimeout(() => {
            setSrcDoc ( `
                <html>
                    <body> ${html} </body>
                    <style> ${css} </style>
                    <script> ${js} </script>
                </html>
            `
            )
        }, 1000);
        return () => clearTimeout (timeout)
    }, [html, css, js]
    )
    return (
        <>
            <div className = "header" >
                <h2 className = "name" >
                &lt;/&gt; CodeBay
                </h2>
            </div>
            <div className = "pane top-pane" >
                <Editor 
                language = "xml"
                nameoflang = "HTML"
                value = {html}
                onChange = {setHtml}
                />  
                <Editor 
                language = "css"
                nameoflang = "CSS"
                value = {css}
                onChange = {setCss}
                />
                <Editor 
                language = "javascript"
                nameoflang = "JS"
                value = {js}
                onChange = {setJs}
                />
            </div>
            <div className = "h333" >
               <h3>
                   Output
               </h3>
            </div>
            <div className = "pane" >
                <iframe 
                srcDoc = {srcDoc}
                title = "output"
                sandbox = "allow-scripts"  
                frameBorder="0"
                width = "100%"
                height = "100%"
                />
            </div>
            <div className = "footer" >
                <footer>
                    Project developed by @MarkupCoders -
                    Rajdeep Kundu, Abhirup Kabiraj, Arnab Seth, Mainak Das
                </footer>
            </div>
        </>
    )
}
export default App
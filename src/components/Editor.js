import React, { useState } from "react"
// importing the codemirror libraries....
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
// for html files
import "codemirror/mode/xml/xml"
// for javascript files
import "codemirror/mode/javascript/javascript"
// for css files
import "codemirror/mode/css/css"
import { Controlled as Controllededitor } from "react-codemirror2"
// for opening and closing icon's
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons"
// nameoflang for the language name
// language -> LANGUAGE USE IN EDITOR
// nameoflang -> HANDLING THE NAME..
// value and onChange -> HANDLING VALUES BEFORE AND //AFTER CHANGE 
export default function Editor (props) {
    const {
        language,
        nameoflang,
        value,
        onChange
    } = props
    const [open, setOpen] = useState(true)
    function handlechange (editor, data, value) {
        onChange(value)
    }
    return (
        <div className =  
        {`editor_container ${open ? '' : 'collapsed' } `}
        >
            {/* giving it an extra class when editor is closed */}
            <div className = "editor_title" >
                {nameoflang}
                <button
                className = "btn"
                onClick = { 
                    () => setOpen(prevOpen => ! prevOpen)
                }
                >
                    <FontAwesomeIcon 
                       icon = { open ? faCompressAlt : faExpandAlt }
                    />
                </button>
                {/* for increasing and decreasing the size of the editor */}
            </div>
            <Controllededitor 
            onBeforeChange = {handlechange}
            value = {value}
            className = "code_mirror_wrapper"
            options = {
                {
                    lineWrapping : true,
                    lint : true,
                    mode : language,
                    lineNumbers : true,
                    autocorrect : true,
                    theme : "material"
                }
            }
            />
        </div>
    )
}
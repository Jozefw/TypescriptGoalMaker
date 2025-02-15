import  React from 'react'
import {type ReactNode} from 'react'


type infoBlockProps = {
    mode: "hint" | "warning"
    children:ReactNode;
}
export default function InfoBlock({mode,children}:infoBlockProps) {

    if(mode === "hint"){
        return(
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>        
        )
    }
    return (
        <aside className="infobox infobox-warning warning--low">
        <h4>Warning...</h4>
        <p>{children}</p>
        
        </aside>
)
}

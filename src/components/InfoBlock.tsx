import  React from 'react'
import {type ReactNode} from 'react'

type HintBlock={
    mode: "hint";
    children:ReactNode;
}

type SeverityBlock ={
    mode: "warning";
    severity: "low" | "medium" | "high" 
    children:ReactNode;
} 

type infoBlockProps = HintBlock | SeverityBlock
export default function InfoBlock(props:infoBlockProps) {
const {children,mode} = props
    if(props.mode === "hint"){
        return(
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>        
        )
    }
    const {severity} = props
    return (
        <aside className = {`infobox infobox-warning warning--${severity}`}>
        <h4>Warning...</h4>
        <p>{children}</p>
        
        </aside>
)
}

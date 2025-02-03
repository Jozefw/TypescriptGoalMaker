import {type PropsWithChildren, type ReactNode} from 'react';
type HeaderProps = {
    image:{
        src:string,
        alt:string,
        src2:string,
        alt2:string
    }
    children:ReactNode
}

export default function Header({image,children}:HeaderProps){
return (
<header>
    <img src={image.src2} alt={image.alt2}></img>
    <img {...image}></img>
    {children}
</header>
)
}
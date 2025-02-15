import {type FC, type PropsWithChildren, type ReactNode} from 'react';

type DailyGoals={
    title:string;
    id:number;
    description:string;
    children:ReactNode;
    toDeleteGoal:(id:number)=> void;
}


export default function DailyGoals({title,description,children,id,toDeleteGoal}:DailyGoals){
    return<article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
            <button onClick={()=>toDeleteGoal(id)}>Delete</button>
        </div>
    </article>
}
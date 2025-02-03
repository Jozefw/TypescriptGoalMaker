import {type FC, type PropsWithChildren, type ReactNode} from 'react';

type DailyGoals={
    title:string,
    description:string,
    children:ReactNode,
    toDelt
}

// type DailyGoalsProps = PropsWithChildren<{title:string}> 
// can also use this way

// const DailyGoalsComponent = ({title, description, children}:DailyGoals)=>{
//     return<article>
//     <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         {children}
//         <button>Delete</button>
//     </div>
// </article>
// }
// const DailyGoalsComponent2:FC<DailyGoals> = ({title,description,children})=>{
//     return<article>
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//             {children}
//             <button>Delete</button>
//         </div>
//     </article> 
// }
export default function DailyGoals({title,description,children}:DailyGoals){
    return<article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
            <button onClick={toDelete}>Delete</button>
        </div>
    </article>
}
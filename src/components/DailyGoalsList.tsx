import DailyGoals from "./DailyGoals";
import {type DailyGoal} from "../App.tsx"
import InfoBlock from './InfoBlock';
import {type ReactNode} from 'react';

type goalsProps = {
    listGoalsProp:DailyGoal[];
    onDelete:(id:number)=> void;
}
type goalsProps2 = {
    listGoalsProp:{
        title:string;
        description:string;
        id: number;
        onDelete:(id:number)=> void;
    }[]
}
export default function DailyGoalsList({listGoalsProp, onDelete}:goalsProps) {
    if(listGoalsProp.length === 0){
        return(<InfoBlock mode="hint">No Habbits Yet</InfoBlock>)
    }

    let warningBlock: ReactNode;
    if(listGoalsProp.length >= 4){
        warningBlock = <InfoBlock mode="warning">That may be too many</InfoBlock>
    }
    return (
        <>
        {warningBlock}
        <ul>
            {listGoalsProp.map((goal) => (
                <li>
                    <DailyGoals id={goal.id} toDeleteGoal={onDelete} key={goal.id} title={goal.title} description={goal.description}>
                        <p>{goal.description}</p>
                    </DailyGoals>
                </li>
            ))}

        </ul>
        
        </>
    )
}
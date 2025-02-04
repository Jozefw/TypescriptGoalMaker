import DailyGoals from "./DailyGoals";
import {type DailyGoal} from "../App.tsx"

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
    return (
        <ul>
            {listGoalsProp.map((goal) => (
                <li>
                    <DailyGoals id={goal.id} toDeleteGoal={onDelete} key={goal.id} title={goal.title} description={goal.description}>
                        <p>{goal.description}</p>
                    </DailyGoals>
                </li>
            ))}

        </ul>
    )
}
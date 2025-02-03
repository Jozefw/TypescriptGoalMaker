import DailyGoals from "./DailyGoals";
import {type DailyGoal} from "../App.tsx"

type goalsProps = {
    listGoalsProp:DailyGoal[];
    deleteGoal:(id:number)=> void
}
type goalsProps2 = {
    listGoalsProp:{
        title:string,
        description:string,
        id: number
    }[]
}
export default function DailyGoalsList({listGoalsProp, deleteGoal}:goalsProps) {
    return (
        <ul>
            {listGoalsProp.map((goal) => (
                <li>
                    <DailyGoals toDelete={deleteGoal} key={goal.id} title={goal.title} description={goal.description}>
                        <p>{goal.description}</p>
                    </DailyGoals>
                </li>
            ))}

        </ul>
    )
}
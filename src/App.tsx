import Header from "./components/Header.tsx";
import DailyGoalsList from "./components/DailyGoalsList.tsx";
import { useState } from "react";
import goalsImage from "./assets/goals.jpg";
import Target from "./assets/target.png";

export type DailyGoal = {
  title:string,
  description:string,
  id: number
}
export default function App() {

  const [goals,SetGoals] = useState<DailyGoal[]>([]);

  function HandleDelete(id:number){
    SetGoals(prevVal => prevVal.filter((goal)=>goal.id !== id) )
  }

  function addGoalHandler(){
    SetGoals((prevVal)=>{
      const newGoal:DailyGoal ={
        id:Math.random(),
        title: 'New Title',
        description:"New Description"
      }
      return [...prevVal,newGoal]
    })
  }
  return (
    <main>
      <Header image={{src:goalsImage, alt:"Header Image", src2:Target, alt2:"background Target"}}>
        <h1>Daily Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add a Daily Goal</button>
      <button onClick={HandleDelete}></button>
    <DailyGoalsList listGoalsProp={goals}></DailyGoalsList>
    </main>
  )
}

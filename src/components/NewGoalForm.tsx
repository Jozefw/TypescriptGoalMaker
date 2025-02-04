import { useRef, type FormEvent } from "react"

type NewGoalProps = {
    onAddGoal: (goal:string,summary:string)=>void
}

export default function NewGoalForm ({onAddGoal}:NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    
    function handleSubmit(evt:FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const inputGoal = goal.current!.value;
        const inputSummary = summary.current!.value;
        evt.currentTarget.reset();
        onAddGoal(inputGoal, inputSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="3">Todays Goal</label>
                <input id="3" type="text" ref={goal}></input>
            </p>
            <p>
                <label htmlFor="summary">Summary</label>
                <input id="summary" type="text" ref={summary}></input>
            </p>
            <p><button>Add Goal</button></p>
        </form>
    )
}
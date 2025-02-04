import { type FormEvent } from "react"

function handleSubmit(evt:FormEvent) {
    evt.preventDefault();
}
export default function () {
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="3">Todays Goal</label>
                <input id="3" type="text"></input>
            </p>
            <p>
                <label htmlFor="summary">Summary</label>
                <input id="summary" type="text"></input>
            </p>
            <p><button>Add Goal</button></p>
        </form>
    )
}
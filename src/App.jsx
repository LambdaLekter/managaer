import './App.css'
import React from "react";
import Inputs from "./components/Inputs.jsx";
import Outputs from "./components/Outputs.jsx";


function App() {
    const [error, setError] = React.useState(false);
    const [task, setTask] = React.useState(null);
    const [inputs, setInputs] = React.useState({});

    const onInputsUpdated = (label, value) => {
        inputs[label] = value;
        const newInputs = {...inputs};
        setInputs(newInputs);
    }

    const onTaskChange = (taskID) => {
        const taskFileName = "./tasks/" + taskID + "/task.json";
        setError(false);

        import(taskFileName + "?raw")
            .then(mod => {
                setTask(JSON.parse(mod.default));
            })
            .catch(err => {
                console.error("Error reading task file:", err);
                setError(true);
            });
    }

    // TODO aggiungi messaggio di errore

    return (
        <>
            <div>
                <h1>Mana-Gae-r</h1>

                <select id={"select-task"} onChange={event => onTaskChange(event.target.value)}>
                    <option value="none">---</option>
                    <option value="abpm">Referto ABPM</option>
                </select>

                <hr />

                <Inputs task={task} onInputsUpdated={onInputsUpdated} />

                <hr />

                <div>
                    <Outputs task={task} inputs={inputs} />
                </div>
            </div>
        </>
    )
}

export default App

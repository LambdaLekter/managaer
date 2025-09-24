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

    const onCopyClicked = () => {
        navigator.clipboard.writeText(document.getElementById("outputs").innerText)
            .then(() => {
                alert("Testo copiato negli appunti!")
            })
            .catch(err => {
                alert("Errore durante la copia negli appunti: " + err)
            });
    }

    const onTaskChange = (taskID) => {
        setError(false);

        fetch(import.meta.env.BASE_URL + 'tasks/' + taskID + '.json')
            .then(res => res.json())
            .then(data => {
                setTask(data);
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

                <button id={"copy-outputs-btn"} onClick={onCopyClicked}>Copia Risultati</button>

                <hr />

                <div id={"task-container"}>
                    <Inputs task={task} onInputsUpdated={onInputsUpdated} />

                    <div className={"separator"} />

                    <div>
                        <Outputs task={task} inputs={inputs} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

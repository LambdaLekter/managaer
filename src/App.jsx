import './App.css'
import React from "react";
import Inputs from "./components/Inputs.jsx";


function App() {
    const [currentTask, setCurrentTask] = React.useState("abpm");

    return (
        <>
            <div>
                <h2>Mana-Gae-r</h2>

                <select id={"select-task"} onChange={event => setCurrentTask(event.target.value)}>
                    <option value="abpm">Referto ABPM</option>
                    <option value="prova1">Prova 1</option>
                    <option value="prova2">Prova 2</option>
                </select>

                <Inputs currentTask={currentTask} />

                <button>Calcola</button>

                <div>
                    <h3>Risultato:</h3>
                    <p id={"result"}></p>
                </div>
            </div>
        </>
    )
}

export default App

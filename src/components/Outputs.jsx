import React from "react";
import RefOutput from "./RefOutput.jsx";


function Outputs(props) {
    if (!props.task) {
        return <div id={"outputs"}></div>;
    }

    let noOutputs = Object.values(props.inputs).every(input => input === undefined)

    return (
        <div id={"outputs"}>
            {noOutputs && <div>Inserisci dei dati per ottenere i risultati.</div>}
            {props.task.outputs.map(output =>
                <RefOutput
                    key={output.label}
                    taskID={props.task.id}
                    label={output.label}
                    function={output.function}
                    inputs={props.inputs}
                />
            )}
        </div>
    );
}

export default Outputs;

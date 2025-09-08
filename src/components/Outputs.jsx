import React from "react";
import RefOutput from "./RefOutput.jsx";


function Outputs(props) {
    if (!props.task) {
        return <div id={"outputs"}></div>;
    }

    return (
        <div id={"outputs"}>
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

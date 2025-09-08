import React from "react";
import RefInput from "./RefInput.jsx";


function Inputs(props) {
    if (!props.task) {
        return <div id={"inputs"}><i>Seleziona un task</i></div>;
    }

    return (
        <div id={"inputs"}>
            {props.task.inputs.map(input =>
                <RefInput
                    key={input.label}
                    label={input.label}
                    type={input.type}
                    onInputsUpdated={props.onInputsUpdated}
                />
            )}
        </div>
    );
}

export default Inputs;

import React from "react";
import RefInput from "./RefInput.jsx";


function Inputs({currentTask}) {
    const [inputItems, setInputItems] = React.useState(null);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const taskFileName = "../tasks/" + currentTask + "/task.json";
        setError(false);
        setInputItems(null);

        import(taskFileName + "?raw")
            .then(mod => {
                const task = JSON.parse(mod.default);
                setInputItems(
                    task.inputs.map(input =>
                        <RefInput key={input.label} label={input.label} type={input.type} />
                    )
                );
            })
            .catch(err => {
                console.error("Error reading task file:", err);
                setError(true);
            });
    }, [currentTask]);

    if (error) {
        return (
            <div id={"inputs"}>
                <p>Error loading inputs for the selected task.</p>
            </div>
        );
    }

    return (
        <div id={"inputs"}>
            {inputItems}
        </div>
    );
}

export default Inputs;

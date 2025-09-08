import {useEffect, useState} from "react";

function RefOutput(props) {
    const [func, setFunc] = useState(() => (_) => {});
    const [functionResult, setFunctionResult] = useState("");

    useEffect(() => {
        import(`../tasks/${props.taskID}/functions.js`)
            .then(module => {
                const f = module[props.function];
                setFunc(() => f);
            })
            .catch(err => {
                console.error('Errore nell\'importazione del modulo:', err);
            });
    }, [props.function]);

    useEffect(() => {
        try {
            if (!func) return;
            const result = func(props.inputs)
            setFunctionResult(result)
        } catch (error) {
            console.log(func)
            console.error("Errore nell'esecuzione della funzione:", error);
            setFunctionResult("Errore nell'esecuzione della funzione");
        }
    }, [props.inputs]);

    return (
        <div className={"ref-output"}>
            <h3>{props.label}</h3>
            {functionResult && functionResult.split("\n").map((line, idx) =>
                <div key={props.label+idx}>{line}</div>
            )}
        </div>
    );
}

export default RefOutput;
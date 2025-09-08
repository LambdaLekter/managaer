

function RefInput(props) {
    const onInputChange = (event) => {
        props.onInputsUpdated(props.label, event.target.value);
    }

    return (
        <div className={"RefInput"}>
            <label>{props.label} </label>
            <input onChange={onInputChange} type={props.type}></input>
        </div>
    );
}

export default RefInput;

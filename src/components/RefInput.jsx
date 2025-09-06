

function RefInput(props) {
    return (
        <div className={"RefInput"}>
            <label>{props.label} </label>
            <input type={props.type}></input>
        </div>
    );
}

export default RefInput;

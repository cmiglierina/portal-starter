

function ErrorComponent(props) {

    return (
    <>
        <h2>Siamo spiacenti, si è verificato un errore</h2>
        <div>
            {props.text}
        </div>
    </>
    )
}


export default ErrorComponent;
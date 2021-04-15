const Button = ({text,src_pic,onClick}) => {
    return (
        <button onClick = {onClick}>
            <span className = 'circle'>
                <img src={src_pic}/>
            </span>
            <p className = 'btn_name'>
                {text}
            </p>
        </button>
    )
}

export default Button

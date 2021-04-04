const Button = ({text,src_pic}) => {
    return (
        <button>
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

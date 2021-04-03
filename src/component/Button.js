const Button = ({text_food,src_pic}) => {
    return (
        <button>
            <span className = 'circle'>
                <img src={src_pic}/>
            </span>
            <p className = 'btn_name'>
                {text_food}
            </p>
        </button>
    )
}

export default Button

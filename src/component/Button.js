import './cssFile/button.css'

const Button = ({text,src_pic,onClick,classname}) => {
    return (
        <button className = {classname} onClick = {onClick}>
            <span className = 'circle'>
                <img className = 'pic_btn' src={src_pic}/>
            </span>
            <p className = 'btn_name'>
                {text}
            </p>
        </button>
    )
}

export default Button

import Button from './Button'

const Step = ({text_step,textfood1,textfood2,pic1,pic2,onClick1,onClick2}) => {
    return (
        <div>
            <h1 className = 'step1'>{text_step}</h1>
            <Button text = {textfood1} src_pic = {pic1} onClick = {onClick1}/>
            <Button text = {textfood2} src_pic = {pic2} onClick = {onClick2}/>
        </div>
    )
}

export default Step

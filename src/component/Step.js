import Button from './Button'
import './cssFile/Step.css'

const Step = ({text_step,textfood1,textfood2,pic1,pic2,onClick1,onClick2,classname}) => {
    return (
        <div className = {classname}>
            <h1 className = 'step-header'>{text_step}</h1>
            <Button text = {textfood1} src_pic = {pic1} onClick = {onClick1} classname = {textfood1}/>
            <Button text = {textfood2} src_pic = {pic2} onClick = {onClick2} classname = {textfood2}/>
        </div>
    )
}

export default Step

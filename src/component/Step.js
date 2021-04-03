import Button from './Button'
const Step = ({text_step,textfood1,textfood2,pic1,pic2}) => {
    return (
        <div>
            <h1 className = 'step1'>{text_step}</h1>
            <Button text_food = {textfood1} src_pic = {pic1}/>
            <Button text_food = {textfood2} src_pic = {pic2}/>
        </div>
    )
}

export default Step

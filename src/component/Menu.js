import Headmenu from './Haedmenu'
import Step from './Step'
import pic_auntheader from './pic/aunt_header.png'
import pic_rice from './pic/rice.png'
import pic_mama from './pic/mama.png'
const Menu = () => {
    return (
        <div className = 'menu'>
            <Headmenu className = 'head_menu' aunt_head = {pic_auntheader}/>
            <Step
            className = 'step 1' 
            text_step = 'Step 1 : เลือกข้าวหรือเส้น' 
            textfood1 = 'ข้าว' 
            textfood2 = 'มาม่า' 
            pic1 = {pic_rice} 
            pic2 = {pic_mama}/>
        </div>
    )
}

export default Menu

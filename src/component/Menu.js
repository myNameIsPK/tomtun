import Headmenu from './Haedmenu'
import Step from './Step'
import Conversation from './Conversation'
import Button from './Button'
import pic_auntheader from './pic/aunt_header.png'
import pic_rice from './pic/rice.png'
import pic_mama from './pic/mama.png'
import pic_pork from './pic/pork.png'
import pic_beef from './pic/beef.png'
import pic_kapao from './pic/sweet basil.png'
import pic_karee from './pic/Curry powder.png'

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
            <Step
            className = 'step 2'
            text_step = 'Step 2 : เลือกเนื้อสัตว์'
            textfood1 = 'หมู่ตุ๋น'
            textfood2 = 'เนื้อตุ๋น'
            pic1 = {pic_pork}
            pic2 = {pic_beef}
            />
            <Step 
            className = 'step 3'
            text_step = 'Step 3 : เลือกวิธีปรุง'
            textfood1 = 'ผัดกะเพรา'
            textfood2 = 'ผัดผงกระหรี่'
            pic1 = {pic_kapao}
            pic2 = {pic_karee}
            />
            <Conversation />
            <Button text = 'ยืนยัน'/>
            <Button text = 'เริ่มสั่งใหม่'/>
        </div>
    )
}

export default Menu

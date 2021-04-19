import Headmenu from './Headmenu'
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

import GlobalState from './GlobalState';
import React, { useContext} from 'react';


const Menu = () => {
    const [state, setState] = useContext(GlobalState);

    const ch = () =>{
        console.log(state)
    }
    const Click_rice = () =>{
        setState({...state,rice : true,mama : false})
    }
    const Click_mama = () =>{
        setState({...state,mama : true,rice : false})
    }
    const Click_pork = () =>{
        setState({...state,pork : true,beef : false})
    }
    const Click_beef = () =>{
        setState({...state,beef : true,pork : false})
    }
    const Click_krapao = () =>{
        setState({...state,krapao : true,karee : false})
    }
    const Click_karee = () =>{
        setState({...state,karee : true,krapao : false})
    }
    const reset = () =>{
        setState({
            rice:false,
            mama:false,
            pork:false,
            beef:false,
            krapao:false,
            karee:false})
    }
    return (
        <div className = 'menu'>
            <Headmenu className = 'head_menu' aunt_head = {pic_auntheader}/>
            <Step
            className = 'step 1' 
            text_step = 'Step 1 : เลือกข้าวหรือเส้น' 
            textfood1 = 'ข้าว' 
            textfood2 = 'มาม่า' 
            pic1 = {pic_rice} 
            pic2 = {pic_mama}
            onClick1 = {Click_rice}
            onClick2 = {Click_mama}/>
            <Step
            className = 'step 2'
            text_step = 'Step 2 : เลือกเนื้อสัตว์'
            textfood1 = 'หมู่ตุ๋น'
            textfood2 = 'เนื้อตุ๋น'
            pic1 = {pic_pork}
            pic2 = {pic_beef}
            onClick1 = {Click_pork}
            onClick2 = {Click_beef}/>
            <Step 
            className = 'step 3'
            text_step = 'Step 3 : เลือกวิธีปรุง'
            textfood1 = 'ผัดกะเพรา'
            textfood2 = 'ผัดผงกระหรี่'
            pic1 = {pic_kapao}
            pic2 = {pic_karee}
            onClick1 = {Click_krapao}
            onClick2 = {Click_karee}/>

            <Conversation />

            <Button text = 'ยืนยัน' onClick = {ch}/>
            <Button text = 'เริ่มสั่งใหม่' onClick = {reset}/>
        </div>
    )
}

export default Menu

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

import GlobalState from './GlobalState';
import React, { useContext} from 'react';

const Menu = () => {
    const [state, setState] = useContext(GlobalState);

    const ch = () =>{
        console.log(state)
    }
    const Click_rice = () =>{
        setState(prevState => ({...prevState, rice : true, mama : false, string : prevState.string + 'ข้าว '}))
    }
    const Click_mama = () =>{
        setState(prevState => ({...prevState, mama : true, rice : false, string : prevState.string + 'มาม่า '}))
    }
    const Click_pork = () =>{
        setState(prevState => ({...prevState,pork : true,beef : false, string : prevState.string + 'หมูตุ๋น '}))
    }
    const Click_beef = () =>{
        setState(prevState => ({...prevState,beef : true,pork : false, string : prevState.string + 'เนื้อตุ๋น '}))
    }
    const Click_kapao = () =>{
        setState(prevState => ({...state,krapao : true,karee : false, string : prevState.string + 'ผัดกะเพรา '}))
    }
    const Click_karee = () =>{
        setState(prevState => ({...prevState,karee : true,krapao : false, string : prevState.string + 'ผัดผงกระหรี่ '}))
    }
    const reset = () =>{
        setState({
            rice:false,
            mama:false,
            pork:false,
            beef:false,
            krapao:false,
            karee:false,
            string : ''})
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
            onClick1 = {Click_kapao}
            onClick2 = {Click_karee}/>

            <Conversation />

            <Button text = 'ยืนยัน' onClick = {ch}/>
            <Button text = 'เริ่มสั่งใหม่' onClick = {reset}/>
        </div>
    )
}

export default Menu

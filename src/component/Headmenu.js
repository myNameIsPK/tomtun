import './cssFile/Headmenu.css'
const Headmenu = ({aunt_head}) => {
    return (
        <div className = 'header-menu'>
            <img className = 'pic_auntheader' src={aunt_head}/>
            <p className='text_1'>ต้มตุ๋น</p>
            <p className='text_2'>ตามสั่ง</p>
        </div>
    )
}

export default Headmenu

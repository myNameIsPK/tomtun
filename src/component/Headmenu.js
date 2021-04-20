import './cssFile/Headmenu.css'
const Headmenu = ({aunt_head}) => {
    return (
        <div className = 'header menu'>
            <img className = 'pic_auntheader' src={aunt_head}/>
            <h1>ต้มตุ๋นตามสั่ง</h1>
        </div>
    )
}

export default Headmenu

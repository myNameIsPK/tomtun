import './cssFile/Popup.css'

const PopupConfirm = ({toggle,pic,string}) => {
    return (
        <div className='popup-container'>
            <div className = 'box-popup'>
                <img className = 'popup_pic' src={pic} />
                <h1 className = 'popup_string'> {string} </h1>
                <button className = 'take_order' onClick = {toggle}>รับอาหาร</button>
            </div>
        </div>
    )
}

export default PopupConfirm

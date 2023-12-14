import useTelegram from '../../hooks/useTelegram/useTelegram';

import './sendBtn.css'

const SendButton = ({totalLength, totalPrice}) => {
    const { onClose } = useTelegram();

    const sendData = async () => {
        onClose();
    }

    return (
        <button onClick={sendData} className="send__data">
          Оформить заказ из {totalLength} товаров на {totalPrice} руб
        </button>
    );
}

export default SendButton;
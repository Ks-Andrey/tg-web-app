import useTelegram from '../../hooks/useTelegram/useTelegram';

import './sendBtn.css'

const SendButton = ({totalLength, totalPrice, bakset}) => {
    const { tg, onClose } = useTelegram();

    const sendData = () => {
        tg.sendData(JSON.stringify(bakset));
        onClose();
    }

    return (
        <button onClick={sendData} className="send__data">
          Оформить заказ из {totalLength} товаров на {totalPrice} руб
        </button>
    );
}

export default SendButton;
import useTelegram from '../../hooks/useTelegram/useTelegram';

import './sendBtn.css'

const SendButton = ({totalLength, totalPrice, basket}) => {
    const { tg } = useTelegram();

    const sendData = async () => {
        tg.sendData(JSON.stringify(basket));
    }

    return (
        <button onClick={sendData} className="send__data">
          Оформить заказ из {totalLength} товаров на {totalPrice} руб
        </button>
    );
}

export default SendButton;
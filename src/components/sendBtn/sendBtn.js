import useTelegram from '../../hooks/useTelegram/useTelegram';

import './sendBtn.css'

const SendButton = ({totalLength, totalPrice, bakset}) => {
    const { tg, onClose } = useTelegram();

    const sendData = async () => {
        await tg.ready();

        tg.sendData(JSON.stringify(bakset));
        onClose();
    }

    return (
        <button onClick={sendData} className="send__data">
          Оформить заказ из {totalLength} товаров на {totalPrice} руб
          {tg.initDataUnsafe?.user}
        </button>
    );
}

export default SendButton;
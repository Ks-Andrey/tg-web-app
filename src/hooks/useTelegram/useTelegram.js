const tg = window.Telegram.WebApp;

export default function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onExpand = () => {
        tg.expand();
    }

    return {
        onClose,
        onExpand,
        tg
    }
}
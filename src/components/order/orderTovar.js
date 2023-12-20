const OrderTovar = ({ name, price, count }) => {
    return (
        <div className="basket__tovar">
            <ul>
                <li>{name}</li>
                <li>Цена: {price}</li>
                <li>Количество: {count}</li>
            </ul>
        </div>
    );
}

export default OrderTovar;
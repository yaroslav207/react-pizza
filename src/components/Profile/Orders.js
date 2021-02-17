import React from "react"


const Orders = () => (
    <div className="orders-block">
        <h4 className="title">Мои заказы</h4>
        <table className="orders-block__table table">
            <thead className="table__title">
            <th>Заказ №</th>
            <th>Дата</th>
            <th>Доставка на имя</th>
            <th>Сумма заказа</th>
            <th>Статус заказа</th>
            <th></th>
            </thead>
            <tbody>
            <tr className="table__rows">
                <td className="table__id">
                    4233433
                </td>
                <td className="table__data">
                    01.01.2001
                </td>
                <td className="table__name">
                    Ярослав
                </td>
                <td className="table__price">
                    300 грн.
                </td>
                <td className="table__status">
                    Исполнен
                </td>
                <td className="table__reorder">
                    Перезаказать
                </td>
            </tr>
            </tbody>
        </table>
    </div>
)

export default Orders
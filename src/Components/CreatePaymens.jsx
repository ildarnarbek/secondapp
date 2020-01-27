import React from "react";

export default class CreatePayments extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="paymentDescription">Наименование:</label>
            <input
              type="text"
              name="paymentDescription"
              id="paymentDescription"
            />
          </div>
          <div>
            <label htmlFor="paymentComment">Комментарий:</label>
            <input type="text" name="paymentComment" id="paymentComment" />
          </div>
          <div>
            <label htmlFor="paymentDate">Дата платежа:</label>
            <input type="text" name="paymentDate" id="paymentDate" />
          </div>
          <div>
            <label htmlFor="paymentSum">Суммв платежа:</label>
            <input type="text" name="paymentSum" id="paymentSum" />
          </div>
          <div>
            <label htmlFor="paymentReceiver">Реквизиты платежа:</label>
            <input type="text" name="paymentReceiver" id="paymentReceiver" />
          </div>

          <button type="submit">Создать платеж</button>
          <button type="submit">Отмена</button>
        </form>
      </div>
    );
  }
}

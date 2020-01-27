import React, { Component } from "react";

export default class PaymentsInfo extends React.Component {
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
              disabled
            />
          </div>
          <div>
            <label htmlFor="paymentComment">Комментарий:</label>
            <input
              type="text"
              name="paymentComment"
              id="paymentComment"
              disabled
            />
          </div>
          <div>
            <label htmlFor="paymentDate">Дата платежа:</label>
            <input type="text" name="paymentDate" id="paymentDate" disabled />
          </div>
          <div>
            <label htmlFor="paymentSum">Суммв платежа:</label>
            <input type="text" name="paymentSum" id="paymentSum" disabled />
          </div>
          <div>
            <label htmlFor="paymentReceiver">Реквизиты платежа:</label>
            <input
              type="text"
              name="paymentReceiver"
              id="paymentReceiver"
              disabled
            />
          </div>

          <button type="submit">Закрыть</button>
        </form>
      </div>
    );
  }
}

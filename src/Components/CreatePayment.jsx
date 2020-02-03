import React, { Component } from "react";

export default class CreatePayment extends Component {
  // state = {
  //   paymentDescription: "",
  //   paymentComment: "",
  //   paymentSum: "",
  //   paymentReceiver: ""
  // };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log("Стейт из креате пеймент");
    // console.log(this.state);
    const payment = {
      paymentDescription: this.state.paymentDescription,
      paymentComment: this.state.paymentComment,
      paymentSum: this.state.paymentSum,
      paymentReceiver: this.state.paymentReceiver
    };
    this.props.createPayment(payment);
    this.props.fetchFirestorePayments();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Создание платежа</h2>
          <div>
            <label htmlFor="paymentDescription">Наименование:</label>
            <input
              type="text"
              name="paymentDescription"
              id="paymentDescription"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="paymentComment">Комментарий:</label>
            <input
              type="text-area"
              name="paymentComment"
              id="paymentComment"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="paymentSum">Сумма платежа:</label>
            <input
              type="text"
              name="paymentSum"
              id="paymentSum"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="paymentReceiver">Реквизиты платежа:</label>
            <input
              type="text"
              name="paymentReceiver"
              id="paymentReceiver"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Создать платеж</button>
        </form>
      </div>
    );
  }
}

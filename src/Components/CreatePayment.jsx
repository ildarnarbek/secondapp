import React, { Component } from "react";
import { connect } from "react-redux";
import { createPayment } from "../Store/paymentAction";

class CreatePayment extends Component {
  state = {
    paymentDescription: "",
    paymentComment: "",
    paymentSum: "",
    paymentReceiver: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    this.props.createPayment(this.state);
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

const mapDispatchToProps = dispatch => {
  return {
    createPayment: payment => dispatch(createPayment(payment))
  };
};

export default connect(null, mapDispatchToProps)(CreatePayment);

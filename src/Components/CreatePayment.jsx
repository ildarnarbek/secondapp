import React, { Component } from "react";
// import { connect } from "react-redux";
// import { createPayment } from "../Store/paymentAction";
// import { bindActionCreators } from "redux";

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
    // console.log(this.state);
    const payment = {
      paymentDescription: this.state.paymentDescription,
      paymentComment: this.state.paymentComment,
      paymentSum: this.state.paymentSum,
      paymentReceiver: this.state.paymentReceiver
    };
    this.props.createPayment(payment);
    // this.props.history.push("/");
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

// function mapStateToProps(state) {
//   //state.ReducerName.reducerProperty
//   return {
//     firestorePayments2: state.createPayment.payment
//   };
// }
// const matchDispatchToProps = {
//   createPayment: createPayment
// };

// export default connect(mapStateToProps, matchDispatchToProps)(CreatePayment);

import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
// Компонент bindActionCreators
import { connect, Provider } from "react-redux";

const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

// Относится Actons начало
// нужно будет импортировать const ACTION_CHANGE_FIRST_NAME
const changeFirstName = newFirstName => {
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  };
};

const changeSecondName = newSecondName => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName
  };
};
// Относится Actons конец
// Относится к Reduce начало
const initialState = {
  firstName: "Oleg",
  secondName: "Pavlov"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload };
    default:
      return state;
  }
};

// Относится к Reduce конец

const store = createStore(rootReducer);

// Относится к компоненту Начало
class MainComponent extends React.Component {
  render() {
    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName
    } = this.props;

    return (
      <div>
        <div>
          <input type="text" value={firstName} placeholder="First Name" />
          onChange =
          {event => {
            changeFirstName(event.target.value);
          }}
          }}
        </div>
        <div>
          <input
            type="text"
            value={secondName}
            placeholder="Second Name"
            onChange={event => {
              changeSecondName(event.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // из Store (initialState) firstName пападет в props для MainComponent (firstName: "Oleg")
    // в поле input отобразиться Oleg
    firstName: state.firstName,
    secondName: state.secondName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // в наш пропс заносится changeFirstName
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};
// Относится к компоненту конец

const WrappedMainComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);

ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  document.getElementById("root")
);

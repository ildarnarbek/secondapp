import React from "react";
import ReactDOM from "react-dom";
// createStore - функция позволяющая созать хранилище Store
// bindActionCreators - скорее всего привязывает к компоненту экшн криэйторы (const changeFirstName = (newFirstName))
import { createStore, bindActionCreators } from "redux";
// connect подключает react компоненты к Store
// Provider необходим для того чтобы обернуть компонент и передать в него store
import { connect, Provider } from "react-redux";

// создадим исходное состояние initialState
const initialState = {
  firstName: "Oleg",
  secondName: "Pavlov"
};
// создадим действие
// Создадим идентификатор события

const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
//  удаляем экшн после создания функции для диспатча
// Действие это объект в нем есть type и payload, через него добавляются данные  в store

// const actionChangeFirstName = {
//     type: ACTION_CHANGE_FIRST_NAME,
//     payload: ...
// };
// Удаляем экшн после создания changeFirstName = (newFirstName) ..

// аналогично с фамилией

// Добавим действие для изменения фамилии
const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";
// const actionChangeSecondName = {
//     type: ACTION_CHANGE_SECOND_NAME,
//     payload: ...
// };

// Экшены должны передаваться в dispatch через прослойку, создадим прослойку
// Это функция в которое передается одно значение, функция будет возвращать объект который будет деспатчится
const changeFirstName = newFirstName => {
  return {
    // копируем из экшена параметры и удаляем экшн
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  };
};

// eslint-disable-next-line no-unused-vars
const changeSecondName = newSecondName => {
  return {
    // копируем из экшена параметры и удаляем экшн
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName
  };
};

// создадим корневой reducer
// reducer принимает в себя исходное состояние state
// первое состояние берется из initialState
// reducer принимает в себя действие action
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

// Создадим Store в нем хранится все данные
// В параметры createStore необходимо передать reducers
// передадим в createStore редюсер
const store = createStore(rootReducer);

class MainComponent extends React.Component {
  render() {
    //   сохраним метод dispatch в отдельную переменную, чтобы можно было вызвать в шаблоне
    // const dispatch = this.props.dispatch
    // удалим метод диспатч после привязки mapStateToProps
    // в новой версии можно разбить дуструктурировать пропс
    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName
    } = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            // при добавлении value={this.props.firstName} в поле отобразится Oleg
            //   value={this.props.firstName}
            //   после деструктуризации props value= {firstName}
            value={firstName}
            placeholder="First Name"
          />
          {/* мы хотим диспатчить actionChangefirstName, но передавать нужно через функцию*/}
          {/* onChange = {()=>{
              dispatch(actionChangeFirstName); стало после добавления функции */}
          {/* Новое имя в функции changeFirstName получает с помощью параметра event */}
          {/* после введения mapDispatchToProps удаляем => {dispatch ..} */}
          onChange =
          {event => {
            changeFirstName(event.target.value);
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

// Необходимо подключить компонент к Store с помощью метода connect
// connect принимает в себя несколько аргументов и выплевывает функцию в которую нужно пережать компонент
// Создадим новый объект-обертку
// Во вторую скобку передаем класс компонента
// В первую скобку нужно передать 2 функции
// 1 функция должна вытащить из Store необходимые данные и передать в пропс компонента
// создадим 1 функцию, она записывает данные из state в пропсы компонента, принимает 1 параметр state целиком
// в return указаны передаваемые пропс
const mapStateToProps = state => {
  return {
    // из Store (initialState) firstName пападет в props для MainComponent (firstName: "Oleg")
    // в поле input отобразиться Oleg
    firstName: state.firstName,
    secondName: state.secondName
  };
};
// 2 функция нужна для диспатча
// Функция добавляет экшены в пропсы,  аргумент dispatch
// метод возвращает объект с перечислением функци которые хотим привязать к объекту
const mapDispatchToProps = dispatch => {
  return {
    // в наш пропс заносится changeFirstName
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};

const WrappedMainComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);

// было
// ReactDOM.render(<MainComponent />, document.getElementById("root"));
// Обернем компонент в провайдер
// В провайдер передаем props , в пропс передаем store
// было <Provider store={store}> <MainComponent />  </Provider>
ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  document.getElementById("root")
);

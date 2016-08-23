import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {add, toggleAddForm} from '../ducks/personal';
import AddPersonal from './Personal/AddPersonal';
import styles from './Personal.scss';

class Personal extends PureComponent {
  addPersonal () {
    const { dispatch } = this.props;
    return (fields) => {
      dispatch(add(fields));
      dispatch(toggleAddForm());
    };
  }
  
  showAddForm () {
    const { dispatch } = this.props;
    return e => {
      dispatch(toggleAddForm());
    };
  }
  
  render() {
    const {personal, adding} = this.props;
    return <div>
      <h1 className={styles.title}>Personal</h1>
      <ul>
      {personal.map((person,idx) => (
        <li key={idx}>{person.name} - {person.time} minutos</li>
      ))}
      </ul>
      { !adding &&
        <div className="form-group">
          <button className="btn btn-primary pull-right" onClick={this.showAddForm()}>
            Agregar
          </button>
        </div>
      }
      { adding && <AddPersonal onSubmit={this.addPersonal()} />}
    </div>
  }
};

export default connect(({personal})=>({
  personal: personal.get('personal'),
  adding: personal.get('adding'),
}))(Personal);

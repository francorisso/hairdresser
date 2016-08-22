import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {add, toggleAddForm} from '../ducks/services';
import AddService from './Services/AddService';

class Services extends PureComponent {
  addService () {
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
    const {services, adding} = this.props;
    return <div>
      <h1>Servicios</h1>
      <ul>
      {services.map((service,idx) => (
        <li key={idx}>{service.name} - {service.time} minutos</li>
      ))}
      </ul>
      { !adding &&
        <div className="form-group">
          <button className="btn btn-primary pull-right" onClick={this.showAddForm()}>
            Agregar
          </button>
        </div>
      }
      { adding && <AddService onSubmit={this.addService()} />}
    </div>
  }
};

export default connect(({services})=>({
  services: services.get('services'),
  adding: services.get('adding'),
}))(Services);

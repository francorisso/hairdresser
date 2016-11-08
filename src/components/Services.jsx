import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { add, get, toggleAddForm } from '../ducks/services';
import AddService from './Services/AddService';

class Services extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(get());
  }

  componentWillUnmount() {
    const { dispatch, adding } = this.props;
    if (adding) {
      dispatch(toggleAddForm());
    }
  }

  addService() {
    const { dispatch } = this.props;
    return (fields) => {
      dispatch(add(fields));
      dispatch(toggleAddForm());
    };
  }

  showAddForm() {
    const { dispatch } = this.props;
    return () => {
      dispatch(toggleAddForm());
    };
  }

  render() {
    const { servicesIds, serviceEntities, adding } = this.props;
    const services = servicesIds.map(serviceId => (serviceEntities[serviceId]));
    return (<div>
      <h1>Services</h1>
      <ul>
        { services.map((service, idx) => (
          <li key={idx}>{service.name} - {service.time} minutes</li>
        )) }
      </ul>
      { !adding &&
        <div className="form-group">
          <button className="btn btn-primary pull-right" onClick={this.showAddForm()}>
            Agregar
          </button>
        </div>
      }
      { adding && <AddService onSubmit={this.addService()} />}
    </div>);
  }
}

export default connect(({ entities, services }) => ({
  serviceEntities: entities.get('service'),
  servicesIds: services.get('services'),
  adding: services.get('adding'),
}))(Services);

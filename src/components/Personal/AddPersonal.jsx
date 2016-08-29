import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {add, toggleAddForm} from '../../ducks/personal';

function onSubmit (fields, dispatch) {
  return dispatch(add(fields))
    .then(result => {dispatch(toggleAddForm())});
}

const Checkbox = ({input, meta, label}) => (
  <div className="checkbox">
    <label>
      <input type="checkbox" {...input} /> {label}
    </label>
  </div>
);

const TextField = ({input, meta}) => (
  <div className="form-group">
    <label>{input.placeholder}</label>
    <input className="form-control" {...input} />
  </div>
);

let AddPersonal = (props) => {
  const {services, handleSubmit, pristine, submitting} = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field name="name" component={TextField} placeholder="Name" />
      <div className="form-group">
        <label>Servicios</label>
        {services.map((service, idx) => (
          <Field name={ `services_${service.id}` }
            type="checkbox"
            component={Checkbox}
            label={service.name}
            key={idx} />
        ))}
      </div>
      <div className="form-group">
        <button className="btn btn-success" disabled={pristine || submitting}>Guardar</button>
      </div>
    </form>
  );
}

AddPersonal = reduxForm({
  form: 'addPersonalForm'
})(AddPersonal);

AddPersonal = connect(
  ({services}) => ({
    services: services.get('services'),
  })
)(AddPersonal);

export default AddPersonal;

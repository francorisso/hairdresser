import React, {Component} from 'react';
import {connect} from 'react-redux';
import {save} from '../ducks/settings';

class Settings extends Component {
  fields= {};
   
  onSubmit () {
    const {dispatch} = this.props;
    return e => {
      e.preventDefault();
      const fields = [];
      for (let field in this.fields) {
        fields[field] = this.fields[field].value;
      }
      dispatch(save(fields));
    };
  }
  
  nameField (field, ref) {
    return this.fields[field] = ref;
  }
  
  render() {
    const {name, address} = this.props;
    return <div>
      <h1>Configuracion</h1>
      <form onSubmit={this.onSubmit()}>
        <div className="form-group">
          <label>Nombre del comercio</label>
          <input className="form-control" defaultValue={name} ref={c => this.nameField('name', c)} />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <input className="form-control" defaultValue={address} ref={c => this.nameField('address', c)} />
        </div>
        <div className="form-group">
          <label>Horarios</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>Fechas especiales de cierre</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  }
};

export default connect(({settings})=>({
  name: settings.get('name'),
  address: settings.get('address'),
}))(Settings);

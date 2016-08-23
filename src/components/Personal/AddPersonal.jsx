import React, {PureComponent, PropTypes} from 'react';

export default class AddPersonal extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
  fields= {};
  
  onSubmit () {
    const {dispatch, onSubmit} = this.props;
    return e => {
      e.preventDefault();
      const fields = [];
      for (let field in this.fields) {
        fields[field] = this.fields[field].value;
      }
      onSubmit(fields);
    };
  }
  
  nameField (field, ref) {
    return this.fields[field] = ref;
  }
  
  render() {
    const {adding} = this.props;
    return <form onSubmit={this.onSubmit()}>
      <div className="form-group">
        <label>Nombre</label>
        <input className="form-control" ref={c => this.nameField('name', c)} />
      </div>
      <div className="form-group">
        <label>Categorias</label>
        <input className="form-control" ref={c => this.nameField('time', c)} />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Guardar</button>
      </div>
    </form>
  }
};

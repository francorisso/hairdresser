import React, { PureComponent, PropTypes } from 'react';

export default class AddService extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  onSubmit() {
    const { onSubmit } = this.props;
    return (e) => {
      e.preventDefault();
      const fields = [];
      for (const field in this.fields) {
        fields[field] = this.fields[field].value;
      }
      onSubmit(fields);
    };
  }

  nameField(field, ref) {
    this.fields[field] = ref;
  }

  fields = {}

  render() {
    return (<form onSubmit={this.onSubmit()}>
      <div className="form-group">
        <label>Nombre</label>
        <input className="form-control" ref={c => this.nameField('name', c)} />
      </div>
      <div className="form-group">
        <label>Tiempo</label>
        <input className="form-control" ref={c => this.nameField('time', c)} />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Guardar</button>
      </div>
    </form>);
  }
}

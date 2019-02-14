import AutoForm from "react-auto-form";
import React, { Component } from "react";

class UpdateForm extends React.Component {
    state = {
        lastOnChange: null,
        lastOnSubmit: null,
    }
  _onChange = (event, name, data, change) => {
    this.setState({ lastOnChange: { name, data, change } });
  };

  _onSubmit = (event, data) => {
    this.setState({ lastOnSubmit: { data } });
    e.preventDefault();
  };

  render() {
      console.log(this.state.lastOnSubmit);
      console.log(this.state.lastOnChange);
    return (
      <AutoForm
        onChange={this._onChange}
        onSubmit={this._onSubmit}
      >
      <div className="form-field">
            <label>Skills:</label><br/>
            <label><input type="checkbox" name="skills" value="weight-lifting"/> Weight-Lifting</label><br/>
            <label><input type="checkbox" name="skills" value="jogging" defaultChecked/> Jogging</label><br/>
            <label><input type="checkbox" name="skills" value="wrestling" defaultChecked/> Wrestling </label><br/>
          </div>
        {/* ...form inputs... */}
        <button>Submit</button>
      </AutoForm>
    );
  }
}

export default UpdateForm;

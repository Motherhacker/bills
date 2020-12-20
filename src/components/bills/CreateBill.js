import React from "react";
import { createBill } from "../../actions";
import BillForm from "./BillForm";
import { connect } from "react-redux";

class CreateBill extends React.Component {
  onSubmit = (formValues) => {
    this.props.createBill(formValues);
  };

  render() {
    return (
      <div>
        <h3>Add a Bill</h3>
        <BillForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createBill })(CreateBill);

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchBill, editBill } from "../../actions";
import BillForm from "./BillForm";

class EditBill extends React.Component {
  componentDidMount() {
    this.props.fetchBill(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editBill(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.bill) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a bill</h3>
        <BillForm
          initialValues={_.pick(this.props.bill, "company", "amount", "payed")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { bill: state.bills[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchBill, editBill })(EditBill);

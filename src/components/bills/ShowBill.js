import React from "react";
import { connect } from "react-redux";
import { fetchBill } from "../../actions";

class ShowBill extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchBill(id);
  }

  render() {
    if (!this.props.bill) {
      return <div>Loading...</div>;
    }

    const { id, company, amount, userId, payed } = this.props.bill;

    return (
      <div>
        {id} {company} {amount} {payed ? "true" : "false"} {userId}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { bill: state.bills[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchBill })(ShowBill);

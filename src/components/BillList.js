import React from "react";
import { connect } from "react-redux";
import { fetchBills, deleteBill } from "../actions";
import { Link } from "react-router-dom";

class BillList extends React.Component {
  renderList() {
    return this.props.bills.map((bill) => {
      return (
        <div className="item" key={bill.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/bills/${bill.id}`} className="header">
              {bill.company}
            </Link>
            <div className="description">{bill.amount}</div>
            <button
              className="ui button"
              onClick={() => this.props.deleteBill(bill.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Bills</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bills: Object.values(state.bills).filter((item) => item.length !== 0),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchBills, deleteBill })(BillList);

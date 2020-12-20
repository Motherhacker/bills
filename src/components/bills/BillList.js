import React from "react";
import { connect } from "react-redux";
import { fetchBills, deleteBill } from "../../actions";
import { Link } from "react-router-dom";

class BillList extends React.Component {
  componentDidMount() {
    this.props.fetchBills();
  }

  renderList() {
    const renderedRows = this.props.bills.map((bill) => {
      return (
        <tr key={bill.id}>
          <td className="single line">&nbsp;</td>
          <td className="single line">
            <Link to={`/bills/${bill.id}`} className="header">
              {bill.company}
            </Link>
          </td>
          <td className="single line">{bill.amount}</td>
          <td className="single line">{bill.payed ? "yes" : "no"}</td>
          <td className="single line">
            <Link to={`/bills/edit/${bill.id}`} className="ui button primary">
              Edit
            </Link>
            <button
              className="ui button"
              onClick={() => this.props.deleteBill(bill.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <table className="ui celled padded table">
        <thead>
          <tr>
            <th className="single line">Date</th>
            <th>Company</th>
            <th>Amount</th>
            <th>Payed</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    );
  }

  render() {
    const addButton = this.props.isSignedIn ? (
      <Link to="/add">
        <button className="ui primary button">Add bill</button>
      </Link>
    ) : (
      ""
    );

    return (
      <div>
        <div className="ui celled list">{this.renderList()}</div>
        {addButton}
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

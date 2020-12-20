import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class BillForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="company" component={this.renderInput} label="Company" />
        <Field name="amount" component={this.renderInput} label="Amount" />
        <div className="field">
          <label htmlFor="payed">Payed</label>
          <div>
            <Field name="payed" id="payed" component="input" type="checkbox" />
          </div>
        </div>

        <button
          className="ui button primary"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Submit
        </button>
        <Link to="/">
          <button className="ui button">Cancel</button>
        </Link>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  const isNumber = (str) => {
    var pattern = /^\d+$/;
    return pattern.test(str);
  };

  if (!formValues.company) {
    errors.company = "Company name is required";
  }

  if (!formValues.amount) {
    errors.amount = "Amount name is required";
  } else {
    if (!isNumber(formValues.amount)) {
      errors.amount = "Amount should be numeric";
    }
  }

  return errors;
};

export default reduxForm({
  form: "billForm",
  validate,
})(BillForm);

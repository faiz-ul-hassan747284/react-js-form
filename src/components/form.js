import React from "react";
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      fullNameLabel: "",
      userName: "",
      userNameLabel: "",
      email: "",
      emailLabel: "",
      dateOfBirth: "",
      dateOfBirthLabel: "",
      mobileNumber: "",
      mobileNumberLabel: "",
      gender: "",
      genderLabel: "",
      country: "",
      countryLabel: ""
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.fullNameLabel}</p>
        <input
          type="text"
          value={this.state.fullName}
          onChange={this.handleFullNameChange.bind(this)}
          placeholder="Full Name"
        />
        <p>{this.state.userNameLabel}</p>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleUsernameChange.bind(this)}
          placeholder="User Name"
        />
        <p>{this.state.mobileNumberLabel}</p>
        <input
          type="text"
          value={this.state.mobileNumber}
          onChange={this.handleContactChange.bind(this)}
          placeholder="Contact Number"
        />
        <p>{this.state.emailLabel}</p>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange.bind(this)}
          placeholder="Email"
        />
        <p>{this.state.dateOfBirthLabel}</p>
        <input
          type="date"
          value={this.state.dateOfBirth}
          onChange={this.handleDateOfBirthChange.bind(this)}
          placeholder="dd/mm/yyyy     Date of Birth"
        />
        <p>{this.state.genderLabel}</p>
        <select onChange={this.handleGenderChange.bind(this)}>
          <option hidden disabled selected value>
            {" "}
            -- select an option --{" "}
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        <p>{this.state.countryLabel}</p>
        <input
          placeholder="Country"
          value={this.state.country}
          onChange={this.handleCountryChange.bind(this)}
          type="text"
        />
        <br />
        <input type="button" value="submit" />
      </div>
    );
  }
  handleFullNameChange(e) {
    if (e.target.value.length >= 6) {
      this.setState({ fullNameLabel: "", fullName: e.target.value });
    } else {
      this.setState({
        fullName: e.target.value,
        fullNameLabel: "Full Name should be more than 6 characters"
      });
    }
  }
  handleUsernameChange(e) {
    const tempUserName = e.target.value;
    if (/\s/.test(tempUserName)) {
      this.setState({
        userName: tempUserName,
        userNameLabel: "Username must not have any spaces"
      });
    } else {
      this.setState({ userName: tempUserName, userNameLabel: "" });
    }
  }
  handleContactChange(e) {
    const tempContact = e.target.value;
    if (tempContact.match(/^[-+]?[0-9]+$/)) {
      this.setState({ mobileNumber: tempContact, mobileNumberLabel: "" });
    } else {
      this.setState({
        mobileNumber: tempContact,
        mobileNumberLabel: "Contact Number must be all numbers"
      });
    }
  }
  handleEmailChange(e) {
    const tempEmail = e.target.value;
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        tempEmail
      )
    ) {
      this.setState({ email: tempEmail, emailLabel: "" });
    } else {
      this.setState({ email: tempEmail, emailLabel: "Invalid Email" });
    }
  }
  handleDateOfBirthChange(e) {
    const tempDOB = e.target.value;

    if (this.getAge(tempDOB) >= 15) {
      this.setState({ dateOfBirth: tempDOB, dateOfBirthLabel: "" });
    } else {
      this.setState({
        dateOfBirth: tempDOB,
        dateOfBirthLabel: "Age Must be bigger than 15 years"
      });
    }
  }
  getAge(dateString) {
    const today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  handleGenderChange(e) {
    this.setState({ gender: e.target.value, genderLabel: "verifying" });
    this.verification();
  }
  handleCountryChange(e) {
    this.setState({ country: e.target.value, countryLabel: "verifying" });
    this.verification();
  }
  verification() {
    setTimeout(() => {
      this.setState({ genderLabel: "", countryLabel: "" });
    }, 5000);
  }
}
export default InputForm;

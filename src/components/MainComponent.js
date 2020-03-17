import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import Slider from "react-rangeslider";
import PasswordStrengthBar from "react-password-strength-bar";

import "react-rangeslider/lib/index.css";

function Main() {
  const [password, setPassword] = useState("!Password123");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLowercase, setincludeLowercase] = useState(true);

  function handleIncludeLowerCaseChange() {
    setincludeLowercase(!includeLowercase);
  }

  function handlePasswordLengthChange(value) {
    setPasswordLength(value);
  }

  return (
    <div id="pwdCard">
      <h2>QuickPass</h2>
      <p>Generate Secure Passwords Quickly</p>
      <input id="passwordField" type="text" value={password} />
      <br />
      <PasswordStrengthBar password={password} />
      <Slider
        min={3}
        max={30}
        value={passwordLength}
        orientation="horizontal"
        onChange={handlePasswordLengthChange}
      />
      <p>Password Length : {passwordLength}</p>
      <p>Characters to Include:</p>
      
      <div className="layoutGrid">
        <span>Lowercase</span>
        <Switch
          checked={includeLowercase}
          onChange={handleIncludeLowerCaseChange}
          onColor="#fff"
          onHandleColor="#2693e6"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        <span>Uppercase</span>
        <Switch
          checked={includeLowercase}
          onChange={handleIncludeLowerCaseChange}
          onColor="#fff"
          onHandleColor="#2693e6"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        <span>Numbers</span>
        <Switch
          checked={includeLowercase}
          onChange={handleIncludeLowerCaseChange}
          onColor="#fff"
          onHandleColor="#2693e6"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        <span>Symbols</span>
        <Switch
          checked={includeLowercase}
          onChange={handleIncludeLowerCaseChange}
          onColor="#fff"
          onHandleColor="#2693e6"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        <br />
        <button id="btnGenerate">Generate New</button>
        <button id="btnCopy">Copy to Clipboard</button>
      </div>
    </div>
  );
}

export default Main;

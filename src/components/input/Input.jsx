/**
 *
 * A component that renders an input field with an icon, which appears when the user clicks on it.
 * @param {Object} props - The props object for the InputField component.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.value - The value of the input field.
 * @param {Function} props.setValue - The function to be called when the value of the input field changes.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.maxLength - The maximum length of the input field.
 * @param {string} props.type - The type of the input field.
 */

import SearchIcon from "../../assets/images/search-icon.svg";
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./input.scss";

const InputField = ({
  placeholder,
  value,
  setValue,
  name = "",
  maxLength = "30",
  type = "text",
  ...props
}) => {
  const [showField, setShowField] = useState(false);
  const inputRef = useRef(null);

  /**
   *
   * Function to toggle the showField state on clicking the icon.
   */

  const iconClickHandle = () => {
    setShowField((prevVal) => !prevVal);
  };

  /**
   *
   * Function to set the showField state to false on blur event of the input field.
   */
  const onBlurHandle = () => {
    setShowField(false);
  };

  /**
   *
   * Effect to set focus on the input field when the showField state is true.
   */

  useEffect(() => {
    if (showField) inputRef.current.focus();
  }, [showField]);

  return (
    <div className="input">
      {showField && (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          className={`input__field ${showField ? "input__focus" : ""}`}
          onBlur={onBlurHandle}
          ref={inputRef}
          {...props}
        />
      )}
      <img
        src={SearchIcon}
        alt="Search Icon"
        className={`input__field ${showField ? "input__focus" : ""}`}
        onClick={iconClickHandle}
      />
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string,
  maxLength: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;

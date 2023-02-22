import React from "react";
import PropTypes from "prop-types";
import "./select.scss";

/**
 * A React component that renders a select element.
 *
 * @component
 *
 * @param {object} props - The props object for the Select component.
 * @param {string} props.value - The current value of the select element.
 * @param {function} props.setValue - The function to update the value of the select element.
 * @param {array} props.options - The array of options to display in the select element.
 * @param {string} props.options[].label - The label to display for the option.
 * @param {string|number} props.options[].value - The value of the option.
 *
 * @return {JSX.Element} The Select component.
 *
 * @example
 *
 * <Select
 *   value={selectedOption}
 *   setValue={setSelectedOption}
 *   options={[
 *     { label: "Option 1", value: "option1" },
 *     { label: "Option 2", value: "option2" },
 *   ]}
 * />
 */

const Select = ({ value, setValue, options }) => {
  return (
    <div className="select">
      <select
        className="select__input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {options.map((option, id) => (
          <option value={option.value} className="selection__option" key={id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default Select;

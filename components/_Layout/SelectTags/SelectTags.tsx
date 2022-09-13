import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Select, { GroupBase, StylesConfig } from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

interface SelectTagsProps extends StateManagerProps {
  //
}

const selectStyles:
  | StylesConfig<unknown, boolean, GroupBase<unknown>>
  | undefined = {
  input: (base) => ({
    ...base,
    color: "white",
  }),
  control: (base) => ({
    ...base,
    boxShadow: "none",
    padding: "0.125rem 1rem",
    borderRadius: "50rem",
    color: "white",
    borderColor: "#00a19a",
    background: "#18191a",
    "&:hover": {
      borderColor: "#00a19a",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  placeholder: (base) => ({
    ...base,
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    zIndex: "100",
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    background: isFocused ? "#00a19a" : isSelected ? "#00a19a" : undefined,
    zIndex: 1,
    color: "#18191a",
    "&:hover": {
      background: "#99d9d7",
    },
  }),
};

const SelectTags: React.FC<SelectTagsProps> = ({ ...props }) => {
  const [options, setOptions] = useState<string[]>([]);

  return (
    <Select
      className="basic-select"
      styles={selectStyles}
      noOptionsMessage={() => <>No tokens found</>}
      loadingMessage={() => <>Loading tokens...</>}
      classNamePrefix="react-select-token"
      isMulti
      isClearable
      maxMenuHeight={410}
      {...props}
    />
  );
};

SelectTags.propTypes = {
  //
};

export default SelectTags;

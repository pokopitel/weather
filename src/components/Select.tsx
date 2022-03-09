import { useTheme } from "@chakra-ui/react";

import ReactSelect, { StylesConfig } from "react-select";

type SelectProps = {
  options: string[];
};

export const Select = ({ options }: SelectProps) => {
  const theme = useTheme();

  const purple = theme.colors.purple[200];
  const black = theme.colors.black;
  const purpleLight = theme.colors.purple[50];
  const heather = theme.colors.purple[100];
  const white = theme.colors.white;

  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      background: purple,
      textAlign: "center",
      height: 46,
      border: "none",
      boxShadow: "none",
      borderRadius: "0 0 10px 10px",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 0,
    }),
    menuList: (provided) => ({
      ...provided,
      color: black,
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: white,
      fontWeight: 600,
    }),
    option: (provided, state) => ({
      ...provided,
      textAlign: "center",
      background: state.isSelected ? purple : white,
      "&:hover": {
        background: purpleLight,
      },
      "&:active": {
        background: heather,
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      fontWeight: 600,
      color: white,
    }),
  };

  return (
    <ReactSelect
      options={options.map((item) => ({ value: item, label: item }))}
      styles={customStyles}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
    />
  );
};

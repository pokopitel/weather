import { useTheme } from "@chakra-ui/react";

import ReactSelect, { StylesConfig } from "react-select";

type SelectProps = {
  options: string[];
};

export const Select = ({ options }: SelectProps) => {
  const theme = useTheme();

  const selectedOptionBg = theme.colors.purple[200];
  const notSelectedOptionBg = theme.colors.white;
  const optionFontColor = theme.colors.black;
  const hoverOptionBg = theme.colors.purple[50];
  const activeOptionBg = theme.colors.purple[100];
  const placeHolderColor = theme.colors.white;

  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      background: selectedOptionBg,
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
      color: optionFontColor,
      padding: 0,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: notSelectedOptionBg,
      fontWeight: 600,
    }),
    option: (provided, state) => ({
      ...provided,
      textAlign: "center",
      background: state.isSelected ? selectedOptionBg : notSelectedOptionBg,
      "&:hover": {
        background: hoverOptionBg,
      },
      "&:active": {
        background: activeOptionBg,
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      fontWeight: 600,
      color: placeHolderColor,
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

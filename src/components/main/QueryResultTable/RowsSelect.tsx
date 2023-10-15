import React from "react";
type TValues = {
  value: number;
  name: string;
};
interface IRowsSelect {
  options: TValues[];
  value: number;
  onChange: (value: number) => void;
}
const RowsSelect = ({ options, value, onChange }: IRowsSelect) => {
  return (
    <select
      value={value}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(event.target.value)
      }
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default RowsSelect;

import { Dosen, Matkul, Room } from "@/types/type";
import React from "react";
import InputField from "./inputField";

interface ArrayFieldProps {
  label: string;
  values: (Room | Dosen | Matkul | string)[] | string;
  onChange: (value: string, index: number) => void;
}

const ArrayField: React.FC<ArrayFieldProps> = ({ label, values, onChange }) => {
  if (Array.isArray(values)) {
    return (
      <div className="flex gap-2">
        {values.map((value, index) => (
          <InputField
            key={index}
            label={label}
            value={typeof value === "string" ? value : value.name}
            onChange={(e) => onChange(e.target.value, index)}
          />
        ))}
      </div>
    );
  } else {
    return (
      <InputField
        label={label}
        value={values}
        onChange={(e) => onChange(e.target.value, 0)}
      />
    );
  }
};

export default ArrayField;

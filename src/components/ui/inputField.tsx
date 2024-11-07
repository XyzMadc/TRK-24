import { InputFieldProps } from "@/types/type";

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 bg-black text-gray-200 border border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;

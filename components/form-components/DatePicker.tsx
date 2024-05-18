import InputGroup from "./inputGroup";

interface DatePickerProps { 
  id: string;
  label: string;
  placeholder: string;
  name: string;
  required: boolean;
}

export default function DatePicker({ id, label, placeholder, name, required }: DatePickerProps) { 

  return (
    <InputGroup
      id={id}
      label={label}
      type="date"
      placeholder={placeholder}
      name={name}
      required={required}
    />
  )
}
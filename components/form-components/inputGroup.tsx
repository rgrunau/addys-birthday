interface InputGroupProps { 
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required: boolean;
}

export default function InputGroup({ label, type, placeholder,required }: InputGroupProps) { 

  return (
    <div className="flex flex-col space-y-2">
      <div className="p-4">
        <label className="text-center">{ label}</label>
      </div>
      <div>
        <input type={type}
          className="w-full bg-gray-100 p-4 h-[40px] border-b-2 border-slate-500/50
          focus:outline-0 focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-2 focus:ring-offset-slate-500/50"
          placeholder={placeholder}
          name="name"
          required={required}
        />
      </div>
    </div>
  )
}
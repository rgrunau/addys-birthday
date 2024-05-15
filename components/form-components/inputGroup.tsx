interface InputGroupProps { 
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

export default function InputGroup({ label, type, placeholder }: InputGroupProps) { 

  return (
    <div className="flex flex-col space-y-2">
      <div className="">
        <label className="text-center">{ label}</label>
      </div>
      <div>
        <input type={type}
          className="w-full bg-gray-100 p-4 h-[40px] rounded-lg"
          placeholder={placeholder}
          name="name"
        />
      </div>
    </div>
  )
}
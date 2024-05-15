
interface TextAreaProps {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  required: boolean;
}



export default function TextArea({ id, label, placeholder, name, required }: TextAreaProps) { 


  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-lg">{label}</label>
      <textarea
        id={id}
        className="w-full h-40 p-2 rounded-lg border-2 border-slate-500/45 resize-none focus:outline-none focus:border-slate-700/45"
        placeholder={placeholder}
        name={name}
        required={required}
      ></textarea>
    </div>
  );
}
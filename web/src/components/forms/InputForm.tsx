"use client";
export default function InputForm({ label, type, name, value, placeholder, required}: 
  { label: string, type: string, name: string, value?: string, placeholder?: string, required?: boolean}) 
{

  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold">{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        className="p-2 text-black border rounded-md"
      />
    </div>
  );
}
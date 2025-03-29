import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Import eye icons for visibility toggle

export function InputBox({ label, placeholder, onChange,value ,type = "text"}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password"; // Check if it's a password field

  return (
    <div className="my-2 relative">
      <div className="text-lg  font-medium text-left py-2">{label}</div>
      <div className="relative">
        <input
          type={isPassword && !showPassword ? "password" : "text"}
          onChange={onChange}
          placeholder={placeholder}
          value={value? value:""}
          className="w-full px-2 py-1 border rounded border-slate-200 pr-10"
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}

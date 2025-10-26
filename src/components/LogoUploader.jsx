import React, { useRef, useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";

export default function LogoUploader({ onChange }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (files) => {
    const file = files && files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result;
      if (typeof onChange === "function" && typeof dataUrl === "string") {
        onChange(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={`group relative rounded-2xl border p-3 shadow-lg transition ${
          dragOver ? "border-[#1E5631] bg-[#F4EAD5]" : "border-emerald-900/10 bg-white/80 backdrop-blur"
        }`}
      >
        <button
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-xl bg-[#1E5631] px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95"
          aria-label="Upload Logo"
        >
          <Upload className="h-4 w-4" /> Upload Logo
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div className="pointer-events-none mt-2 flex items-center gap-2 text-[11px] text-gray-600">
          <ImageIcon className="h-3.5 w-3.5" /> Drag & drop here
        </div>
      </div>
    </div>
  );
}

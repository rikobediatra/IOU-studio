"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, Image as ImageIcon, Trash2 } from "lucide-react";

export default function CustomImageUploader() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // HANDLE FILE
  const handleFile = (file) => {
    if (!file) return;

    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  // DROP
  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  // DELETE
  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="w-full space-y-4 p-6 border border-[#DDDDDD] rounded-[24px]">
      {/* DROP AREA */}
      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="w-full h-60 border border-dashed border-neutral-300 rounded-2xl 
        flex flex-col items-center justify-center text-center cursor-pointer 
        hover:bg-neutral-50 transition"
      >
        {!preview ? (
          <>
            <ImageIcon className="w-10 h-10 opacity-60" />
            <p className="text-lg font-normal mt-6 normal-case">Import Image File</p>
            <p className="text-base font-normal normal-case opacity-60">
              Drop file or click here to choose file.
            </p>
          </>
        ) : (
          <>
            <div className="relative w-52 h-36 rounded-md overflow-hidden shadow-md">
              <Image src={preview} alt="Preview" fill className="object-cover" unoptimized/>
            </div>
            <p className="text-base font-normal normal-case opacity-60">
              Click here to change file.
            </p>
          </>
        )}
      </div>

      {/* HIDDEN INPUT */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

      {/* ACTION BUTTONS */}
      <div className="flex justify-between items-center gap-2">
        {/* DELETE */}
        <button
          onClick={handleRemove}
          disabled={!file}
          className="w-full h-10.5 normal-case px-6 py-3
          rounded-full border border-[#496C6F]
          text-sm opacity-40 cursor-pointer
        hover:text-red-800 hover:border-red-800 hover:opacity-100 transition disabled:opacity-30 disabled:border-none"
        >
          Delete Image
        </button>

        {/* UPLOAD */}
        <button
          className="w-full h-10.5 normal-case px-6 py-3
          rounded-full border border-[#496C6F]
          text-sm opacity-40 cursor-pointer
        hover:bg-[#496C6F] hover:text-white hover:opacity-100 transition"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
}

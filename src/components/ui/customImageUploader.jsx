"use client";

import imageCompression from "browser-image-compression";

import { Image as ImageIcon } from "lucide-react";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { cn } from "@/lib/utils";
import { useNotification } from "@/context/NotificationContext";

export default function CustomImageUploader({ name }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Uploader field={field} />}
    />
  );
}

function Uploader({ field }) {
  const MAX_SIZE = 5 * 1024 * 1024;
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [uploaded, setUploaded] = useState(null);
  const [error, setError] = useState(false);

  const { notifyError } = useNotification();

  useEffect(() => {
    const setDataFile = () => {
      if (field.value?.url) {
        setPreview(field.value.url);
        setUploaded(field.value);
        return;
      }

      setPreview(null);
      setUploaded(null);
    }


    setDataFile();
  }, [field.value]);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // PREPARE LOCAL FILE WITHOUT UPLOAD
  const prepareLocalFile = async (file) => {
    const options = {
      maxSizeMB: 4,
      maxWidthOrHeight: 2560,
      useWebWorker: true,
      initialQuality: 0.8,
    };

    let finalFile = file;
    if (file.size > 4 * 1024 * 1024) {
      finalFile = await imageCompression(file, options);
    }

    const nextPreview = URL.createObjectURL(finalFile);
    field.onChange({
      file: finalFile,
      url: nextPreview,
      public_id: "",
    });
    setUploaded({
      file: finalFile,
      url: nextPreview,
      public_id: "",
    });
    setPreview(nextPreview);
    setError(false);
  };

  // HANDLE FILE
  const handleFile = async (file) => {
    if (!file) return;

    if (file.size > MAX_SIZE) {
      return setError(true);
    }

    try {
      await prepareLocalFile(file);
    } catch (error) {
      notifyError("Failed to process image. Please try another file.");
    }
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
    field.onChange(null);
    setPreview(null);
    setUploaded(null);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  // ACTIVE STATE BUTTON UPLOAD
  const activeState = () => {
    if (preview) {
      return "bg-[#496C6F] text-white opacity-100 hover:font-medium";
    }
    return "";
  };

  return (
    <div className="w-full space-y-4 p-6 border border-[#DDDDDD] rounded-[24px]">
      {/* DROP AREA */}
      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={cn(
          "w-full h-60 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition",
          error
            ? "border border-dashed border-[#E92323] text-[#E92323]"
            : "border border-dashed border-neutral-300",
        )}
      >
        {!preview ? (
          <>
            <ImageIcon className="w-10 h-10 opacity-60" />
            <p className="text-lg font-normal mt-6 normal-case">
              Import Image File
            </p>
            <p className="text-base font-normal normal-case opacity-60">
              Drop file or click here to choose file.
            </p>
            {error && (
              <p className="text-base font-normal normal-case opacity-60">
                Image file max is 5MB
              </p>
            )}
          </>
        ) : (
          <>
            <div className="relative w-52 h-36 rounded-md overflow-hidden shadow-md">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
                unoptimized
              />
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
          type="button"
          onClick={handleRemove}
          disabled={!preview}
          className="w-full normal-case px-6 py-3
          rounded-full
          text-sm opacity-40 cursor-pointer
        hover:text-red-800 hover:border hover:border-red-800 hover:opacity-100 transition 
          disabled:opacity-30 disabled:hover:border-none"
        >
          Delete Image
        </button>

        {/* UPLOAD */}
        <button
          type="button"
          onClick={handleButtonClick}
          className={`
          ${activeState()}
          w-full normal-case px-6 py-3
          rounded-full border border-[#496C6F]
          text-sm opacity-40 cursor-pointer
        hover:bg-[#496C6F] hover:text-white hover:opacity-100 transition`}
        >
          Upload Image
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }} // Hides the default browser input
        />
      </div>
    </div>
  );
}

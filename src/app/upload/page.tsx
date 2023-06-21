"use client";
import dotenv from "dotenv";
import Image from "next/image";
import { useState, type ChangeEvent } from "react";
import { type Emotion } from "../Interfaces";

dotenv.config();

const BACKEND_URL = process.env.SERVER_URL as string;

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detectedEmotion, setDetectedEmotion] = useState<string | null>(null);

  const handleUpload = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    const selectedFile = fileInput.files?.[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      setIsLoading(true);

      fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data: Emotion) => {
          setDetectedEmotion(data.emotion);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleImagePreview = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && e.target.result) {
        setSelectedImage(e.target.result as string);
        setDetectedEmotion(null); // Reset detected emotion when a new picture is selected
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto text-center">
        <h1 className="p-10 text-4xl">Upload an image</h1>
        <input
          id="file-input"
          type="file"
          className="file-input-bordered file-input-warning file-input w-full max-w-xs"
          onChange={handleImagePreview}
        />
        {selectedImage && (
          <div className="p-4">
            <Image
              src={selectedImage}
              alt="Selected"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
        )}
        <div className="p-4">
          <button className="btn-success btn" onClick={handleUpload}>
            Submit
          </button>
        </div>
        {isLoading && (
          <div className="text-center">
            Detecting emotion... <div className="spinner"></div>
          </div>
        )}
        {detectedEmotion && !isLoading && (
          <div className="text-center">Detected emotion: {detectedEmotion}</div>
        )}
      </div>
    </div>
  );
}

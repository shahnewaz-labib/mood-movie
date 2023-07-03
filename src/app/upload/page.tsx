"use client";
import dotenv from "dotenv";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import type { Emotion } from "../Interfaces";

dotenv.config();

const BACKEND_URL = process.env.SERVER_URL as string;

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detectedEmotion, setDetectedEmotion] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);//new

  useEffect(() => {//new
    if (selectedImage) {
      // If an image is selected, stop the camera stream
      stopCameraStream();
    }
  }, [selectedImage]);

  const startCameraStream = async () => {//new
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const stopCameraStream = () => {//new
    if (videoRef.current) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream?.getTracks();
      tracks?.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const handleCapture = () => {//new
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");

      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvas.width,
          canvas.height
        );

        const capturedImage = canvas.toDataURL("image/jpeg");
        setSelectedImage(capturedImage);
        setDetectedEmotion(null); // Reset detected emotion when a new picture is selected
      }
    }
  };

  const handleUpload = () => {//updated
    if (selectedImage) {
      const formData = new FormData();
      const blob = dataURLtoBlob(selectedImage);
      formData.append("image", blob);

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
        const image = document.createElement("img");
        image.src = e.target.result as string;
        
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 800; // Adjust the maximum width as desired
          const MAX_HEIGHT = 600; // Adjust the maximum height as desired
          let width = image.width;
          let height = image.height;
  
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
  
          canvas.width = width;
          canvas.height = height;
  
          const context = canvas.getContext("2d");
          if (context) {
            context.drawImage(image, 0, 0, width, height);
            const resizedImage = canvas.toDataURL("image/jpeg");
            setSelectedImage(resizedImage);
            setDetectedEmotion(null); // Reset detected emotion when a new picture is selected
          }
        };
      }
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  

  useEffect(() => {//new
    startCameraStream();
    return () => {
      stopCameraStream();
    };
  }, []);

  const dataURLtoBlob = (dataURL: string) => {//new
    const arr = dataURL.split(",");
    if (arr.length < 2 || !arr[0] || !arr[1]) {
      throw new Error("Invalid data URL");
    }
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch) {
      throw new Error("Invalid data URL");
    }
    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    if (!bstr) {
      throw new Error("Failed to convert base64 to binary");
    }
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };
  return (//updated
    <div className="flex items-center justify-center h-screen">
      <div className="text-center mt-[-150px]">
        <h1 className="p-10 text-4xl">
          Upload an image for emotion recognition
        </h1>
        {selectedImage ? (
          <>
            <div className="p-4">
              <Image
                src={selectedImage}
                alt="Selected"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div className="p-4">
              <button className="btn-success btn" onClick={handleUpload}>
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <input
              id="file-input"
              type="file"
              className="file-input-bordered file-input-warning file-input w-full max-w-xs"
              onChange={handleImagePreview}
            />
            <h1 className="p-3 text-3xl">Or</h1>
            <div>
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full max-w-lg mx-auto"
                style={{ width: "100%", height: "auto" }}
              ></video>
            </div>
            <div className="p-4">
              <button className="bg-gray-500 text-white btn" onClick={handleCapture}>
                Capture
              </button>
            </div>
          </>
        )}
        {isLoading && (
          <div className="text-center text-2xl">
            Detecting emotion... <div className="spinner"></div>
          </div>
        )}
        {detectedEmotion && !isLoading && (
          <div className="text-center text-2xl">
            Detected emotion: {detectedEmotion}
            <div className="p-4">
              <Link href={`/recommendation/${detectedEmotion}`}>
                Go to your movie <strong>recommendations</strong>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

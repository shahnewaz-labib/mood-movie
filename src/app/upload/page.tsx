"use client";
import dotenv from "dotenv";

dotenv.config();

const BACKEND_URL = process.env.SERVER_URL as string;

export default function uploadPage() {
  // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", BACKEND_URL);

  const handleUpload = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    const selectedFile = fileInput.files?.[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data); // Log the response data received from the API
        })
        .catch((error) => {
          console.error(error); // Log any errors that occurred during the API request
        });
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
        />
        <div className="p-4">
          <button className="btn-success btn" onClick={handleUpload}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

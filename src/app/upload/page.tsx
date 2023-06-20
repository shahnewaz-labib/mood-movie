export default function uploadPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto">
        <h1 className="p-10 text-4xl">Upload an image</h1>
        <input
          type="file"
          className="file-input-bordered file-input-success file-input w-full max-w-xs"
        />
      </div>
    </div>
  );
}

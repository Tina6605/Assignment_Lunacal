import React, { useState, useEffect } from "react";

function Gallery() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate fetching existing images from a backend or local storage
    const fetchImages = () => {
      const existingImages = [
        { id: 1, url: "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=612x612&w=0&k=20&c=2GLUy6eqCSr0NFRO8CHm8_PUMy9Qc8ryqcsRoe0DEYM=" },
        { id: 2, url: "https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg" },
        { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s" } // Ensure there are enough images to display initially
      ];
      setImages(existingImages);
    };
    fetchImages();
  }, []);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUploadImage = (event) => {
    event.preventDefault();
    if (image) {
      setImages([...images, { id: Math.random(), url: URL.createObjectURL(image) }]);
      setImage(null);
    }
  };

  const handleRemoveImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
    if (currentIndex > 0 && currentIndex >= images.length - 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-white">Gallery</p>
        <form onSubmit={handleUploadImage} className="flex items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="image-input"
          />
          <button
            type="button"
            className="bg-gray-700 text-white p-2 rounded"
            onClick={() => document.getElementById("image-input").click()}
          >
            Choose Image
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded ml-2"
            disabled={!image}
          >
            Upload Image
          </button>
        </form>
        <div className="flex items-center ml-4">
          <button
            className="bg-gray-600 text-white p-1 rounded"
            onClick={handlePrevImage}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            className="bg-gray-600 text-white p-1 rounded"
            onClick={handleNextImage}
            disabled={currentIndex === images.length - 1}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.slice(currentIndex, currentIndex + 3).map((img) => (
          <div
            key={img.id}
            className="bg-gray-700 h-24 rounded relative"
            style={{
              border: "1px solid #ddd",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden"
            }}
          >
            <div
              className="cursor-pointer"
              style={{
                backgroundImage: `url(${img.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                borderRadius: "inherit"
              }}
            />
            <button
              className="absolute top-0 right-0 bg-red-500 p-1 rounded"
              onClick={() => handleRemoveImage(img.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

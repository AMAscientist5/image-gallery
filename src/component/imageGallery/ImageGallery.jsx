import data from "../data/Data";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SelectDeleteButtons from "./SelectDeleteButton";
import ImageGalleryDisplay from "./ImageGalleryDisplay";
import { useImageGallery } from "../../hooks/useImageGallery";
import toast from "react-hot-toast";
import "./ImageGallery.css";

function ImageGallery() {
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const {
    images,
    count,
    toggleImageSelection,
    handleSort,
    handleDelete,
    draggedOverImage,
    dragImage,
  } = useImageGallery(data);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let imageSearch = images.filter((image) => {
    return Object.keys(image).some((key) =>
      image[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  useEffect(() => {
    const imageLoadPromises = images.map((image) => {
      return new Promise((resolve) => {
        const imgElement = new Image();
        imgElement.src = image.img;
        imgElement.onload = resolve;
      });
    });

    Promise.all(imageLoadPromises).then(() => {
      setIsLoading(false);
    });
  }, [images]);

  return (
    <>
      <div className="min-h-screen">
        <SearchBar filter={filter} searchText={searchText} />
        <SelectDeleteButtons
          count={count}
          handleDelete={() => {
            handleDelete();
            toast.success("Successfully Deleted!"); // Show the toast notification here
          }}
        />
        <ImageGalleryDisplay
          isLoading={isLoading}
          imageSearch={imageSearch}
          toggleImageSelection={toggleImageSelection}
          dragImage={dragImage}
          draggedOverImage={draggedOverImage}
          handleSort={handleSort}
        />
      </div>
    </>
  );
}

export default ImageGallery;

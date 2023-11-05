/* eslint-disable react/prop-types */
import Spinner from "../shared/Spinner";

function ImageGalleryDisplay({
  isLoading,
  imageSearch,
  toggleImageSelection,
  dragImage,
  draggedOverImage,
  handleSort,
}) {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="gallery">
      {imageSearch.map((image, index) => (
        <div
          className={`pics ${image.selected ? "selected pic" : ""}`}
          key={index}
          onClick={() => toggleImageSelection(image.img)}
          draggable
          onDragStart={() => (dragImage.current = index)}
          onDragEnter={() => (draggedOverImage.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          {image.selected && (
            <span className="checkbox selected">&#10003;</span>
          )}

          <img
            key={image.id}
            src={image.img}
            alt=""
            style={{
              width: "100%",
              border: "solid 1px #A8A8A8",
              borderRadius: "3%",
            }}
          />
          <div className="font-semibold uppercase absolute bottom-0 left-0 right-0 bg-opacity-70 bg-black text-white p-2 text-center text-xs">
            {image.title}
          </div>
        </div>
      ))}
      <div className="upload-area">
        {/* <div className="border-2 border-black"> */}
        <div>
          <label htmlFor="image-upload" className="cursor-pointer">
            <input
              type="file"
              id="image-upload"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <div className="text-center p-8">
              <p className="text-4xl">+</p>
              <p className="text-xs">Upload Image</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ImageGalleryDisplay;

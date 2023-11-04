import img1 from "../images/image-1.webp";
import img2 from "../images/image-2.webp";
import img3 from "../images/image-3.webp";
import img4 from "../images/image-4.webp";
import img5 from "../images/image-5.webp";
import img6 from "../images/image-6.webp";
import img7 from "../images/image-7.webp";
import img8 from "../images/image-8.webp";
import img9 from "../images/image-9.webp";
import img10 from "../images/image-10.webp";
import img11 from "../images/image-11.webp";
import "./ImageGallery.css";
import { useState, useRef } from "react";
import Spinner from "./Spinner";
function ImageGallery() {
  const [images, setImages] = useState([
    {
      id: 1,
      img: img1,
      title: "headphone blue",
    },
    {
      id: 2,
      img: img2,
      title: "headphone green",
    },
    {
      id: 3,
      img: img3,
      title: "headphone purple",
    },
    {
      id: 4,
      img: img4,
      title: "headphone black",
    },
    {
      id: 5,
      img: img5,
      title: "headphone red",
    },
    {
      id: 6,
      img: img6,
      title: "headphone gray",
    },
    {
      id: 7,
      img: img7,
      title: "watch black",
    },
    {
      id: 8,
      img: img8,
      title: "watch 2",
    },
    {
      id: 9,
      img: img9,
      title: "watch 3",
    },
    {
      id: 10,
      img: img10,
      title: "home drawing",
    },
    {
      id: 11,
      img: img11,
      title: "telephone",
    },
  ]);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");

  const toggleImageSelection = (image) => {
    const updatedImages = [...images];
    const imageIndex = updatedImages.findIndex((img) => img.img === image);
    console.log(imageIndex, "index");
    updatedImages[imageIndex].selected = !updatedImages[imageIndex].selected;
    setImages(updatedImages);

    setCount(updatedImages.filter((image) => image.selected).length);
  };

  const dragImage = useRef(0);
  const draggedOverImage = useRef(0);

  function handleSort() {
    const imageClone = [...images];
    const temp = imageClone[dragImage.current];
    imageClone[dragImage.current] = imageClone[draggedOverImage.current];
    imageClone[draggedOverImage.current] = temp;
    setImages(imageClone);

    // Add this code to reset the transform after the drag operation is completed
    // dragImage.current = 0;
    // draggedOverImage.current = 0;
  }

  function handleDelete() {
    const result = images.filter((item) => !item.selected);
    setImages(result);
    setCount(0);
  }
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  // let imageSearch = images.filter((image) => {
  //   return Object.keys(image).some((key) => {
  //     image[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filter.toString().toLowerCase());
  //   });
  // });

  let imageSearch = images.filter((image) => {
    return Object.keys(image).some((key) =>
      image[key].toString().toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <>
      <div className="m-4">
        <label className="text-xl mr-2">Search</label>
        <input
          className="border-2 border-black text-sm p-1 text-gray-400"
          type="text"
          value={filter}
          placeholder="search name with color"
          onChange={searchText.bind(this)}
        />
      </div>
      <div className="selectAndDelete px-4">
        {count > 0 && (
          <div className="selectFile">
            <p className="check  selectPara">&#10003;</p>
            <h2>
              {count} {count > 1 ? "Images" : "Image"} Selected
            </h2>
          </div>
        )}

        {count > 0 && (
          <h2 className="delete-button" onClick={handleDelete}>
            Delete {count > 1 ? "Images" : "Image"}
          </h2>
        )}
      </div>
      <Spinner />
      <div className="gallery">
        {/* {images.map((image, index) => { */}
        {imageSearch.map((image, index) => {
          return (
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
                src={image.img}
                alt=""
                style={{
                  width: "100%",
                  border: "solid 1px #A8A8A8",
                  borderRadius: "3%",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ImageGallery;

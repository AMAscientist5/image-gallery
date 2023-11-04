// import img1 from "../images/image-1.webp";
// import img2 from "../images/image-2.webp";
// import img3 from "../images/image-3.webp";
// import img4 from "../images/image-4.webp";
// import img5 from "../images/image-5.webp";
// import img6 from "../images/image-6.webp";
// import img7 from "../images/image-7.webp";
// import img8 from "../images/image-8.webp";
// import img9 from "../images/image-9.webp";
// import img10 from "../images/image-10.webp";
// import img11 from "../images/image-11.webp";
// import "./ImageGallery.css";
// import { useState, useRef } from "react";
// function ImageGallery() {
//   const [images, setImages] = useState([
//     {
//       id: 1,
//       img: img1,
//     },
//     {
//       id: 2,
//       img: img2,
//     },
//     {
//       id: 3,
//       img: img3,
//     },
//     {
//       id: 4,
//       img: img4,
//     },
//     {
//       id: 5,
//       img: img5,
//     },
//     {
//       id: 6,
//       img: img6,
//     },
//     {
//       id: 7,
//       img: img7,
//     },
//     {
//       id: 8,
//       img: img8,
//     },
//     {
//       id: 9,
//       img: img9,
//     },
//     {
//       id: 10,
//       img: img10,
//     },
//     {
//       id: 11,
//       img: img11,
//     },
//   ]);
//   const [count, setCount] = useState(0);
//   // const [selectedImages, setSelectedImages] = useState([]);
//   // console.log(selectedImages, "aaaaa");

//   // const getImage = (image) => {
//   //   if (!selectedImages.includes(image)) {
//   //     setSelectedImages([...selectedImages, image]);
//   //     setCount(selectedImages.length + 1);
//   //   }
//   // };

//   const toggleImageSelection = (image) => {
//     const updatedImages = [...images];
//     const imageIndex = updatedImages.findIndex((img) => img.img === image);
//     console.log(imageIndex, "index");
//     updatedImages[imageIndex].selected = !updatedImages[imageIndex].selected;
//     setImages(updatedImages);

//     setCount(updatedImages.filter((image) => image.selected).length);
//   };

//   const dragImage = useRef(0);
//   const draggedOverImage = useRef(0);

//   function handleSort() {
//     const imageClone = [...images];
//     const temp = imageClone[dragImage.current];
//     imageClone[dragImage.current] = imageClone[draggedOverImage.current];
//     imageClone[draggedOverImage.current] = temp;
//     setImages(imageClone);
//   }

//   function handleDelete() {
//     // const result = images.filter((item) => !selectedImages.includes(item.img));
//     // setImages(result);
//     // setCount(0);
//     // setSelectedImages([]);

//     const result = images.filter((item) => !item.selected);
//     setImages(result);
//     setCount(0);
//   }

//   return (
//     <>
//       <div className="selectAndDelete">
//         {count > 0 && (
//           <div className="selectFile">
//             <p className="check select selectPara">&#10003;</p>
//             <h2>
//               {count} {count > 1 ? "Images" : "Image"} Selected
//             </h2>
//           </div>
//         )}

//         {count > 0 && (
//           <h2 className="delete-button" onClick={handleDelete}>
//             Delete {count > 1 ? "Images" : "Image"}
//           </h2>
//         )}
//       </div>

//       {/* <button onClick={handleDelete}>Delete</button> */}
//       <div className="gallery">
//         {images.map((image, index) => {
//           return (
//             <div
//               // className="pics"
//               // key={index}
//               // onClick={() => getImage(image.img)}
//               className={`pics ${image.selected ? "selected pic" : ""}`}
//               // {image?.selected ?  className="pics pic selected" : className="pics" }
//               key={index}
//               onClick={() => toggleImageSelection(image.img)}
//               draggable
//               onDragStart={() => (dragImage.current = index)}
//               onDragEnter={() => (draggedOverImage.current = index)}
//               onDragEnd={handleSort}
//               onDragOver={(e) => e.preventDefault()}
//             >
//               {image.selected && (
//                 <span className="checkbox selected">&#10003;</span>
//               )}
//               <img
//                 src={image.img}
//                 alt=""
//                 // className={`pics ${image.selected ? "selected" : ""}`}
//                 style={{
//                   width: "100%",
//                   border: "solid 2px #A8A8A8",
//                   borderRadius: "3%",
//                 }}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default ImageGallery;
//=====================
// .gallery {
/* -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px; */

//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 20px;
//   margin: 20px 20px;
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
// }

// .gallery .pics {
//   -webkit-transition: all 350ms ease;
//   transition: all 350ms ease;
//   cursor: pointer;
//   position: relative;
// }
// .gallery .pics:hover {
//   filter: opacity(0.5);
// }
// .gallery .pics:hover {
//   filter: opacity(0.5);
// }
// .gallery .pic {
//   filter: opacity(0.6);
// }

// .delete-button {
//   color: red;
//   cursor: pointer;
// }

// .checkbox {
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   font-size: 24px;
//   color: #00f;
//   background-color: #fff;
//   border: 1px solid #00f;
//   width: 25px;
//   height: 25px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   cursor: pointer;
//   transition: background-color 0.3s;
// }
// .check {
//   font-size: 24px;
//   background-color: #00f;
//   color: #fff;
//   border: 1px solid #00f;
//   width: 25px;
//   height: 25px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   cursor: pointer;
//   transition: background-color 0.3s;
// }

// .selectPara {
//   margin-right: 5px;
// }

// .selectFile {
//   display: flex;
//   align-items: center;
// }
// .selectAndDelete {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }

// .checkbox.selected {
//   background-color: #00f;
//   color: #fff;
// }

// @media (max-width: 991px) {
//   .gallery {
//     /* -webkit-column-count: 2;
//     -moz-column-count: 2;
//     column-count: 2; */

//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//   }
// }
// @media (max-width: 480px) {
//   .gallery {
//     /* -webkit-column-count: 1;
//     -moz-column-count: 1;
//     column-count: 1; */

//     display: grid;
//     grid-template-columns: repeat(1, 1fr);
//     -webkit-column-width: 100%;
//     -moz-column-width: 100%;
//     column-width: 100%;
//   }
// }

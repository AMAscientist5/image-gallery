/* eslint-disable no-unused-vars */

import { useState, useRef } from "react";

export function useImageGallery(data) {
  // Initialize state variables for images and count
  const [images, setImages] = useState(data);
  const [count, setCount] = useState(0);

  // Function to toggle the selection of an image
  const toggleImageSelection = (image) => {
    // Create a copy of the current images array
    const updatedImages = [...images];

    // Find the index of the image to be toggled
    const imageIndex = updatedImages.findIndex((img) => img.img === image);

    // Toggle the 'selected' property of the image
    updatedImages[imageIndex].selected = !updatedImages[imageIndex].selected;

    // Update the state with the modified images array and the count
    setImages(updatedImages);
    setCount(updatedImages.filter((image) => image.selected).length);
  };

  // Refs to track the currently dragged image and the image it's dragged over
  const dragImage = useRef(0);
  const draggedOverImage = useRef(0);

  // Function to handle the sorting of images
  function handleSort() {
    // Create a copy of the current images array
    const imageClone = [...images];

    // Swap the positions of the dragged image and the image it's dragged over
    const temp = imageClone[dragImage.current];
    imageClone[dragImage.current] = imageClone[draggedOverImage.current];
    imageClone[draggedOverImage.current] = temp;

    // Update the state with the sorted images
    setImages(imageClone);
  }

  // Function to handle the deletion of selected images
  function handleDelete() {
    // Filter out selected images from the current images array
    const result = images.filter((item) => !item.selected);

    // Update the state with the filtered images and reset the count
    setImages(result);
    setCount(0);
  }

  return {
    images,
    count,
    toggleImageSelection,
    handleSort,
    handleDelete,
    dragImage,
    draggedOverImage,
  };
}

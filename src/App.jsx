import { useState } from "react";
import "./App.css";
import Footer from "./component/Footer";
import ImageGallery from "./component/ImageGallery";
import { Typewriter } from "react-simple-typewriter";
function App() {
  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <>
      <div className="text-center">
        <h1
          style={{ color: "#A8A8A8" }}
          className="text-3xl mb-1 font-semibold"
        >
          <span>
            <Typewriter
              words={["Image Gallery"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </h1>

        <hr className="m-0 mx-auto w-44 border-t-2 border-gray-300" />
      </div>

      <ImageGallery />
      <Footer></Footer>
    </>
  );
}

export default App;

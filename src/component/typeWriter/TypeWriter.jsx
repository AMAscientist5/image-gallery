import { Typewriter } from "react-simple-typewriter";
import "./TypeWriter.css";

const TypeWriter = () => {
  // Callback function to handle typing events (not used in this example).
  const handleType = (count) => {
    console.log(count); // Log the count of typed characters.
  };

  // Callback function to handle when typing is completed (not used in this example).
  const handleDone = () => {
    console.log(`Done after 5 loops!`); // Log when typing is completed.
  };

  return (
    <div className="text-center">
      <h1 className="text-gradient text-3xl mb-1 font-semibold">
        <span>
          {/* Typewriter effect */}
          <Typewriter
            words={["Image Gallery"]} // An array of words to type
            loop={5} // Number of times to repeat the typing animation
            cursor // Show a typing cursor
            cursorStyle="|" // Customize the cursor style
            typeSpeed={70} // Typing speed (characters per second)
            deleteSpeed={50} // Deleting speed (characters per second)
            delaySpeed={1000} // Delay between repetitions
            onLoopDone={handleDone} // Callback when looping is done
            onType={handleType} // Callback when typing
          />
        </span>
      </h1>
      <hr className="m-0 mx-auto w-44 border-t-2 border-gray-300" />
    </div>
  );
};

export default TypeWriter;

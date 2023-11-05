import Footer from "./component/shared/Footer";
import ImageGallery from "./component/imageGallery/ImageGallery";
import TypeWriter from "./component/typeWriter/TypeWriter";
import ThemeToggle from "./component/theme/ThemeToggle";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./hooks/useHook";

function App() {
  // custom hook manage the theme state
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={theme ? "bg-black text-white" : ""}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <TypeWriter />
        <Toaster />
        <ImageGallery />
        <Footer />
      </div>
    </>
  );
}

export default App;

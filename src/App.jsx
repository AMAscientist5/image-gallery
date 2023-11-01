import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div>
          <div className="logo-container">
            <h1>Image Gallery</h1>
            <hr className="hr" />
          </div>

          <div className="cart-container">
            <div>
              <img src="public/images/image-1.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-2.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-3.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-4.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-5.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-6.webp" alt="" />
            </div>
            <div>
              <img src="public/images/image-7.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-8.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-9.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-10.webp" alt="image" />
            </div>
            <div>
              <img src="public/images/image-11.webp" alt="image" />
            </div>
          </div>
        </div>
        <div className="detail-container"></div>
      </div>
    </>
  );
}

export default App;

import { BsFillTrash3Fill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function SelectDeleteButtons({ count, handleDelete }) {
  return (
    <div className="selectAndDelete px-4">
      {count > 0 && (
        <div className="selectFile">
          <p className="check selectPara">&#10003;</p>
          <h2 className="font-semibold text-sm">
            {count} {count > 1 ? "Images" : "Image"} Selected
          </h2>
        </div>
      )}

      <div className="flex justify-center items-center">
        {count > 0 && (
          <>
            <h2
              className="delete-button mr-2 font-semibold text-sm"
              onClick={handleDelete}
            >
              Delete {count > 1 ? "Images" : "Image"}
            </h2>

            <div>
              <BsFillTrash3Fill />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SelectDeleteButtons;

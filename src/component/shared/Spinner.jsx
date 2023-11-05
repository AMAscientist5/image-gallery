// Spinner component displays a loading spinner using RingLoader from React Spinners
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

const Spinner = () => {
  // CSS for the loading spinner
  const loaderCss = css`
    display: block;
    margin: 50px;
  `;

  return (
    <div className="flex items-center justify-center">
      {/* RingLoader component with custom loading properties */}
      <RingLoader
        color={"#36D7B7"}
        loading={true}
        size={100}
        height={100}
        width={500}
        css={loaderCss}
      />
    </div>
  );
};

export default Spinner;

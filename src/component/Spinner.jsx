import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
const Spinner = () => {
  const loderCss = css`
    display: block;
    margin: 50px;
  `;
  return (
    <div className="flex justify-center">
      <RingLoader
        color={"#36D7B7"}
        loading={true}
        size={100}
        height={100}
        width={500}
        css={loderCss}
      />
    </div>
  );
};

export default Spinner;

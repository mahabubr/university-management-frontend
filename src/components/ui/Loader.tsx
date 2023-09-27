import { Spin } from "antd";

const Loader = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;

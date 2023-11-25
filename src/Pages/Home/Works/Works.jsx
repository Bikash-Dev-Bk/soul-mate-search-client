import { Spin } from "antd";

const Works = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-5 my-32">
      <h2 className="text-center text-3xl font-bold mb-16">
        How this website works
      </h2>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Works;

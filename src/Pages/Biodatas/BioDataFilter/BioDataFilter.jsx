import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "react-select";

const BioDataFilter = () => {
  return (
    <div className="mr-8">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Age Range Slider */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Age Range</label>
        <Slider range min={0} max={100} defaultValue={[0, 100]} />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span></span> - <span></span>
        </div>
      </div>

      {/* Biodata Type Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Biodata Type</label>
        <Select
          options={[
            { value: "all", label: "All" },
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
        />
      </div>

      {/* Division Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Permanent Division
        </label>
        <Select
          options={[
            { value: "all", label: "All" },
            { value: "Dhaka", label: "Dhaka" },
            { value: "Chattogram", label: "Chattogram" },
            { value: "Rangpur", label: "Rangpur" },
            { value: "Barisal", label: "Barisal" },
            { value: "Khulna", label: "Khulna" },
            { value: "Mymensingh", label: "Mymensingh" },
            { value: "Sylhet", label: "Sylhet" },
          ]}
        />
      </div>
    </div>
  );
};

export default BioDataFilter;

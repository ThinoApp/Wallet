import "./InvestissementRepartition.scss";

import Pie from "@/components/CustomPieChart/CustomPieChart.jsx";
import { useMemo, useState } from "react";

["#155F63", "#501863", "#326329"];
const data = [
  { label: "Actions", value: 45, color: "#155F63", borderColor: "#28b3bc" },
  { label: "Obligations", value: 50, color: "#501863", borderColor: "#8B2AAD" },
  { label: "Liquidités", value: 40, color: "#326329", borderColor: "#6DDA5B" },
];

interface IData {
  label: string;
  value: number;
  color: string;
}
const InvestissementRepartition = () => {
  const [excludeData, setExcludeData] = useState<IData[]>([]);

  const customData = useMemo(() => {
    return data.filter((item) => !excludeData.includes(item));
  }, [excludeData]);

  const handleLabelClick = (labelItem: IData) => {
    const isInExclude = excludeData.findIndex(
      (item) => item.label === labelItem.label
    );

    if (isInExclude === -1 && excludeData.length < 2) {
      setExcludeData((prev) => [...prev, labelItem]);
    } else if (isInExclude !== -1) {
      setExcludeData((prev) =>
        prev.filter((item) => item.label != labelItem.label)
      );
    }
  };

  return (
    <div className="InvestissementRepartition">
      <h2>Répartition</h2>
      <div className="Pie-container">
        <Pie
          innerRadius={20}
          outerRadius={150}
          width="60%"
          height={320}
          data={customData}
        />

        <div className="labelContainer">
          {data.map((item) => (
            <div
              key={item.label}
              className="label-item"
              onClick={() => handleLabelClick(item)}
            >
              <div
                style={{ backgroundColor: item.borderColor }}
                className="w-4 h-4"
              ></div>
              <p
                className={`${
                  excludeData.includes(item) ? "line-through" : ""
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default InvestissementRepartition;

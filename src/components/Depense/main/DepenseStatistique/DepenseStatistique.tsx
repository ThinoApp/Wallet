import "./DepenseStatistique.scss";

import CustomLineChart from "@/components/CustomLineChart/CustomLineChart";

const DepenseStatistique = () => {
  return (
    <div className="DepenseStatistique">
      <CustomLineChart
        color="#db5151"
        dataKey="Investissement"
        label="Dépense"
      />
    </div>
  );
};
export default DepenseStatistique;

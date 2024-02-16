import "./InvestissementStatistique.scss";
import CustomLineChart from "@/components/CustomLineChart/CustomLineChart";

const InvestissementStatistique = () => {
  return (
    <div className="InvestissementStatistique ">
      <CustomLineChart
        color="#28B3BC"
        label="Investissement"
        dataKey="Investissement"
      />
    </div>
  );
};
export default InvestissementStatistique;

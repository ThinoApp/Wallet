import CustomLineChart from "@/components/CustomLineChart/CustomLineChart";
import "./EconomieStatistique.scss";
const EconomieStatistique = () => {
  return (
    <div className="EconomieStatistique">
      <CustomLineChart
        color="#6DDA5B"
        label="Economie"
        dataKey="Investissement"
      />
    </div>
  );
};
export default EconomieStatistique;

import { TooltipProps } from "recharts";
import "./DashboardCustomTooltip.scss";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { command, dollarSign, setting, trendingDown } from "@/utils/icons";
const DashboardCustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="DashboardCustomTooltip">
        <p className="depense">
          {trendingDown}
          Dépense : <strong>{payload[0].value}</strong>
        </p>
        <p className="economie">
          {dollarSign} Economie : <strong>{payload[1].value}</strong>
        </p>
        <p className="investissement">
          {setting} Investissement : <strong>{payload[2].value}</strong>
        </p>
        <p className="revenu">
          {command}
          Revenu : <strong>{payload[3].value}</strong>
        </p>
      </div>
    );
  }
};
export default DashboardCustomTooltip;

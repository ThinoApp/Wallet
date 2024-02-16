import "./CustomLineChart.scss";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  dataByMonth,
  dataByWeek,
  dataByYear,
} from "@/containers/InvestissementContainer/Investissement.utils";
import { useMemo, useState } from "react";
import DashboardCustomDot from "../Dashboard/components/DashboardCustomDot/DashboardCustomDot";

const frequencyType = ["Annuel", "Mensuel", "Hebdomadaire"];

interface CustomLineChartProps {
  label: string;
  color: string;
  dataKey: string;
}
const CustomLineChart = ({ color, label, dataKey }: CustomLineChartProps) => {
  const [frequency, setFrequency] = useState(frequencyType[0]);
  const [showDot, setShowDot] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = useMemo(
    () => (currentPage - 1) * itemsPerPage,
    [currentPage]
  );

  const endIndex = useMemo(() => currentPage * itemsPerPage, [currentPage]);

  const typedData = useMemo(() => {
    if (frequency === "Mensuel") {
      return dataByMonth;
    } else if (frequency === "Annuel") {
      return dataByYear;
    }
    return dataByWeek;
  }, [frequency]);

  const currentData = useMemo(
    () => typedData.slice(startIndex, endIndex),
    [typedData, startIndex, endIndex]
  );

  const xAxisLabel = useMemo(() => {
    if (frequency === "Annuel") return "year";
    if (frequency === "Mensuel") return "month";
    if (frequency === "Hebdomadaire") return "week";
  }, [frequency]);

  const totalPages = useMemo(() => {
    return Math.ceil(typedData.length / itemsPerPage);
  }, [typedData]);

  return (
    <div className="Statistique">
      <h2>
        <span>{label}</span>
        <Select
          value={frequency}
          onValueChange={(value) => setFrequency(value)}
        >
          <SelectTrigger
            style={{ backgroundColor: color }}
            className="focus:ring-0 w-[180px] outline-none border-none focus:shadow-none"
          >
            <SelectValue placeholder="Select a " />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Catégories</SelectLabel>
              {frequencyType.map((item) => (
                <SelectItem value={item}>{item}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </h2>

      <div
        className="LineChart-container"
        onMouseEnter={() => setShowDot(true)}
        onMouseLeave={() => setShowDot(false)}
      >
        <ResponsiveContainer className="DashboardLineChart">
          {window.innerWidth > 768 ? (
            <LineChart data={typedData} className="hidden md:block">
              <XAxis
                className="font-lato"
                dataKey={xAxisLabel}
                stroke="white"
                tick={true}
                tickLine={{ stroke: "#EAF0F4" }}
              />
              <YAxis stroke="white" tickLine={{ stroke: "#EAF0F4" }} />
              <CartesianGrid
                vertical={false}
                stroke={color}
                // stroke="#db5151"
                strokeDasharray="1 3"
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color={color}
                    cx={190}
                    cy={100}
                  />
                }
                type="monotone"
                dataKey={dataKey}
                strokeWidth="5px"
                stroke={color}
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
            </LineChart>
          ) : (
            <LineChart data={currentData} className="block md:hidden">
              <XAxis
                dataKey={xAxisLabel}
                stroke="white"
                tick={true}
                tickLine={{ stroke: "#EAF0F4" }}
              />
              <YAxis stroke="white" tickLine={{ stroke: "#EAF0F4" }} />
              {/* <Tooltip content={<DashboardCustomTooltip />} /> */}
              <CartesianGrid
                vertical={false}
                stroke={color}
                // stroke="#db5151"
                strokeDasharray="1 3"
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                strokeWidth="5px"
                stroke={color}
                // stroke="#db5151"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
      <div className={`w-full flex md:hidden btn-control-container pr-12`}>
        <button
          className={`${
            currentPage === 1
              ? "pointer-events-none opacity-50"
              : "pointer-events-auto opacity-100"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <button
          className={`${
            currentPage === totalPages
              ? "pointer-events-none opacity-50"
              : "pointer-events-auto opacity-100"
          }`}
          onClick={() =>
            setCurrentPage((prev) => {
              console.log(Math.min(prev + 1, totalPages));
              return Math.min(prev + 1, totalPages);
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomLineChart;

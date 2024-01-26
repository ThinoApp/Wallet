import { useMemo, useState } from "react";
import "./DashboardStatistique.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import DashboardCustomDot from "../../components/DashboardCustomDot/DashboardCustomDot";
import DashboardCustomTooltip from "../../components/DashboardCustomTooltip/DashboardCustomTooltip";
import { statistiqueData } from "@/containers/DashboardContainer/Dashboard.utils";

const DashboardStatistique = () => {
  const [showDot, setShowDot] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = useMemo(
    () => (currentPage - 1) * itemsPerPage,
    [currentPage]
  );

  const endIndex = useMemo(() => currentPage * itemsPerPage, [currentPage]);

  const currentData = useMemo(
    () => statistiqueData.slice(startIndex, endIndex),
    [startIndex, endIndex]
  );

  return (
    <div className="DashboardStatistique">
      <h2>Statistique</h2>
      <div
        className="LineChart-container"
        onMouseEnter={() => setShowDot(true)}
        onMouseLeave={() => setShowDot(false)}
      >
        <ResponsiveContainer className="DashboardLineChart">
          {window.innerWidth > 768 ? (
            <LineChart data={statistiqueData} className="hidden md:block">
              <XAxis
                dataKey="month"
                stroke="white"
                tick={true}
                tickLine={{ stroke: "#EAF0F4" }}
              />
              <YAxis stroke="white" tickLine={{ stroke: "#EAF0F4" }} />
              <Tooltip content={<DashboardCustomTooltip />} />
              <CartesianGrid
                vertical={false}
                stroke="#28B3BC"
                strokeDasharray="1 3"
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color="#DB3333"
                    cx={190}
                    cy={100}
                  />
                }
                // activeDot={false
                type="monotone"
                dataKey="Depense"
                strokeWidth="5px"
                stroke="#DB3333"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color="#6DDA5B"
                    cx={190}
                    cy={100}
                  />
                }
                type="monotone"
                dataKey="Economie"
                strokeWidth="3px"
                stroke="#6DDA5B"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color="#28B3BC"
                    cx={190}
                    cy={100}
                  />
                }
                type="monotone"
                strokeWidth="3px"
                dataKey="Investissement"
                stroke="#28B3BC"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color="rgba(150, 40, 188, 0.89)"
                    cx={190}
                    cy={100}
                  />
                }
                type="monotone"
                dataKey="Revenu"
                strokeWidth="3px"
                stroke="rgba(150, 40, 188, 0.89)"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
            </LineChart>
          ) : (
            <LineChart data={currentData} className="block md:hidden">
              <XAxis
                dataKey="month"
                stroke="white"
                tick={true}
                tickLine={{ stroke: "#EAF0F4" }}
              />
              <YAxis stroke="white" tickLine={{ stroke: "#EAF0F4" }} />
              <Tooltip content={<DashboardCustomTooltip />} />
              <CartesianGrid
                vertical={false}
                stroke="#28B3BC"
                strokeDasharray="1 3"
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color="#DB3333"
                    cx={190}
                    cy={100}
                  />
                }
                // activeDot={false
                type="monotone"
                dataKey="Depense"
                strokeWidth="5px"
                stroke="#DB3333"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color="#6DDA5B"
                    cx={190}
                    cy={100}
                  />
                }
                type="monotone"
                dataKey="Economie"
                strokeWidth="3px"
                stroke="#6DDA5B"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color="#28B3BC"
                    cx={190}
                    cy={100}
                  />
                }
                type="monotone"
                strokeWidth="3px"
                dataKey="Investissement"
                stroke="#28B3BC"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
              <Line
                dot={
                  <DashboardCustomDot
                    showDot={showDot}
                    color="rgba(150, 40, 188, 0.89)"
                    cx={190}
                    cy={100}
                  />
                }
                type="monotone"
                dataKey="Revenu"
                strokeWidth="3px"
                stroke="rgba(150, 40, 188, 0.89)"
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(255, 255,255, 0.25))",
                }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
      <div className={`flex md:hidden btn-control-container`}>
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
            currentPage === 3
              ? "pointer-events-none opacity-50"
              : "pointer-events-auto opacity-100"
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardStatistique;

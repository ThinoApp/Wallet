import "./DashboardCustomDot.scss";

interface CustomizeDotProps {
  cx: number;
  cy: number;
  color: string;
  showDot: boolean;
}
const DashboardCustomDot = (props: CustomizeDotProps) => {
  const { cx, cy, color, showDot } = props;

  return (
    <foreignObject x={cx} y={cy} width="100" height="100" overflow="visible">
      <div
        className={`DashboardCustomDot ${showDot ? "show" : ""} `}
        style={{
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: color,
        }}
      >
        <div style={{ backgroundColor: color }}></div>
      </div>
    </foreignObject>
  );
};
export default DashboardCustomDot;

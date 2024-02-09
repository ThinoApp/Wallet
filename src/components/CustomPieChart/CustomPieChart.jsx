import * as d3 from "d3";
import { useState } from "react";
import { motion } from "framer-motion";

// interface ArcProps {
//   data: d3.DefaultArcObject;
//   index: string;
//   createArc: d3.Arc<unknown, d3.DefaultArcObject>;
//   colors: d3.ScaleOrdinal<string, string, never>;
//   bordersColor: d3.ScaleOrdinal<string, string, never>;
//   format: (
//     n:
//       | number
//       | {
//           valueOf(): number;
//         }
//   ) => string;
// }

// interface PieProps {
//   data: (
//     | number
//     | {
//         valueOf(): number;
//       }
//   )[];
//   outerRadius: number;
//   innerRadius: number;
//   width: number;
//   height: number;
// }
const Arc = ({ data, index, createArc, colors, format, bordersColor }) => {
  const [isOver, setIsOver] = useState(false);
  return (
    <motion.g
      initial={{ clipPath: "circle(0)", scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{
        clipPath: "circle(100% at center)",
      }}
      transition={{ duration: 0.05 }}
      key={index}
      style={{ transition: ".3s" }}
      className={`arc duration-300 ${isOver ? "scale-110" : "scale-100"}`}
      filter="url(#inset-shadow)"
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <path
        className="arc "
        d={createArc(data)}
        fill={colors(index)}
        strokeWidth={10}
        stroke={bordersColor(index)}
      />
      <text
        className="duration-300"
        transform={`translate(${createArc.centroid(data)})`}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="#FFF"
        fontSize={`${isOver ? "30px" : "25px"}`}
        fontFamily="Lato"
        fontWeight="800"
        style={{
          color: "#fff",
          // stroke: "#000",
          strokeWidth: "2px",
          textShadow: `5px 5px 0px ${bordersColor(index)}`,
        }}
      >
        {format(data.value)}
      </text>
      {/* <g transform={`translate(${createArc.centroid(data)})`}>{trendingDown}</g> */}
    </motion.g>
  );
};

const Pie = (props) => {
  const innerWidth = window.innerWidth;

  console.log("Inner width", innerWidth);
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null)
    .padAngle(0.1);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);

  const colors = d3
    .scaleOrdinal(d3.schemeCategory10)
    .range(props.data.map((item) => item.color));
  const bordersColor = d3
    .scaleOrdinal(d3.schemeCategory10)
    .range(props.data.map((item) => item.borderColor));
  const format = d3.format(".2f");
  const data = createPie(props.data);

  return (
    <motion.svg
      initial={{ rotate: "360deg" }}
      whileInView={{ rotate: "0deg" }}
      transition={{ duration: 0.5 }}
      width={innerWidth < 640 ? "100%" : props.width}
      height={props.height}
      viewBox={`-20 -10 350 320 `}
    >
      <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="4" />
        <feOffset dx="35" dy="10" result="offsetblur" />
        <feFlood floodColor="rgb(0, 0, 0, 0.2)" result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>

      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {data.map((d, i) => (
          <Arc
            key={i}
            data={d}
            index={i}
            createArc={createArc}
            colors={colors}
            format={format}
            bordersColor={bordersColor}
          />
        ))}
      </g>
    </motion.svg>
  );
};

export default Pie;

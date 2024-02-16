import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import "./DepenseBarChart.scss";

const data = [
  {
    name: "1M",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    image: "./assets/images/food.png",
    type: "aliment",
    // get fill() {
    //   return this.uv < 2000 ? "blue" : "red";
    // },
  },
  {
    name: "2M",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    image: "./assets/images/bus.png",
    type: "transport",

    // get fill() {
    //   return this.uv <= 2000 ? "blue" : "red";
    // },
  },
  {
    name: "3M",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    image: "./assets/images/multimedia.png",
    type: "divertissement",

    // get fill() {
    //   return this.uv <= 2000 ? "blue" : "red";
    // },
  },
  {
    name: "4M",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    image: "./assets/images/multimedia.png",
    type: "autres",

    // get fill() {
    //   return this.uv <= 2000 ? "blue" : "red";
    // },
  },
  {
    name: "5M",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    image: "./assets/images/multimedia.png",
    type: "autres",

    // get fill() {
    //   return this.uv <= 2000 ? "blue" : "red";
    // },
  },
  {
    name: "6M",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    image: "./assets/images/multimedia.png",
  },
  // {
  //   name: "7M",
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  //   image: "./assets/images/multimedia.png",
  // },
];

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return (
    <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
      {`${value}`}
    </text>
  );
};

const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <image
        x={-10}
        y={-10}
        className="object-cover"
        href={data[payload.index].image}
        height="30"
        width="30"
      />
    </g>
  );
};

const DepenseBarChart = () => {
  return (
    <div className="DepenseBarChart h-[400px] flex justify-center">
      <h2>Répartition</h2>
      <div
        style={{ height: "150%", width: "100%" }}
        className="w-full h-full self-center flex flex-col justify-end "
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            barGap={"80px"}
            width={150}
            height={50}
            // barCategoryGap="50%"
            data={data.map((item) => ({
              ...item,
              get fill() {
                if (this.uv > 2500) {
                  return "url(#gradient)"; // Red if uv > 3500
                } else {
                  return "url(#gradient1)"; // Green otherwise
                }
              },
            }))}
          >
            <XAxis
              tick={<CustomXAxisTick />}
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: "1rem",
                fill: "#fff",
                opacity: 1,
              }}
            />
            {/* <Legend /> */}
            <defs>
              <linearGradient id="gradient" x1="0" y1="40%" x2="0%" y2="120%">
                <stop offset="0" stopColor="#db5151" />
                <stop offset="1" stopColor="rgba(0,0,0, 1)" opacity={0} />
              </linearGradient>
              <linearGradient id="gradient1" x1="0" y1="20%" x2="0%" y2="120%">
                <stop offset="0" stopColor="#db5151" />
                <stop offset="1" stopColor="rgba(0, 0, 0, 1)" opacity={0} />
              </linearGradient>
            </defs>
            <Bar
              radius={4}
              barSize={70}
              dataKey="uv"
              filter="drop-shadow(10px 10px 12px rgba(0,0,0,0.2))"
              // fill="url(#gradient)"
              fill={(payload) => payload.fill}
              label={renderCustomBarLabel}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default DepenseBarChart;

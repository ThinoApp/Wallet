import { CSSProperties, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import "./CircularIndicator.scss";

interface Props {
  value: number;
  color: string;
  textStyle: string;
  tracker?: boolean;
  className?: string;
}

const CircularIndicator = ({
  value,
  color,
  textStyle = "",
  tracker = false,
  className = "",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
    if (ref) {
      if (isInView === false) {
        ref.current?.classList.remove("show");
      } else {
        ref.current?.classList.add("show");
      }
      // let progress = 0;
      // const intervalId = setInterval(() => {
      //   if (progress >= value) {
      //     clearInterval(intervalId);
      //   } else {
      //     progress++;
      //     ref.current?.style.setProperty("--i", `${progress}`);
      //   }
      // }, 20);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`progress ${className} ${value < 50 ? "less" : ""}`}
      style={
        {
          "--i": value,
          "--clr": color,
        } as CSSProperties
      }
    >
      <h3 className={textStyle}>
        {value}
        <span>%</span>
      </h3>
      {tracker && (
        <div className="tracker-container">
          <div className="tracker"></div>
        </div>
      )}
    </div>
  );
};
export default CircularIndicator;

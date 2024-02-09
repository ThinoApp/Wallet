import { useEffect, useRef, useState } from "react";
import "./InvestissementVolatility.scss";
import { motion, useInView } from "framer-motion";

interface Props {
  currentValue: number;
}

const InvestissementVolatility = ({ currentValue = 30 }: Props) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const ref = useRef(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isInView) {
      timer = setInterval(() => {
        setDisplayProgress((prevProgress) =>
          prevProgress + 1 > currentValue ? currentValue : prevProgress + 1
        );
        progressRef.current &&
          (progressRef.current.style.backgroundPosition = "right center");
        // document.getElementById(
        //   "progressBar"
        // )?.style?.backgroundPosition = `right center`;
      }, 20);
    } else {
      setDisplayProgress(0);
    }

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div className="InvestissementVolatility" ref={ref}>
      <h3>Volatilité</h3>
      <div className="ProgressBar-container">
        <motion.div
          ref={progressRef}
          initial={{ width: 0 }}
          whileInView={{ width: `${currentValue}%` }}
          transition={{ duration: 0.3, delay: 0 }}
          className="ProgressBar-current-progress"
        >
          <div className="ProgressBar-line"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="ProgressBar-label"
          >
            {displayProgress}%
          </motion.p>
        </motion.div>
      </div>

      <p>
        Risque: <span>2</span>
        <span>/10</span>
      </p>
    </div>
  );
};
export default InvestissementVolatility;

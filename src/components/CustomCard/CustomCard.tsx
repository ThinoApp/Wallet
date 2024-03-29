import React, {
  useState,
  MouseEvent,
  useEffect,
  ReactNode,
  useRef,
  Children,
} from "react";
import "./CustomCard.scss";
import { motion, useSpring } from "framer-motion";

interface CustomCardProps {
  children: ReactNode;
  className: string;
  colorGloss: string;
  translateX?: string;
  activeHover?: boolean;
}
const CustomCard = ({
  children,
  colorGloss,
  className,
  translateX = "-100%",
  activeHover = true,
}: CustomCardProps) => {
  const [rotateXaxis, setRotateXaxis] = useState(0);
  const [rotateYaxis, setRotateYaxis] = useState(0);

  const [translateXaxis, setTranslateXaxis] = useState(0);
  const [translateYaxis, setTranslateYaxis] = useState(0);

  const [opacity, setOpacity] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const glossingRef = useRef<HTMLDivElement>(null);

  const dx = useSpring(0);
  const dy = useSpring(0);

  const px = useSpring(0);
  const py = useSpring(0);

  const opacityValue = useSpring(0);

  const handleMouseMove = (event: MouseEvent) => {
    if (ref.current) {
      // code to calculate degreeX and degreeY based on mouse position
      const { clientX, clientY } = event;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      let degreeX = ((clientY - centerY) / height) * 180;
      let degreeY = ((clientX - centerX) / width) * -180;

      degreeX = Math.max(Math.min(degreeX, 1), -1);
      degreeY = Math.max(Math.min(degreeY, 3), -3);

      setRotateXaxis(degreeX);
      setRotateYaxis(degreeY);

      setTranslateXaxis(clientX - left);
      setTranslateYaxis(clientY - top);

      setOpacity(1);
    }
  };

  const handleMouseEnd = () => {
    setRotateXaxis(0);
    setRotateYaxis(0);
    setOpacity(0);
  };

  useEffect(() => {
    Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          onMouseOver: (e) => {
            console.log(e.currentTarget);
          },
        } as React.HTMLAttributes<HTMLElement>);
        //   element.style.transform = "scale(1.1)";
        // });
      }
      return child;
    });
  }, []);
  useEffect(() => {
    dx.set(-rotateXaxis);
    dy.set(rotateYaxis);
  }, [rotateXaxis, rotateYaxis]);

  useEffect(() => {
    px.set(translateXaxis);
    py.set(translateYaxis);
  }, [translateXaxis, translateYaxis]);

  useEffect(() => {
    opacityValue.set(opacity);
  }, [opacity]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseEnd}
      style={{ rotateX: dx, rotateY: dy }}
      transformTemplate={(_, transform) => `perspective(1300px) ${transform}`}
      className={`${className} CustomCard`}
    >
      {activeHover
        ? Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                style: { ...child.props.style, transition: "0.3s ease-in" },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "scale(1)";
                },
              } as React.HTMLAttributes<HTMLElement>);
              //   element.style.transform = "scale(1.1)";
              // });
            }
            return child;
          })
        : children}
      <motion.div
        className={`glossing-green`}
        ref={glossingRef}
        style={{
          backgroundColor: colorGloss,
          opacity: opacityValue,
          position: "absolute",
          x: px,
          y: py,
          translateX,
          translateY: "-50%",
        }}
      />
    </motion.div>
  );
};
export default CustomCard;

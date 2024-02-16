import CircularIndicator from "@/components/CircularIndicator/CircularIndicator";
import "./EconomieObjectifItem.scss";
import { Calendar, Clock, MoreVertical, TrendingUp } from "lucide-react";
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EconomieObjectifProps {
  objectif: {
    id: string;
    goal: number;
    current: number;
    description: string;
    history: {
      date: string;
      value: number;
    }[];
  };
}

const EconomieObjectifItem = ({ objectif }: EconomieObjectifProps) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div
      onClick={() => setIsExpand(!isExpand)}
      className={`EconomieObjectifItem ${isExpand ? "expand" : "collapsed"}`}
    >
      <AnimatePresence mode="popLayout">
        {isExpand ? (
          <Fragment key="expanded">
            <motion.h3
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
            >
              Objectif {objectif.id}: £ {objectif.current} /
              <span>£ {objectif.goal}</span>
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="Objectif-statistique"
            >
              <CircularIndicator
                value={(objectif.current / objectif.goal) * 100}
                color="#fff"
                tracker
                className="after:!bg-[#417a3e] after:!filter-none scale-75"
                textStyle="circular-text"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex flex-col items-center"
              >
                <TrendingUp size={150} color="white" />
                <p>EVOLUTION</p>
              </motion.div>
            </motion.div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Description
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="Objectif-description"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              dolor! Temporibus incidunt corporis veniam porro ipsum saepe
              accusantium dicta
            </motion.p>
            <button className="Objectif-btn-deposer">DEPOSER</button>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {<Clock />}Historique
            </motion.h4>
            <motion.ul
              key="liste"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="Objectif-historique-depot"
            >
              {objectif.history.map((history) => {
                return (
                  <li>
                    <p className="Objectif-depot-date">
                      <Calendar />
                      {history.date}
                    </p>
                    <p className="Objectif-depot-value">£ {history.value}</p>
                    <MoreVertical color="#fff" />
                  </li>
                );
              })}
            </motion.ul>
          </Fragment>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="collapsed"
            className="collapsed-content"
          >
            <div
              className="Objectif-label"
              style={{
                height: `${(objectif.current / objectif.goal) * 100}%`,
              }}
            >
              <p>Objectif</p>
            </div>
            <h3>{objectif.id}</h3>
            <p className="Objectif-evolution">
              {(objectif.current / objectif.goal) * 100}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default EconomieObjectifItem;

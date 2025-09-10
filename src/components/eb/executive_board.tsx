import React from "react";
import styles from "./executive_board.module.scss";
import { ExecutiveBoardBox } from "./executive_box";
import { MemberType } from "../../utils/types";
import { LineHeader } from "../line_header";

interface ExecutiveBoardProps {
  members: MemberType[];
}

export const ExecutiveBoard: React.FC<ExecutiveBoardProps> = ({ members }) => (
  <div className={styles.wrapper}>
    <LineHeader text="EXECUTIVE BOARD" isLeft={true} />
    <div className={styles.grid}>
      {members.map((member, idx) => (
        <ExecutiveBoardBox
          key={member.name + idx}
          name={member.name}
          position={member.position}
          image={member.image}
        />
      ))}
    </div>
  </div>
);

import React from "react";
import styles from "./committees.module.scss";
import { CommitteeBox } from "./committees_box";
import { CommitteeType } from "../../utils/types";
import { LineHeader } from "../line_header";

interface CommitteesProps {
  committees: CommitteeType[];
}

export const Committees: React.FC<CommitteesProps> = ({ committees }) => (
  <div className={styles.wrapper}>
    <LineHeader text="COMMITTEES" />
    <div className={styles.committees}>
      {committees.map((committee, idx) => (
        <CommitteeBox
          key={committee.title + idx}
          title={committee.title}
          description={committee.description}
          image={committee.image}
          index={idx}
        />
      ))}
    </div>
  </div>
);

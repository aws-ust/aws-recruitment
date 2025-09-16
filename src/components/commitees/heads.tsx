import React from "react";
import styles from "./heads.module.scss";
import { useState } from "react";
import Image from "next/image";
import { MemberType } from "@/utils/types";
import { LineHeader } from "../line_header";

export const Heads: React.FC<{ members: MemberType[] }> = ({ members }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    if (expandedIndex === index) setExpandedIndex(null);
    else setExpandedIndex(index);
  };

  const colors = [styles.pink, styles.green, styles.orange, styles.purple];
  return (
    <>
      <LineHeader text="Committee Heads" />
      <div className={styles.container}>
        <div className={styles.members}>
          {members.map((member, index) => (
            <div
              key={index}
              className={`${styles.member} ${
                expandedIndex === index ? styles.expanded : ""
              } ${colors[index % colors.length]}`}
              onClick={() => handleMemberClick(index)}
            >
              {expandedIndex === index && (
                <div className={styles.details}>
                  <div className={styles.detailsText}>
                    <div className={styles.name}>{member.name}</div>
                    <div className={styles.position}>{member.position}</div>
                  </div>
                </div>
              )}

              <Image
                src={member.image}
                className={styles.image}
                alt={`${member.name} headshot`}
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

import { Section } from "@/components/section";
import styles from "./page.module.scss";
import { Aside } from "@/components/aside";
import { LineHeader } from "@/components/line_header";
import { Committees, CommitteeType } from "@/components/commitees/committees";

const committeesData: CommitteeType[] = [
  {
    title: "Executive (Internal)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "External Affairs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Finance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Secretariat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Human Resources",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Community Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Logistics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Documentation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Technicals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Developments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Publications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
  {
    title: "Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante augue, finibus et augue non, finibus rhoncus leo.",
    image: "/file.svg",
  },
];

export default function Home() {
  return (
    <div className={styles.body}>
      <Section title="Events" description="We are glad to have you here.">
        <Committees committees={committeesData} />
      </Section>
      <Aside
        title="About Us"
        description="Learn more about our mission and values."
      >
        <div className={styles.asideContent}></div>
      </Aside>
    </div>
  );
}

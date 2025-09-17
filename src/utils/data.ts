import { MemberType, CommitteeType, EventType, LinkType } from "./types";

export const executiveBoardData: MemberType[] = [
  {
    name: "Josh Kenn Viray",
    position: "Chief Executive Officer",
    image: "/eb/ChiefExecutiveOfficer-JoshKennViray.webp",
  },
  {
    name: "Alexa Palanog",
    position: "Chief Finance Officer",
    image: "/eb/ChiefFinanceOfficer-AlexaPalanog.webp",
  },
  {
    name: "Marc Axalan",
    position: "Chief Operating Officer",
    image: "/eb/ChiefOperatingOfficer-MarcAxalan.webp",
  },
  {
    name: "Sydney Padua",
    position: "Chief Creative Officer",
    image: "/eb/ChiefCreativeOfficer-SydneyPadua.webp",
  },
  {
    name: "Leigh Andrei Sigua",
    position: "Chief Relations Officer",
    image: "/eb/ChiefRelationOfficer-LeighSigua.webp",
  },
  {
    name: "Denzel To",
    position: "Chief Human Resource Officer",
    image: "/eb/ChiefHumanResourceOfficer-DenzelTo.webp",
  },
  {
    name: "Lance Owen Gulinao",
    position: "Chief Technology Officer",
    image: "/eb/ChiefTechnologyOfficer-LanceOwenGulinao.webp",
  },
  {
    name: "Jan Vincent Elleazar",
    position: "Corporate Secretary",
    image: "/eb/CorporateSecretary-JanVincentElleazar.webp",
  },
];

export const committeeHeadsData: MemberType[] = [
  {
    name: "Raphael Dacayo",
    position: "Director for Community Development Committee",
    image: "/heads/DirectorForCommunityDevelopment-RaphaelDacayo.webp",
  },
  {
    name: "Neil Casas",
    position: "Director for Development Committee",
    image: "/heads/DirectorForDevelopmentCommittee-NeilCasas.webp",
  },
  {
    name: "Zyro Gonzales",
    position: "Director for Documentation Committee",
    image: "/heads/DirectorForDocumentationCommittee-ZyroGonzales.webp",
  },
  {
    name: "John Francis Trinidad",
    position: "Director for External Affairs Committee",
    image:
      "/heads/DirectorForExternalAffairsCommittee-JohnFrancisTrinidad.webp",
  },
  {
    name: "Cristian Gannaban",
    position: "Director for Finance Committee",
    image: "/heads/DirectorForFinance-CristianGannaban.webp",
  },
  {
    name: "Alejandra Juico",
    position: "Director for Human Resource Committee",
    image: "/heads/DirectorForHumanResource-AlejandraJuico.webp",
  },
  {
    name: "Claire Abas",
    position: "Director for Logistics Committee",
    image: "/heads/DirectorForLogistics-ClaireAbas.webp",
  },
  {
    name: "Sofia Panganiban",
    position: "Director for Marketing Committee",
    image: "/heads/DirectorForMarketing-SofiaPanganiban.webp",
  },
  {
    name: "Edrine Esguerra",
    position: "Director for Media Committee",
    image: "/heads/DirectorForMediaCommitte-EdrineEsguerra.webp",
  },
  {
    name: "Vince Delos Santos",
    position: "Director for Publicity Committee",
    image: "/heads/DirectorForPublicity-VinceDelosSantos.webp",
  },
  {
    name: "Christian Dwayne Manuel",
    position: "Director for Secretariat Committee",
    image: "/heads/DirectorForSecretariatCommittee-ChristianDwayneManuel.webp",
  },
];

export const committeesData: CommitteeType[] = [
  {
    title: "Executive (Internal)",
    description:
      "Manages the rights and welfare of the organization and its members, the membership process and records, as well as ensuring integrity and accountability within the organization.",
    image: "/committee_icons/executive.webp",
  },
  {
    title: "External Affairs",
    description:
      "Acts as the liaison between the members and the external partners of the organization.",
    image: "/committee_icons/external affairs.webp",
  },
  {
    title: "Marketing",
    description:
      "Develops and implements comprehensive marketing plans and campaigns for events, while managing relationships with partners, sponsors, and publicity.",
    image: "/committee_icons/marketing.webp",
  },
  {
    title: "Finance",
    description:
      "Maintains and facilitates the flow of financial resources for events, and continuously develops initiatives to guarantee sustainable and consistent funding.",
    image: "/committee_icons/finance.webp",
  },
  {
    title: "Secretariat",
    description:
      "Handles the logistical and administrative matters of the organization, designing feedback mechanisms for the events, meetings, or activities of the organization.",
    image: "/committee_icons/secretariat.webp",
  },
  {
    title: "Human Resources",
    description:
      "Manages the members within the organization, including their welfare, satisfaction, and involvement in the organization's events, meetings, and activities.",
    image: "/committee_icons/hr.webp",
  },
  {
    title: "Community Development",
    description:
      "Plans and coordinates outreach programs with partner communities of the UST SIMBAHAYAN Community Development Office, while promoting social consciousness and involvement among members.",
    image: "/committee_icons/com dev.webp",
  },
  {
    title: "Logistics",
    description:
      "Serves as the overall manpower of the organization, ensuring equipment and materials are available during events, coordinating with the Facilities Management Office (FMO), and handling venue and equipment reservations.",
    image: "/committee_icons/logistics.webp",
  },
  {
    title: "Documentation",
    description:
      "Documents the projects and activities of the organization for whatever official reason it may be used.",
    image: "/committee_icons/docu.webp",
  },
  {
    title: "Technicals",
    description:
      "Oversees and operates the technical aspects of every event, meeting, and activity the organization holds.",
    image: "/committee_icons/tech.webp",
  },
  {
    title: "Development",
    description:
      "Creates and produces online resources for organizational use, and educates members on how to utilize them effectively.",
    image: "/committee_icons/dev.png",
  },
  {
    title: "Publications",
    description:
      "Designs graphical advertisements, publications, and promotional materials for the organization's social media accounts.",
    image: "/committee_icons/publi.webp",
  },
  {
    title: "Media",
    description:
      "Produces and edits all video and multimedia production for events, meetings, and promotional purposes of the organization.",
    image: "/committee_icons/media.webp",
  },
];

export const eventsData: EventType[] = [
  {
    title: "Online Applications are open now!",
    description:
      "From September 15 to 26, the headquarters of the AWS Learning Club – UST are wide open for aspiring builders, dreamers, and innovators. Register now! 🌩️",
    image: "/posts/post1.jpg",
    link: "https://www.facebook.com/share/p/1aWPgCszAZ/",
  },
  {
    title: "Welcome to the Cloud Generation of AWS Learning Club - UST! 🌩",
    description:
      "From vision to reality✨after a year of building, dreaming, and pushing boundaries, we proudly introduced the first-ever cloud organization in the University of Santo Tomas at the CICS Freshmen Orientation 2025. 🟡⚫",
    image: "/posts/post2.jpg",
    link: "https://www.facebook.com/share/p/19KoaWWEpf/",
  },
  {
    title: "AWS Learning Club Storms UST!",
    description:
      "We didn't expect such an incredible turnout, and your overwhelming support made it unforgettable! 🙌🚀 From the bottom of our hearts, we appreciate every one of you for joining and being part of this growing community! 💻🌥️",
    image: "/posts/post3.jpg",
    link: "https://www.facebook.com/share/p/1BJ6jWt92r/",
  },
];

export const navLinks: LinkType[] = [
  { name: "ABOUT", id: "about" },
  { name: "THE PEOPLE", id: "people" },
  { name: "EVENTS", id: "events" },
];

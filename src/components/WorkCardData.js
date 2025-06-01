import pro2 from "../assets/CTF.jpg";
import pro3 from "../assets/auditor.jpg";
import thermostat from "../assets/thermostat.jpg";
import linux1 from "../assets/linux-1.jpg";
import linux2 from "../assets/linux-2.jpg";

const ProjectCardData = [
  {
    imgsrc: pro3,
    title: "Linux Security Auditor",
    text: "A comprehensive security scanning tool for Linux systems that identifies misconfigurations and vulnerabilities across SSH and system configurations.",
    view: [linux1, linux2],
    source: "https://github.com/Alapp1/linux-security-auditor",
  },
  {
    imgsrc: thermostat,
    title: "IoT Thermostat Dashboard",
    text: "A collaborative home automation project where we developed a remote thermostat control system",
    view: "https://thermostat.up.railway.app/",
    source: "https://github.com/Alapp1/thermostat",
  },
  {
    imgsrc: pro2,
    title: "CTF Writeups",
    text: "A collection of CTF challenges collaboratively completed by students",
    view: "https://github.com/Alapp1/CTF-Writeups",
    source: "https://github.com/Alapp1/CTF-Writeups",
  },
];

export default ProjectCardData;

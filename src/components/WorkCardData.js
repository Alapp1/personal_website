import pro2 from "../assets/CTF.jpg"
import pro3 from "../assets/plane2.jpg"
import thermostat from "../assets/thermostat.jpg"

const ProjectCardData = [
    {
        imgsrc: pro3,
        title: "Flight Finder",
        text: "A pair of python scripts that use Selenium and Amadeus to find the cheapest flight on the web",
        view: "https://github.com/Alapp1/flight_finder",
        source: "https://github.com/Alapp1/flight_finder/blob/main/amadeus_flight_finder.py"
    },
    {
        imgsrc: thermostat,
        title: "IoT Thermostat Dashboard",
        text: "A collaborative home automation project where we developed a remote thermostat control system",
        view: "https://thermostat.up.railway.app/",
        source: "https://github.com/Alapp1/thermostat"
    },
    {
        imgsrc: pro2,
        title: "CTF Writeups",
        text: "A collection of CTF challenges collaboratively completed by students",
        view: "https://github.com/Alapp1/CTF-Writeups",
        source: "https://github.com/Alapp1/CTF-Writeups"
    }
];

export default ProjectCardData;
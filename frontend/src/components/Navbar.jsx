import logo from "../assets/logo.png"
import home from "../assets/home.png"
import report from "../assets/graph.png"
import people from "../assets/people.png"
import calendar from "../assets/calendar.png"
import docs from "../assets/docs.png"
export default function Navbar() { 
    return(
        <div className="flex pt-6 justify-center h-[725px] w-[60px] m-2 rounded-xl fixed top-0 left-0 z-10 bg-gray-100/80">
            <div className="flex flex-col gap-10">
                <img src={logo} alt="logo" className="w-8 h-8  " ></img>
                <img src={home} alt="home" className="w-8 h-8 bg-gray-900 rounded-xl p-1" ></img>
                <img src={report} alt="report" className="w-8 h-8 hover:bg-gray-200 rounded-lg" ></img>
                <img src={people} alt="people" className="w-8 h-8 hover:bg-gray-200 rounded-lg" ></img>
                <img src={calendar} alt="calendar" className="w-8 h-8 hover:bg-gray-200 rounded-lg" ></img>
                <img src={docs} alt="docs" className="w-8 h-8 hover:bg-gray-200 rounded-lg" ></img>
            </div>
        </div>
    );
}
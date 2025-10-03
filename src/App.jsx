import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import defaultProfilePic from "./assets/user.png";

function App() {

 const [staff, setStaff] = useState([]);

  const fetchStaff = async () => {
    try {
      const response = await fetch("http://localhost:5000/staff");
      const data = await response.json();
      setStaff(data);
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
  };

  return (
    <div className="flex flex-col  items-center h-[300vh] w-screen bg-black">
      <div className="w-[95%] h-[10vh] flex flex-row  items-center ">
        <h1 className="font-bold text-red-600 text-5xl ">
          Group Name we decide on here
        </h1>
        <button className="ml-auto btn btn-primary bg-red-600 text-white ml-4 rounded-lg p-2 " onClick={fetchStaff}>
            db
        </button>
        <button className="ml-auto btn btn-primary bg-red-600 text-white ml-4 rounded-lg p-2" 
          >
          To Home Page
        </button>

        <button
          className="ml-auto btn btn-primary bg-red-600 text-white ml-4 rounded-lg p-2"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/166-ueD3p6o1Z-NS121zrDiKiRNg0ev4cvF4SFrxoIFg",
              "_blank"
            )
          }
        >
          Open Google Doc
        </button>
      </div>
      <div className="flex flex-col w-[80%] h-[80%]">
        <h1 className="font-bold text-5xl text-white pb-4">List of Staff</h1>
        {/* Staff List Here */}
        <div className="flex flex-row p-6">
          <img
            src={defaultProfilePic}
            alt="Description"
            className="w-50 h-auto rounded-lg invert  "
          />
          <div className="flex flex-col pl-4 ">
            <h1 className="text-white text-5xl">aaa</h1>
            <h1 className="text-white text-4xl">CEO</h1>
            <h1 className="text-white text-2xl">Contact Info</h1>
            <p className="text-white text-2xl">Bio</p>
          </div>
        </div>
        <div className="flex flex-row p-6">
          <img
            src={defaultProfilePic}
            alt="Description"
            className="w-50 h-auto rounded-lg invert  "
          />
          <div className="flex flex-col pl-4 ">
            <h1 className="text-white text-5xl">Cameron Frazier</h1>
            <h1 className="text-white text-4xl">Position</h1>
            <h1 className="text-white text-2xl">Contact Info</h1>
            <p className="text-white text-2xl">Bio</p>
          </div>
        </div>
        <div className="flex flex-row p-6">
          <img
            src={defaultProfilePic}
            alt="Description"
            className="w-50 h-auto rounded-lg invert  "
          />
          <div className="flex flex-col pl-4 ">
            <h1 className="text-white text-5xl">Justin Fok</h1>
            <h1 className="text-white text-4xl">Position</h1>
            <h1 className="text-white text-2xl">Contact Info</h1>
            <p className="text-white text-2xl">Bio</p>
          </div>
        </div>
        <div className="flex flex-row p-6">
          <img
            src={defaultProfilePic}
            alt="Description"
            className="w-50 h-auto rounded-lg invert  "
          />
          <div className="flex flex-col pl-4 ">
            <h1 className="text-white text-5xl">Anson Ng</h1>
            <h1 className="text-white text-4xl">Position</h1>
            <h1 className="text-white text-2xl">Contact Info</h1>
            <p className="text-white text-2xl">Bio</p>
          </div>
        </div>
        <div className="flex flex-row p-6">
          <img
            src={defaultProfilePic}
            alt="Description"
            className="w-50 h-50 rounded-lg invert  "
          />
          <div className="flex flex-col pl-4 ">
            <h1 className="text-white text-5xl">Thuy An Nguyen </h1>
            <h1 className="text-white text-4xl">Position</h1>
            <h1 className="text-white text-2xl">Contact Info</h1>
            <p className="text-white text-2xl">Bio</p>
          </div>
          {/* Staff List Here FROM MYSQL HERE */}
        </div>
      </div>
      <div className="flex flex-col w-[80%] h-[80%]">
        <h1 className="font-bold text-5xl text-white pb-4">List of Staff from database, MySQL</h1>

        {staff.map((person, index) => (
          <div key={index} className="flex flex-row p-6">
            <img
              src={defaultProfilePic}
              alt=""
              className="w-50 h-auto rounded-lg invert"
            />
            <div className="flex flex-col pl-4">
              <h1 className="text-white text-5xl">{person.name}</h1>
              <h1 className="text-white text-4xl">{person.position}</h1>
              <h1 className="text-white text-2xl">{person.contact}</h1>
              <p className="text-white text-2xl">{person.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

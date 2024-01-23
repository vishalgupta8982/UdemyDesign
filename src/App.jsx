import "./App.css";
import React from "react";
 
function App() {
  return (
    <div>
      {/* code for home */}
      <div className="md:absolute h-[auto] md:h-screen w-[100%] md:w-[20%] top-[50px] right-[10%]  border border-gray-400 bg-white">
        <img
          src="https://img.freepik.com/free-photo/india-flag-wrinkled-dark-background-3d-render_1379-583.jpg?size=626&ext=jpg&ga=GA1.2.2039137184.1665405646&semt=sph"
          alt=""
        />
        <div className=" pl-4">
          <div className="flex flex-row mt-3 text-black font-medium justify-around ">
            <p className="">Personal </p>
            <p>Teams</p>
          </div>
          <div className="flex flex-row space-x-2 mt-4  ">
            <p className="line-through text-xl font-semibold">Rs. 499</p>
            <p className="text-lg">Rs. 99</p>
            <p className="text-lg">96% off</p>
          </div>
          <p className="text-red-700">2 hourse left at that price</p>
          <div className="my-5 text-center">
            <span className="button px-16 p-2 bg-purple-500 text-white">
              Buy this course
            </span>
          </div>
        </div>
      </div>
      <div className="txtBox  bg-[#2E2F31] ">
        <div className="home flex text-center md:text-left md:ml-[5%] md:w-[60%] items-center  text-white   ">
          <div>
            <div className=" text-center  inline-flex text-sm font-medium">
              <p>Development &nbsp; &gt; &nbsp; </p>
              <p>Web Development &nbsp; &gt; &nbsp; </p>
              <p>Angular</p>
            </div>
            <div className="head text-white mt-4">
              <p className="text-3xl font-bold">
                Angular-The Complete Guide (2023 Edition)
              </p>
              <p className="text-xl font-semibold mt-4">
                Master Angular and build awesome, reactive web apps with the
                successor of Angular js
              </p>
            </div>
            <div className="rating inline-flex items-center mt-4  space-x-3">
              <div>
                <p className="button p-1 rounded-md bg-yellow-300 text-black   ">
                  BestSeller
                </p>
              </div>
              <div className="star flex flex-row text-yellow-400">
                <p className=" ">4.6</p>
                <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              </div>
              <p className="text-blue-500 text-sm font-medium">192 ratings</p>
            </div>
            <p className="text-blue-500 text-sm font-medium mt-2">
              Created by Vishal Gupta
            </p>
          </div>
        </div>
      </div>
      <div className="about   md:ml-[5%] md:w-[60%] mx-2 border border-solid border-gray-400 mt-3 p-4  ">
        <p className="text-xl font-bold">What You'll learn</p>
        <div className="flex flex-col md:flex-row md:justify-between  md:space-x-4">
          <div className="text-sm mt-2 font-medium ">
            <p>
              &#x2713;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Reiciendis, consequatur. Exercitationem vitae !
            </p>
            <br></br>
            <p>
              &#x2713;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Perspiciatis, quia.
            </p>
            <br></br>
          </div>
          <div className="text-sm md:mt-2 font-medium  ">
            <p>
              &#x2713;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Reiciendis, consequatur. Exercitationem vitae !
            </p>
            <br></br>
            <p>
              &#x2713;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Perspiciatis, quia.
            </p>
            <br></br>
          </div>
        </div>
      </div>
      <div className="about w-[100%] p-4 md:ml-[5%] md:w-[60%] mt-5  ">
        <p className="text-xl font-bold">This course includes:</p>
        <div className="flex flex-row ">
          <div className="text-sm mt-2 font-medium space-y-4">
            <p>&#x2713;&nbsp;&nbsp;36 hours demand on videos</p>
            <p>&#x2713;&nbsp;&nbsp;Assignments</p>
            <p>&#x2713;&nbsp;&nbsp;47 articles</p>
          </div>
          <div className="text-sm mt-2 font-medium space-y-4 ml-[auto] ">
            <p>&#x2713;&nbsp;&nbsp;36 hours demand on videos</p>
            <p>&#x2713;&nbsp;&nbsp;Assignments</p>
            <p>&#x2713;&nbsp;&nbsp;47 articles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

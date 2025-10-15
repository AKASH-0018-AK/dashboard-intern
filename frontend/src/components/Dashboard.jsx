import React from 'react';
import searchuser from '../assets/searchuser.png';
import linkedin from '../assets/linkedin.png';
import git from '../assets/git.png';
import hackerrank from '../assets/hackerrank.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import settings from '../assets/setting.png';
import notification from '../assets/notification.png';
import profile from '../assets/profile1.png';
import arrow from '../assets/downarrow.png';
import call from "../assets/call.png"
import message from "../assets/message.png"
import people2 from "../assets/people2.png"
import messages from "../assets/messages.png"
import award from "../assets/award.png"
import inarrow from "../assets/in.png"
import doarrow from "../assets/de.png"


export default function Dashboard() {
  return (
    <div className="flex flex-col h-full ml-13 mb-5 pt-3 px-4 lg:px-8">
      <div className="flex flex-col border-b-2 border-gray-300">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 px-2 lg:px-1 mb-4">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">Good Morning, Akash</h1>
            <p className="text-sm pl-1 mt-1">You have a meeting</p>
          </div>
          <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
            <div className="flex items-center px-3 w-full sm:w-[250px] rounded-lg bg-white">
              <img src={searchuser} alt="User" className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 focus:outline-none focus:ring-white"
              />
            </div>
            <div className="bg-[#c0d7ed] p-2 rounded-xl">
              <img src={settings} alt="setting" className="w-6 h-6" />
            </div>
            <div className="bg-[#c0d7ed] p-2 rounded-xl">
              <img src={notification} alt="notification" className="w-6 h-6" />
            </div>
            <div className="bg-[#c0d7ed] p-2 rounded-xl flex justify-between gap-2">
              <img src={profile} alt="profile" className="border rounded-full p-1 w-6 h-6" />
              <img src={arrow} alt="arrow" className="p-1 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row mt-4 gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            <div className="flex flex-col bg-purple-200 min-h-[300px] rounded-xl shadow-md p-3">
             <h1 className="flex justify-between text-lg font-semibold  mb-2">Total Applicants<img src={people2} alt="people" className="flex w-7 h-7 "/></h1>
             <div className="flex ">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-widest p-4 mb-4">+120</h1>
              <div className="flex flex-col">
              <div className="flex items-center justify-center rounded-full bg-white/50 w-15 h-7 mt-6 pl-2">
              <img src={inarrow} alt="people" className=" w-4 h-4 "/><p className="px-2 text-sm flex items-center text-green-600">24%</p>
              </div>
              <p className="text-[10px] py-1 text-gray-600 px-1">vs last week</p>
              </div>
              </div>
              <div className="flex px-1 gap-2 mt-auto items-end">
                <div className="flex flex-col gap-2">
                  <div className="w-[60px] h-[60px] bg-white/20 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.68) 0px, rgba(0, 0, 0, 0.66) 1px, transparent 1px, transparent 5px)`,
                        backgroundSize: "7px 7px",
                      }}
                    />
                  </div>
                  <div className="w-[60px] h-[50px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-[60px] h-[40px] bg-white/20 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.68) 0px, rgba(0, 0, 0, 0.66) 1px, transparent 1px, transparent 5px)`,
                        backgroundSize: "7px 7px",
                      }}
                    />
                  </div>
                  <div className="w-[60px] h-[40px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-[60px] h-[70px] bg-white/20 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.68) 0px, rgba(0, 0, 0, 0.66) 1px, transparent 1px, transparent 5px)`,
                        backgroundSize: "7px 7px",
                      }}
                    />
                  </div>
                  <div className="w-[60px] h-[80px] rounded-lg bg-gradient-to-t from-gray-800 to-gray-200"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-[60px] h-[80px] bg-white/20 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.68) 0px, rgba(0, 0, 0, 0.66) 1px, transparent 1px, transparent 5px)`,
                        backgroundSize: "7px 7px",
                      }}
                    />
                  </div>
                  <div className="w-[60px] h-[20px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-blue-200 min-h-[300px] rounded-xl shadow-md">
              <h1 className="flex justify-between text-lg font-semibold p-3">Interviewed<img src={messages} className="flex w-7 h-7  "/></h1>
              <div className="flex ">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-widest p-3 mb-4">+18</h1>
              <div className="flex flex-col">
              <div className="flex items-center justify-center rounded-full bg-white/50 w-15 h-7 mt-5 pl-2">
              <img src={doarrow} alt="people" className=" w-4 h-4 "/><p className="px-2 text-sm flex items-center text-red-600">14%</p>
              </div>
              <p className="text-[10px] py-1 text-gray-600 px-1">vs last week</p>
              </div>
              </div>
              <div className="flex px-5 gap-2 items-end mt-auto mb-4">
                <div className="w-[60px] h-[100px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                <div className="w-[60px] h-[80px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                <div className="w-[60px] h-[60px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                <div className="w-[60px] h-[110px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-col bg-green-200/50 min-h-[300px] rounded-xl shadow-md">
              <h1 className="flex justify-between text-lg font-semibold p-3">Job offers<img src={award} className="flex w-7 h-7 "/></h1>
              <div className="flex ">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-widest p-3 mb-4">+7</h1>
              <div className="flex flex-col">
              <div className="flex items-center justify-center rounded-full bg-white/50 w-15 h-7 mt-5 pl-2">
              <img src={inarrow} alt="people" className=" w-4 h-4 "/><p className="px-2 text-sm flex items-center text-green-600">30%</p>
              </div>
              <p className="text-[10px] py-1 text-gray-600 px-1">vs last week</p>
              </div>
              </div>
              <div className="flex px-5 mb-4 items-end gap-2 mt-auto">
                <div className="flex flex-col gap-2">
                  <div className="w-[60px] h-[70px] bg-white/20 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.68) 0px, rgba(0, 0, 0, 0.66) 1px, transparent 1px, transparent 5px)`,
                        backgroundSize: "7px 7px",
                      }}
                    />
                  </div>
                  <div className="w-[60px] h-[60px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-[60px] h-[50px] bg-white/20 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.68) 0px, rgba(0, 0, 0, 0.66) 1px, transparent 1px, transparent 5px)`,
                        backgroundSize: "7px 7px",
                      }}
                    />
                  </div>
                  <div className="w-[60px] h-[50px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-[60px] h-[80px] bg-white/20 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.68) 0px, rgba(0, 0, 0, 0.66) 1px, transparent 1px, transparent 5px)`,
                        backgroundSize: "7px 7px",
                      }}
                    />
                  </div>
                  <div className="w-[60px] h-[80px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-[60px] h-[70px] bg-white/20 rounded-lg relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.68) 0px, rgba(0, 0, 0, 0.66) 1px, transparent 1px, transparent 5px)`,
                        backgroundSize: "7px 7px",
                      }}
                    />
                  </div>
                  <div className="w-[60px] h-[50px] bg-gradient-to-t from-gray-800 to-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-gray-100/80 rounded-xl shadow-md pb-4">
            <div className="flex justify-between w-full px-3 py-3">
              <h1 className="font-semibold text-xl lg:text-2xl text-gray-800">Hiring Pipeline</h1>
              <button className="w-6 h-6 flex items-center justify-center pb-4 px-2 bg-[#DDE7F1] rounded-lg text-black text-4xl">
                ...
              </button>
            </div>
            <div className="overflow-x-auto px-4">
              <div className="flex items-center bg-white min-w-max lg:min-w-0 px-4 h-[45px] rounded-xl mb-3">
                <h1 className="text-sm font-light text-black w-32 flex-shrink-0">Job position</h1>
                <h1 className="text-sm font-light text-gray-400 hover:text-black w-32 flex-shrink-0">Applying period</h1>
                <h1 className="text-sm font-light text-gray-400 hover:text-black w-32 flex-shrink-0">Screening</h1>
                <h1 className="text-sm font-light text-gray-400 hover:text-black w-32 flex-shrink-0">Background check</h1>
                <h1 className="text-sm font-light text-gray-400 hover:text-black w-32 flex-shrink-0">Interviews</h1>
                <h1 className="text-sm font-light text-gray-400 hover:text-black w-32 flex-shrink-0">Technical test</h1>
                <h1 className="text-sm font-light text-gray-400 hover:text-black w-32 flex-shrink-0">Onboarding</h1>
              </div>
              <div className="space-y-3 min-w-max lg:min-w-0">
                <div className="flex items-center px-4">
                  <h1 className="text-sm font-black w-32 flex-shrink-0">Web Developer</h1>
                  <div className="flex gap-0">
                    <div className="w-32 h-[50px] bg-purple-100/50 rounded-lg shadow-sm flex items-center justify-center"><p>40</p></div>
                    <div className="w-32 h-[50px] bg-purple-100 rounded-lg shadow-sm flex items-center justify-center"><p>32</p></div>
                    <div className="w-32 h-[50px] bg-purple-200/50 rounded-lg shadow-sm flex items-center justify-center"><p>16</p></div>
                    <div className="w-32 h-[50px] bg-purple-200 rounded-lg shadow-sm flex items-center justify-center"><p>10</p></div>
                    <div className="w-32 h-[50px] bg-purple-300/50 rounded-lg shadow-sm flex items-center justify-center"><p>8</p></div>
                    <div className="w-32 h-[50px] bg-purple-300 rounded-lg shadow-sm flex items-center justify-center"><p>6</p></div>
                  </div>
                </div>
                <div className="flex items-center px-4">
                  <h1 className="text-sm font-black w-32 flex-shrink-0">Analyst</h1>
                  <div className="flex gap-0">
                    <div className="w-32 h-[50px] bg-blue-100/50 rounded-lg shadow-sm flex items-center justify-center"><p>19</p></div>
                    <div className="w-32 h-[50px] bg-blue-100 rounded-lg shadow-sm flex items-center justify-center"><p>10</p></div>
                    <div className="w-32 h-[50px] bg-blue-200/50 rounded-lg shadow-sm flex items-center justify-center"><p>5</p></div>
                    <div className="w-32 h-[50px] bg-blue-200 rounded-lg shadow-sm flex items-center justify-center"><p>2</p></div>
                  </div>
                </div>
                <div className="flex items-center px-4">
                  <h1 className="text-sm font-black w-32 flex-shrink-0">UX Designer</h1>
                  <div className="flex gap-0">
                    <div className="w-32 h-[50px] bg-green-100/50 rounded-lg shadow-sm flex items-center justify-center"><p>18</p></div>
                    <div className="w-32 h-[50px] bg-green-100 rounded-lg shadow-sm flex items-center justify-center"><p>13</p></div>
                  </div>
                </div>
                <div className="flex items-center px-4">
                  <h1 className="text-sm font-black w-32 flex-shrink-0">Mobile Developer</h1>
                  <div className="flex gap-0">
                    <div className="w-32 h-[50px] bg-rose-100/50 rounded-lg shadow-sm flex items-center justify-center"><p>26</p></div>
                    <div className="w-32 h-[50px] bg-rose-100 rounded-lg shadow-sm flex items-center justify-center"><p>21</p></div>
                    <div className="w-32 h-[50px] bg-rose-200/50 rounded-lg shadow-sm flex items-center justify-center"><p>18</p></div>
                    <div className="w-32 h-[50px] bg-rose-200 rounded-lg shadow-sm flex items-center justify-center"><p>10</p></div>
                    <div className="w-32 h-[50px] bg-rose-300/50 rounded-lg shadow-sm flex items-center justify-center"><p>5</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  bg-white w-full xl:w-[300px] rounded-xl shadow-md p-4">
          <div className="flex justify-between pb-3 w-full mb-4">
            <h1 className="font-semibold text-gray-800">Platform Insight</h1>
            <button className="w-6 h-6 flex items-center justify-center pb-4 px-2 bg-[#DDE7F1] rounded-lg text-black text-4xl">
              ...
            </button>
          </div>
          <div className="flex flex-row pb-10 xl:flex-col gap-8 flex-wrap">
            <div className="flex items-center">
              <img src={linkedin} alt="LinkedIn" className="w-7 h-7 " />
              <div className="ml-2 flex flex-col w-full ">
                <div className="flex justify-between">
                  <p>LinkedIn</p>
                  <p className='mr-5'>60%</p>
                </div>
                <div className="relative w-[90%] bg-[#DDE7F1] rounded-full h-1 mt-1">
                <div
                  className="bg-gray-800 h-1 rounded-full"
                  style={{ width: '60%' }}>
                </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={git} alt="git" className="w-7 h-7 " />
              <div className="ml-2 flex flex-col w-full ">
                <div className="flex justify-between">
                  <p>github</p>
                  <p className='mr-5'>20%</p>
                </div>
                <div className="relative w-[90%] bg-[#DDE7F1] rounded-full h-1 mt-1">
                <div
                  className="bg-gray-800 h-1 rounded-full"
                  style={{ width: '20%' }}>
                </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={insta} alt="instgram" className="w-7 h-7 " />
              <div className="ml-2 flex flex-col w-full ">
                <div className="flex justify-between">
                  <p>Instgram</p>
                  <p className='mr-5'>10%</p>
                </div>
                <div className="relative w-[90%] bg-[#DDE7F1] rounded-full h-1 mt-1">
                <div
                  className="bg-gray-800 h-1 rounded-full"
                  style={{ width: '10%' }}>
                </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={hackerrank} alt="HackerRank" className="w-7 h-7" />
              <div className="ml-2 flex flex-col w-full ">
                <div className="flex justify-between">
                  <p>Instgram</p>
                  <p className='mr-5'>7%</p>
                </div>
                <div className="relative w-[90%] bg-[#DDE7F1] rounded-full h-1 mt-1">
                <div
                  className="bg-gray-800 h-1 rounded-full"
                  style={{ width: '7%' }}>
                </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={facebook} alt="Facebook" className="w-7 h-7" />
              <div className="ml-2 flex flex-col w-full ">
                <div className="flex justify-between">
                  <p>Instgram</p>
                  <p className='mr-5'>3%</p>
                </div>
                <div className="relative w-[90%] bg-[#DDE7F1] rounded-full h-1 mt-1">
                <div
                  className="bg-gray-800 h-1 rounded-full"
                  style={{ width: '3%' }}>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between border-b-2 border-gray-200 pb-2 w-full mb-4'>
            <h1 className="font-semibold text-gray-800">Applicants</h1>
          </div>
          <div className="flex items-center pt-2 gap-3">
              <img src={profile} alt='profiles' className='w-10 h-10 rounded-full bg-black'></img>
              <div >
                <h1 className='text-medium text-gray-700'>Hubert Gregory</h1>
                <h1 className='text-sm text-gray-400'>Hubert Gregory@gmail.com</h1>
              </div>
          </div>
          <div className='flex justify-between pt-4'>
            <div className='border w-[25%] h-[25px] bg-black rounded-2xl items-center flex justify-center' >
              <p className='text-white'>View</p>
            </div>
            <div className='flex gap-3 pr-3'>
              <img src={call} alt="call" className='w-6 h-6'></img>
              <img src={message} alt="message" className='w-6 h-6'></img>
            </div>
          </div>
          <div className="flex items-center pt-6 gap-3">
              <img src={profile} alt='profiles' className='w-10 h-10 rounded-full bg-black'></img>
              <div >
                <h1 className='text-medium text-gray-700'>Hubert Gregory</h1>
                <h1 className='text-sm text-gray-400'>Hubert Gregory@gmail.com</h1>
              </div>
          </div>
          <div className='flex justify-between pt-4'>
            <div className='border w-[25%] h-[25px] bg-black rounded-2xl items-center flex justify-center' >
              <p className='text-white'>View</p>
            </div>
            <div className='flex gap-3 pr-3'>
              <img src={call} alt="call" className='w-6 h-6'></img>
              <img src={message} alt="message" className='w-6 h-6'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
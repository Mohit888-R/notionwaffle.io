import { React, useEffect, useState } from "react";
import Image from "next/image";
import NotionLogo from "../../assets/notionlogo.png";
import star from "../../assets/star.svg";
import blog from "../../assets/blog.svg";
import play from "../../assets/play.svg";
import setting from "../../assets/setting.svg";
import DownArrow from "../../assets/drop_down_arrow.svg";
import avatar from "../../assets/avatar1.png";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import UserProfile from "../popup/UserProfile";

const NavTabs = [
  {
    tab: "Story",
    link: "/story",
  },
  {
    tab: "Templates",
    subMenu: [
      {
        TabLogo: star,
        tab: "Premium Templates",
        tabDesc: "Get productive and organized with premium Notion templates.",
        link: "/premium-notion-templates",
      },
      {
        TabLogo: star,
        tab: "Simple Templates",
        tabDesc: "Get started using Notion with simple Notion templates.",
        link: "/simple-notion-templates",
      },
      {
        TabLogo: star,
        tab: "Free Templates",
        tabDesc: "Get started using Notion with free Notion templates.",
        link: "/free-notion-templates",
      },
    ],
  },
  {
    tab: "Courses",
    link: "/courses",
  },
  {
    tab: "Resources",
    subMenu: [
      {
        TabLogo: blog,
        tab: "Blog",
        tabDesc: "Learn Notion and discover new resources on our blog.",
        link: "/blog",
      },
      {
        TabLogo: play,
        tab: "Video Lessons",
        tabDesc: "Learn Notion faster and easier with video lessons.",
        link: "/notion-video-lessons",
      },
      {
        TabLogo: setting,
        tab: "Tools",
        tabDesc: "Discover Notion tools to power up your workspace.",
        link: "/notion-tools",
      },
    ],
  },
];

function navbar({ setopen }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [Index, setIndex] = useState(0);
  const [userId, setUserId] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
    console.log(":::",popupOpen)
  const handleSave = () => {
    router.push("/savedproducts");
  };

  useEffect(() => {
    if (
      Cookies.get("userId") === undefined ||
      Cookies.get("userId") === null ||
      Cookies.get("userId") === ""
    ) {
      setUserId(true);
    } else {
      setUserId(false);
    }
  }, []);

  return (
    <div>
      {/* // desktop view */}
      <div className="md:flex md:justify-between md:px-8 md:py-6 md:items-center hidden border-b drop-shadow-sm">
        {/* logo */}
        <a href="/" className="">
          <div className="flex">
            <Image
              src={NotionLogo}
              width={120}
              height={"auto"}
              className="object-contain"
            />
          </div>
        </a>
        {/* nav tabs */}

        <div
          className="px-20 flex gap-10 text-[16px] items-center font-semibold"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          {NavTabs.map((items, index) => {
            return (
              <div key={index}>
                {items.subMenu ? (
                  <div
                    key={index}
                    className=""
                    onMouseLeave={() => {
                      setDropdown(false);
                      setIndex(0);
                    }}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      className="flex items-center "
                      onMouseEnter={() => {
                        setDropdown(true);
                        setIndex(index);
                      }}
                    >
                      {items.tab}
                      <Image
                        src={DownArrow}
                        alt="drop-down-arrow"
                        width="40"
                        height="40"
                        className="-ml-2 mt-1"
                      />
                    </button>
                    {dropdown && Index == index ? (
                      <div className="border p-2 rounded-md absolute top-13 gap-4 bg-slate-200 w-[400px] ">
                        {items.subMenu.map((item, index) => (
                          <div
                            key={index}
                            className="hover:bg-white rounded-md drop-shadow-md my-2 border px-4 py-2"
                          >
                            <div className="flex space-x-2">
                              <Image
                                src={item.TabLogo}
                                width={20}
                                height={20}
                                className=""
                              />
                              <a
                                href={item.link}
                                className="text-[18px] font-semibold"
                              >
                                {" "}
                                {item.tab}{" "}
                              </a>
                            </div>
                            <div className="text-[16px] font-normal">
                              {item.tabDesc}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ) : (
                  <a href={items.link}>{items.tab}</a>
                )}
              </div>
            );
          })}
        </div>

        {userId ? (
          <div className="flex items-center justify-center gap-4">
            {router?.route !== "/Auth/Login" ? (
              <div>
                <a href="/Auth/Login" className="login">
                  <button className="bg-black rounded-md text-[15px] text-white py-1 px-2">
                    Log In
                  </button>
                </a>
              </div>
            ) : (
              <div>
                <a href="/Auth/register" className="login">
                  <button className="bg-black rounded-md text-[15px] text-white py-1 px-2">
                    Sign up
                  </button>
                </a>
              </div>
            )}

            <div>
              <div onClick={() => setOpen(!open)}>
                <Image
                  src={avatar}
                  className="rounded-full w-10 h-10 border border-black"
                />
              </div>
              <div className="absolute top-20 -m-2 right-4 ">
                {open ? (
                  <ul className="border border-black  text-center bg-slate-200 rounded-md">
                    <li
                      className="border-b border-black p-2 hover:cursor-pointer"
                      onClick={() => router.push("/Auth/Login")}
                    >
                      Profile
                    </li>
                    <li
                      className="border-b border-black p-2 hover:cursor-pointer"
                      onClick={() => router.push("/Auth/Login")}
                    >
                      Saved
                    </li>
                    <li
                      className="border-b border-black p-2 hover:cursor-pointer"
                      onClick={() => router.push("/Auth/Login")}
                    >
                      My Orders
                    </li>
                  </ul>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div onClick={() => setOpen(!open)}>
              <Image
                src={avatar}
                className="rounded-full w-10 h-10 border border-black"
              />
            </div>
            <div className="absolute top-20 -m-2 right-4 ">
              {open ? (
                <ul className="border border-black  text-center bg-slate-200 rounded-md">
                  <li
                    className="border-b border-black p-2 hover:cursor-pointer"
                    onClick={() => {
                      setPopupOpen(true);
                    }}
                  >
                    Profile
                  </li>
                  <li
                    className="border-b border-black p-2 hover:cursor-pointer"
                    onClick={() => handleSave()}
                  >
                    Saved
                  </li>
                  <li className="border-b border-black p-2 hover:cursor-pointer">
                    My Orders
                  </li>
                  <li
                    className="border-b border-black p-2 hover:cursor-pointer"
                    onClick={() => {
                      Cookies.remove("userId");
                      router.push("/");
                      setOpen(false);
                    }}
                  >
                    Logout
                  </li>
                </ul>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        )}
      </div>
        { (<UserProfile popupOpen={popupOpen} setPopupOpen={setPopupOpen}/>)
        }
    </div>
  );
} 

export default navbar;

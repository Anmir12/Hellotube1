import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import {useSelector } from "react-redux/es/hooks/useSelector";
import { cacheStore } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, SetShowSuggestions] = useState(false);
  const searchCache = useSelector(store =>store.search);
  useEffect(() => {
    //  console.log(searchQuery);
    const timer = setTimeout(() =>{
   if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }
    else {
      getSearchSuggestions();
    }}, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //  console.log(json[1])
    setSuggestions(json[1]);
    dispatch(cacheStore({
      [searchQuery]:json[1],
    }))
  };
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="h-10 grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          src="/images/hamburger.png"
          alt="hamburger"
          className="h-6 mt-2 ml-2 cursor-pointer"
          onClick={() => toggleHandler()}
        />

        <img
          src="/images/helloTubelogo.png"
          alt="logo"
          className="h-10 mx-5 "
        />
        <h1 className="font-bold text-blue-700 text-xl">HelloTube</h1>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="mt-1 w-1/2 border border-gray-400 rounded-l-full p-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => SetShowSuggestions(true)}
            onBlur={() => SetShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full p-1 hover:bg-gray-500">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white w-[36rem] rounded-xl shadow-2xl">
            <ul>
              {suggestions.map((s) => (
                <li className="hover:bg-gray-400 shadow-lg">{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img src="/images/user.svg" alt="userIcon" className="h-9" />
      </div>
    </div>
  );
};

export default Header;

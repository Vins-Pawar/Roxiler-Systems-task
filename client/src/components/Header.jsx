import React from "react";

const Header = () => {
    return (
        <div className="w-full  flex justify-center bg-slate-400 bg-opacity-20 shadow-sm shadow-zinc-400">
            <div className="w-52 h-52 m-4 p-8 bg-white rounded-full flex items-center justify-center shadow-lg shadow-black">
                <h1 className="text-wrap text-center text-3xl font-bold ">
                    Transcation Dashboard
                </h1>
            </div>
        </div>
    );
};

export default Header;

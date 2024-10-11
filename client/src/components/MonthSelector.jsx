import React from "react";

const MonthSelector = ({ month, handleMonthChange }) => {
    return (
        <div className="">
            <label htmlFor="month" className="mx-2 font-bold">
                Select Month:{" "}
            </label>
            <select
                id="month"
                value={month}
                onChange={handleMonthChange}
                className=" px-4 py-2 border border-zinc-500 rounded-lg"
            >
                <option value={1}>January</option>
                <option value={2}>February</option>
                <option value={3}>March</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>
                {/* <option value={""}>None</option> */}
            </select>
        </div>
    );
};

export default MonthSelector;

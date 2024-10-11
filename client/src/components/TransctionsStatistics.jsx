import React, { useEffect, useState } from "react";

const TransctionsStatistics = ({ month }) => {
    const [stats, setStats] = useState(null);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
     
    const getTransctionsStatistics = async () => {
        const data = await fetch(
            `http://localhost:8001/api/products/monthlystats/${month}`
        );
        const json = await data.json();
        
        setStats(json);
    };
    useEffect(() => {
        getTransctionsStatistics();
    }, [month]);
    return (
        <div className="flex justify-center items-center ">
            <div className="  p-6">
                <h1 className="text-center text-4xl font-bold m-4">
                    Transctions Statistics : {months[month - 1]}
                </h1>
                <div className="text-xl bg-yellow-300 p-8  my-8 rounded-lg font-medium shadow-lg shadow-black bg-opacity-60">
                    <table className=" w-full ">
                        <tbody>
                            <tr>
                                <td className="p-2">Total Sale</td>
                                <td className="p-2">
                                    {stats?.totalSaleAmount}
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">Total Sold Items</td>
                                <td className="p-2">{stats?.totalSoldItems}</td>
                            </tr>
                            <tr>
                                <td className="p-2">Total Not Sold Items </td>
                                <td className="p-2">
                                    {stats?.totalNotSoldItems}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TransctionsStatistics;

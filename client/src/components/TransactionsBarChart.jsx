import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "./BarChar";

Chart.register(CategoryScale);

const TransactionsBarChart = ({ month }) => {
    const [yAxisData, setYAxisData] = useState(null);
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

    const getBarGraphData = async () => {
        const data = await fetch(
            `http://localhost:8001/api/products/barchart/${month}`
        );
        const json = await data.json();
       
        const dataset = json.map((record) => record.count);
       
        setYAxisData(dataset);
    };

    useEffect(() => {
        getBarGraphData();
    }, [month]);

    return (
        <div className="w-full mx-auto p-5">
            <h1 className="text-center text-4xl font-bold m-7">
                Transactions Bar Chart : {months[month - 1]}
            </h1>
            <div className="flex justify-center items-centerbg-yellow-500">
                <BarChart yAxisData={yAxisData} />
            </div>
        </div>
    );
};

export default TransactionsBarChart;

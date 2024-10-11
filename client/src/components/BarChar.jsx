import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController
);

const BarChart = ({ yAxisData }) => {
    const data = {
        labels: [
            "0-100",
            "101-200",
            "201-300",
            "301-400",
            "401-500",
            "501-600",
            "601-700",
            "701-800",
            "801-900",
            "901-Above",
        ],
        datasets: [
            {
                label: "total number of items in a price range of a month",
                backgroundColor: [
                    "rgba(153, 51, 51, 0.8)", // Darker shades
                    "rgba(204, 102, 0, 0.8)",
                    "rgba(204, 153, 0, 0.8)",
                    "rgba(0, 153, 153, 0.8)",
                    "rgba(0, 102, 204, 0.8)",
                ],
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 1,
                data: yAxisData,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Number of Items",
                    color: "black",
                    font: {
                        size: 16,
                        weight: "bold",
                    },
                },
                ticks: {
                    color: "black",
                     
                    font: {
                        size: 14,
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Price Range", // X-axis label
                    color: "black",
                    font: {
                        size: 16, // Optional: size of the label text
                        weight: "bold",
                    },
                },
                ticks: {
                    color: "black",
                     
                    font: {
                        size: 14,
                    },
                    
                     
                },
                 
            },
        },
        barThickness: 50, // Control bar thickness
        categoryPercentage: 0.5, // Reduce space between bars
        barPercentage: 1, // Adjust bar width further

        animations: {
            // Set up animations for the bars
            tension: {
                duration: 1000, // Duration of the transition (in milliseconds)
                easing: 'easeInOutQuad', // Easing function for a smooth transition
                from: 0,
                to: 1,
                loop: false,
            },
            x: {
                duration: 1000,
                easing: 'easeInOutQuad',
            },
            y: {
                duration: 1000,
                easing: 'easeInOutQuad',
            },
        },
    };

    return (
        <div className="flex justify-center items-center w-10/12">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;

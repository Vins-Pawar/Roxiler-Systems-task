import ProductTranscation from "../models/productTranscation.model.js";

export const countDocuments = async (query = {}) => {
    return await ProductTranscation.countDocuments(query);
};

export const getProducts = async (query = {}, skip, limit = 10) => {
    return await ProductTranscation.find(query).skip(skip).limit(limit);
};

export const getMonthlyTotalSaleAmount = async (month) => {
    return await ProductTranscation.aggregate([
        {
            $match: {
                sold: true,
                month: month,
            },
        },
        {
            $group: {
                _id: null,
                totalAmount: { $sum: "$price" },
            },
        },
    ]);
};

export const getBarGraphData = async (month) => {
    return await ProductTranscation.aggregate([
        {
            $match: {
                month: month,
            },
        },
        {
            $bucket: {
                groupBy: "$price",
                boundaries: [0, 101, 201, 301, 401, 501, 601, 701, 801, 901],
                default: "901-above",
                output: {
                    count: { $sum: 1 },
                },
            },
        },
    ]);
};

export const getPieChartData = async (month) => {
    return await ProductTranscation.aggregate([
        {
            $match: {
                month: selectedMonth,
            },
        },
        {
            $group: {
                _id: "$category",
                count: { $sum: 1 },
            },
        },
    ]);
};

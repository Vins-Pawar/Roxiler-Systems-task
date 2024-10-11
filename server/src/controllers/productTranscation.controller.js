import ProductTranscation from "../models/productTranscation.model.js";
import {
    countDocuments,
    getBarGraphData,
    getMonthlyTotalSaleAmount,
    getPieChartData,
    getProducts,
} from "../services/productTrascation.service.js";

export const getAllProductTranscations = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const month = Number(req.query.month) || null;

        const query = {};
        if (month) {
            query.month = month;
        }

        const totalProducts = await countDocuments(query);

        const allProducts = await getProducts(query, skip, limit);

        const totalPages = Math.ceil(totalProducts / limit);

        if (page > totalPages) {
            return res.status(400).json("No Data found");
        }

        return res.status(200).json({
            currentPage: page,
            limit: limit,
            totalPages: totalPages,
            totalProducts: totalProducts,
            totalProductsOnPage: allProducts.length,
            products: allProducts,
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const searchProduct = async (req, res) => {
    const searchText = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const month = Number(req.query.month);

    const skip = (page - 1) * limit;

    try {
        const query = {};

        if (searchText) {
            query.$or = [
                { title: { $regex: searchText, $options: "i" } },
                { description: { $regex: searchText, $options: "i" } },
            ];
        }
        if (month) {
            query.month = month;
        }

        const totalRecords = await countDocuments(query);

        const products = await getProducts(query, skip, limit);

        res.json({
            totalRecords: totalRecords,
            currentPage: page,
            totalPages: Math.ceil(totalRecords / limit),
            products: products,
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const monthlyStats = async (req, res) => {
    const { month } = req.params;

    try {
        const selectedMonth = parseInt(month);

        const totalSaleAmount = await getMonthlyTotalSaleAmount(selectedMonth);

        const totalSoldItems = await countDocuments({
            sold: true,
            month: selectedMonth,
        });

        const totalNotSoldItems = await ProductTranscation.countDocuments({
            sold: false,
            month: selectedMonth,
        });

        res.json({
            totalSaleAmount: totalSaleAmount[0]?.totalAmount || 0,
            totalSoldItems,
            totalNotSoldItems,
        });
    } catch (error) {
        console.error("Error fetching statistics:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const barchart = async (req, res) => {
    const { month } = req.params;
    const priceRanges = [
        { range: "0-100", min: 0, max: 100 },
        { range: "101-200", min: 101, max: 200 },
        { range: "201-300", min: 201, max: 300 },
        { range: "301-400", min: 301, max: 400 },
        { range: "401-500", min: 401, max: 500 },
        { range: "501-600", min: 501, max: 600 },
        { range: "601-700", min: 601, max: 700 },
        { range: "701-800", min: 701, max: 800 },
        { range: "801-900", min: 801, max: 900 },
        { range: "901-above", min: 901, max: Infinity },
    ];

    try {
        const selectedMonth = parseInt(month);

        const priceRangeData = await getBarGraphData(selectedMonth);

        const response = priceRanges.map((range) => {
            const bucket = priceRangeData.find(
                (b) => b._id === range.min || b._id === range.range
            );
            return {
                range: range.range,
                count: bucket ? bucket.count : 0,
            };
        });

        res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching price range data:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const piechart = async (req, res) => {
    const { month } = req.params;

    try {
        const selectedMonth = parseInt(month);

        const categoryData = await getPieChartData(selectedMonth);

        res.json(categoryData);
    } catch (error) {
        console.error("Error fetching category data:", error);
        res.status(500).json({ message: "Server error" });
    }
};

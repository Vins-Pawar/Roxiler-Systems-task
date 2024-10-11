import React, { useEffect, useState } from "react";
import MonthSelector from "./MonthSelector";
import Pagenation from "./Pagenation";
import TransctionsStatistics from "./TransctionsStatistics";
import Header from "./Header";
import TransactionsBarChart from "./TransactionsBarChart";
import SearchProduct from "./SearchProduct";
import TrascationTable from "./TransctionsTable";

const Body = () => {
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [page, setPage] = useState(1);

    const [month, setMonth] = useState(3);
    const [totalPages, setTotalPages] = useState(0);
    const [searchInput, setSearchInput] = useState("");

    const fetchProducts = async () => {
        const data = await fetch(
            `http://localhost:8001/api/products/alltransactions?month=${month}&page=${page}&limit=10`
        );
        const json = await data.json();

        setProducts(json.products);
        setFilteredProducts(json.products);
        setTotalPages(json.totalPages);
    };

    useEffect(() => {
        fetchProducts();
    }, [page, month]);

    const getSearchData = async () => {
        const data = await fetch(
            `http://localhost:8001/api/products/searchproduct?month=${month}&page=${page}&limit=10&search=${searchInput}`
        );
        const json = await data.json();

        return json;
    };

    const handleSearch = async (e) => {
        if (!searchInput) {
            setFilteredProducts(products);
            return;
        }

        const searchData = await getSearchData();

        if (searchData && searchData.products) {
            setPage(1);
            setFilteredProducts(searchData.products);
        }
        setSearchInput("");
    };

    return (
        <div className="w-full bg-slate-300 pb-4">
            <Header />
            <div className="w-10/12 m-auto ">
                <div className="">
                    <h1 className="text-4xl text-center p-3 font-bold mt-4">
                        Transctions Table
                    </h1>

                    <div className="flex justify-between mx-8 p-4 my-4 items-center ">
                        <SearchProduct
                            searchInput={searchInput}
                            setSearchInput={setSearchInput}
                            handleSearch={handleSearch}
                        />
                        <MonthSelector
                            month={month}
                            handleMonthChange={(e) => {
                                setMonth(e.target.value);
                            }}
                        />
                    </div>

                    {filteredProducts && (
                        <TrascationTable products={filteredProducts} />
                    )}

                    <Pagenation
                        page={page}
                        totalPages={totalPages}
                        onNextPage={() => {
                            setPage(page + 1);
                        }}
                        onPriviousPage={() => {
                            setPage(page - 1);
                        }}
                    />
                </div>
                <TransctionsStatistics month={month} />
                <TransactionsBarChart month={month} />
            </div>
        </div>
    );
};

export default Body;

import React from "react";

const Pagenation = ({ page, totalPages, onNextPage, onPriviousPage }) => {
    return (
        <div className="py-6 flex justify-between items-center">
            {page > 1 && (
                <button
                    className="px-5 py-2 rounded-lg bg-green-300 border border-black"
                    onClick={onPriviousPage}
                >
                    Privious
                </button>
            )}
            <p className="w-32 text-center">Current Page : {page}</p>
            <div className="w-32 flex justify-center">
                {page < totalPages ? (
                    <button
                        className="px-5 py-2 rounded-lg bg-green-300 border border-black"
                        onClick={onNextPage}
                    >
                        Next
                    </button>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
};

export default Pagenation;

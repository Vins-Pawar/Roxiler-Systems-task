import React from "react";

const ProductTable = ({ products }) => {
    
    return (
        <div className=" ">
            <table className="table-auto">
                <thead>
                    <tr className="">
                        <th className="px-4 py-2 border border-black">ID</th>
                        <th className="px-4 py-2 border border-black">Title</th>
                        <th className="px-4 py-2 border border-black">
                            Description
                        </th>
                        <th className="px-4 py-2 border border-black">Price</th>
                        <th className="px-4 py-2 border border-black">
                            Category
                        </th>
                        <th className="px-4 py-2 border border-black">Sold</th>
                        <th className="px-4 py-2 border border-black">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="">
                            <td className="border border-black p-2">
                                {product.id}
                            </td>
                            <td className="border border-black p-2">
                                {product.title}
                            </td>
                            <td className="border border-black p-2">
                                {product.description}
                            </td>
                            <td className="border border-black p-2">
                                {product.price}
                            </td>
                            <td className="border border-black p-2">
                                {product.category}
                            </td>
                            <td className="border border-black p-2">
                                {product.sold ? "True" : "False"}
                            </td>
                            <td className="border border-black p-2">
                                <img src={product.image} alt="product image" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;

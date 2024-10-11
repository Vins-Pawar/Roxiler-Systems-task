import axios from "axios";
import ProductTranscation from "./src/models/productTranscation.model.js";
 

const seedData = async () => {
    try {
        const response = await axios.get(
            "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
        );
        const products = response.data;
 
        for (const product of products) {
            
            const dateOfSale = new Date(product.dateOfSale);
            const day = dateOfSale.getDate();
            const month = dateOfSale.getMonth() + 1;
            const year = dateOfSale.getFullYear();
 
            console.log(product);

            await ProductTranscation.create({
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
                sold: product.sold,
                day: day,
                month: month,
                year: year,
            });
        }

        console.log("Database seeded successfully");
    } catch (error) {
        console.log(error);
    }
};
 export default seedData;

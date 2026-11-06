
// Food singleton database
// Stores five food items in memory.

const foodStore = {
    // Array containing five food items and their prices.
    foods: [
        { id: 1, name: "Pizza", price: 12.99 },
        { id: 2, name: "Burger", price: 9.99 },
        { id: 3, name: "Pasta", price: 11.50 },
        { id: 4, name: "Salad", price: 7.99 },
        { id: 5, name: "Sushi", price: 14.99 }
    ],

    // Returns all food items from the database.
    getAll() {
        return this.foods;
    }
};

// Export the singleton so other files can access it.
module.exports = foodStore;

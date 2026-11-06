
 // Import Supertest to test HTTP requests.
const request = require("supertest");

// Import the Express application.
const app = require("../server/server");

// Group all food API tests together.
describe("Food API Tests", () => {

    // Test 1: Check whether GET /foods returns status 200.
    test("GET /foods should return status 200", async () => {

        const response = await request(app).get("/foods");

        expect(response.statusCode).toBe(200);
    });

    // Test 2: Check whether five food items are returned.
    test("GET /foods should return five food items", async () => {

        const response = await request(app).get("/foods");

        expect(response.body).toHaveLength(5);
    });

    // Test 3: Check the information of the first food item.
    test("First food item should contain correct information", async () => {

        const response = await request(app).get("/foods");

        expect(response.body[0]).toEqual({
            id: 1,
            name: "Pizza",
            price: 12.99
        });
    });

    // Test 4: Check whether unknown routes return status 404.
    test("Unknown routes should return status 404", async () => {

        const response = await request(app).get("/unknown");

        expect(response.statusCode).toBe(404);

        expect(response.body.message).toBe("Route not found");
    });

});

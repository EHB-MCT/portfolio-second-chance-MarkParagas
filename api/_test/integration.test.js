const request = require("supertest");
const submit = require("./../src/submit");

// Test 1 is true
const test = {
  date: "2023-07-12",
  workout_name: "Back",
  duration: 20,
  exercises: [
    {
      _id: "64b85ab8a0a33a77dd73e192",
      exercise_name: "Deadlift",
      sets: 5,
      reps: 12,
    },
  ],
};

// Test 2 is false
const test2 = {
  date: "2023-07-12",
  workout_name: "Abs",
  duration: 60,
  exercises: [
    {
      _id: "64b85ab8a0a33a77d",
      exercise_name: "Chin-ups",
      sets: 5,
      reps: -10,
    },
  ],
};

describe("Testing POST of Integration Test", () => {
  it("Should successfully submit the workout data", async () => {
    const response = await request(app) // True
      .post("/workouts")
      .send(test);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it("Should fail when submit workout data", async () => {
    const response = await request(app) // False
      .post("/workouts")
      .send(test2);

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});

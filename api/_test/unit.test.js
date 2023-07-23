const submit = require("./../src/submit");

// Test 1 is true
const test = {
  date: "2023-07-12",
  workout_name: "Back",
  duration: 20,
  exercises: [
    {
      _id: "64bdb1b119bb9c87717235a2",
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

describe("Testing POST of Unit Test", () => {
  it("check Workout Submit with Valid Data", () => {
    expect(submit.checkSubmitPOST(test)).toBeTruthy(); // True and successful POST
  });

  it("check Workout Submit with Invalid Data", () => {
    expect(submit.checkSubmitPOST(test2)).toBeFalsy(); // False and get error instead
  });
});

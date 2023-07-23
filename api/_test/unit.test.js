const submit = require("./../src/submit");

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
  ]
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
    ]
  };

describe("Testing POSTS", () => {
  it("check Workout Submit", () => {
    expect(submit.checkSubmitPOST(test)).toBeTruthy(); // True and successful POST
    expect(submit.checkSubmitPOST({})).toBeFalsy();

    expect(submit.checkSubmitPOST(test2)).toBeTruthy(); // False and successful POST
    expect(submit.checkSubmitPOST({})).toBeFalsy(); 
  });
});

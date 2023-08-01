const submit = require("./../src/submit");

// Test 1 is true | Everything inputs is filled and exercise id exist
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

// Test 2 is false | _id does not exist
const test2 = {
  date: "2023-07-12",
  workout_name: "Abs",
  duration: 60,
  exercises: [
    {
      _id: "64b85ab8a0a33a77d",
      exercise_name: "Chin-ups",
      sets: 5,
      reps: 10,
    },
  ],
};

// Test 3 is false | Missing _id field for an exercise
const test3 = {
  date: "2023-07-12",
  workout_name: "Chest",
  duration: 30,
  exercises: [
    {
      exercise_name: "Bench Press",
      sets: 4,
      reps: 10,
    },
  ],
};

// Test 4 is false | workout_name cannot be empty
const test4 = {
  date: "2023-07-12",
  workout_name: "",
  duration: 45,
  exercises: [
    {
      _id: "64bdb1b119bb9c87717235a2",
      exercise_name: "Squats",
      sets: 4,
      reps: 8,
    },
  ],
};

// Test 5 is false | date cannot be empty
const test5 = {
  date: "",
  workout_name: "Legs",
  duration: 40,
  exercises: [
    {
      _id: "64bdb1b119bb9c87717235a2",
      exercise_name: "Leg Press",
      sets: 3,
      reps: 15,
    },
  ],
};


// Test 6 is true | Exercise sets with negative value
const test6 = {
  date: "2023-07-12",
  workout_name: "Back",
  duration: 20,
  exercises: [
    {
      _id: "64bdb1b119bb9c87717235a2",
      exercise_name: "Deadlift",
      sets: -5,
      reps: 12,
    },
  ],
};

// Test 7 is true | Exercise reps with negative value
const test7 = {
  date: "2023-07-12",
  workout_name: "Back",
  duration: 20,
  exercises: [
    {
      _id: "64bdb1b119bb9c87717235a2",
      exercise_name: "Deadlift",
      sets: 5,
      reps: -12,
    },
  ],
};

// Test 8 is false | Exercise sets with zero value
const test8 = {
  date: "2023-07-12",
  workout_name: "Back",
  duration: 20,
  exercises: [
    {
      _id: "64bdb1b119bb9c87717235a2",
      exercise_name: "Deadlift",
      sets: 0,
      reps: 12,
    },
  ],
};

// Test 9 is false | Exercise reps with zero value
const test9 = {
  date: "2023-07-12",
  workout_name: "Back",
  duration: 20,
  exercises: [
    {
      _id: "64bdb1b119bb9c87717235a2",
      exercise_name: "Deadlift",
      sets: 5,
      reps: 0,
    },
  ],
};

// Test 10 is false | Workout duration with zero value
const test10 = {
  date: "2023-07-12",
  workout_name: "Back",
  duration: 0,
  exercises: [
    {
      _id: "64bdb1b119bb9c87717235a2",
      exercise_name: "Deadlift",
      sets: 5,
      reps: 12,
    },
  ],
};


describe("Testing POST of Unit Test", () => {
  it("check Workout Submit with Valid Data", () => {
    expect(submit.checkSubmitPOST(test)).toBeTruthy(); // True due Everything inputs is filled and exercise id exist
  });

  it("check Workout Submit with Invalid Data", () => {
    expect(submit.checkSubmitPOST(test2)).toBeFalsy(); // False due _id does not exist
  });

  it("check Workout Submit with Missing Exercise _id", () => {
    expect(submit.checkSubmitPOST(test3)).toBeFalsy(); // False due to missing _id field 
  });

  it("check Workout Submit with Empty workout_name", () => {
    expect(submit.checkSubmitPOST(test4)).toBeFalsy(); // False due to empty workout_name
  });

  it("check Workout Submit with Empty date", () => {
    expect(submit.checkSubmitPOST(test5)).toBeFalsy(); // False due to empty date
  });

  it("check Workout Submit with exercise sets with negative value", () => {
    expect(submit.checkSubmitPOST(test6)).toBeFalsy(); // False due to exercise sets with negative value
  });

  it("check Workout Submit with exercise reps with negative value", () => {
    expect(submit.checkSubmitPOST(test7)).toBeFalsy(); // False due to exercise reps with negative value
  });

  it("check Workout Submit with exercise sets with 0 value", () => {
    expect(submit.checkSubmitPOST(test8)).toBeFalsy(); // False, sets value is zero
  });

  it("check Workout Submit with exercise reps with 0 value", () => {
    expect(submit.checkSubmitPOST(test9)).toBeFalsy(); // False, reps value is zero
  });

  it("check Workout Submit with workout duration with 0 value", () => {
    expect(submit.checkSubmitPOST(test10)).toBeFalsy(); // False, duration value is zero
  });

});

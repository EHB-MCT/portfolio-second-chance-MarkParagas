const submit = require("./../src/submit");

// Test 1 is true | Everything inputs is filled
const exerciseTest = {
      exercise_name: "Deadlift",
      sets: 5,
      reps: 12,
};

// Test 2 is false | exercise_name cannot be empty
const exerciseTest2 = {
  exercise_name: "",
  sets: 5,
  reps: 12,
};

// Test 3 is false | sets cannot be empty
const exerciseTest3 = {
  exercise_name: "Deadlift",
  sets: "",
  reps: 12,
};

// Test 4 is false | reps cannot be empty
const exerciseTest4 = {
  exercise_name: "Deadlift",
  sets: 5,
  reps: "",
};

// Test 5 is false | Inputs cannot be empty
const exerciseTest5 = {
  exercise_name: "",
  sets: "",
  reps: "",
};

// Test 6 is false | Sets input is negative
const exerciseTest6 = {
  exercise_name: "Deadlift",
  sets: -5,
  reps: 12,
};

// Test 7 is false | Reps input is negative
const exerciseTest7 = {
  exercise_name: "Deadlift",
  sets: 5,
  reps: -12,
};

// Test 8 is false | Sets value is zero
const exerciseTest8 = {
  exercise_name: "Deadlift",
  sets: 0,
  reps: 12,
};

// Test 9 is false | Reps value is zero
const exerciseTest9 = {
  exercise_name: "Deadlift",
  sets: 5,
  reps: 0,
};


// Test 1 is true | Everything inputs is filled and exercise id exist
const workoutTest = {
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
const workoutTest2 = {
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
const workoutTest3 = {
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
const workoutTest4 = {
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
const workoutTest5 = {
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
const workoutTest6 = {
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
const workoutTest7 = {
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
const workoutTest8 = {
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
const workoutTest9 = {
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
const workoutTest10 = {
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

// Test 11 is false | Exercise are Empty inputs
const workoutTest11 = {
  date: "2023-07-12",
  workout_name: "Back",
  duration: 20,
  exercises: [
    {
      _id: "",
      exercise_name: "",
      sets: "",
      reps: "",
    },
  ],
};


describe("Testing POST of Unit Test", () => {
  it("check Workout Submit with Valid Data", () => {
    expect(submit.checkWorkoutPOST(workoutTest)).toBeTruthy(); // True due Everything inputs is filled and exercise id exist
  });

  it("check Workout Submit with Invalid Data", () => {
    expect(submit.checkWorkoutPOST(workoutTest2)).toBeFalsy(); // False due _id does not exist
  });

  it("check Workout Submit with Missing Exercise _id", () => {
    expect(submit.checkWorkoutPOST(workoutTest3)).toBeFalsy(); // False due to missing _id field 
  });

  it("check Workout Submit with Empty workout_name", () => {
    expect(submit.checkWorkoutPOST(workoutTest4)).toBeFalsy(); // False due to empty workout_name
  });

  it("check Workout Submit with Empty date", () => {
    expect(submit.checkWorkoutPOST(workoutTest5)).toBeFalsy(); // False due to empty date
  });

  it("check Workout Submit with exercise sets with negative value", () => {
    expect(submit.checkWorkoutPOST(workoutTest6)).toBeFalsy(); // False due to exercise sets with negative value
  });

  it("check Workout Submit with exercise reps with negative value", () => {
    expect(submit.checkWorkoutPOST(workoutTest7)).toBeFalsy(); // False due to exercise reps with negative value
  });

  it("check Workout Submit with exercise sets with 0 value", () => {
    expect(submit.checkWorkoutPOST(workoutTest8)).toBeFalsy(); // False, sets value is zero
  });

  it("check Workout Submit with exercise reps with 0 value", () => {
    expect(submit.checkWorkoutPOST(workoutTest9)).toBeFalsy(); // False, reps value is zero
  });

  it("check Workout Submit with workout duration with 0 value", () => {
    expect(submit.checkWorkoutPOST(workoutTest10)).toBeFalsy(); // False, duration value is zero
  });

  it("check Workout, Submit with exercise empty inputs", () => {
    expect(submit.checkWorkoutPOST(workoutTest11)).toBeFalsy(); // False | Exercise inputs are Empty inputs
  });

  it("check Exercise is inputs are all filled", () => {
    expect(submit.checkExercisePOST(exerciseTest)).toBeTruthy(); // True due every inputs is filled
  });

  it("check Exercise with exercise_name are empty", () => {
    expect(submit.checkExercisePOST(exerciseTest2)).toBeFalsy(); // False due exercise_name are empty
  });

  it("check Exercise with Sets are empty", () => {
    expect(submit.checkExercisePOST(exerciseTest3)).toBeFalsy(); // False due Sets are empty
  });

  it("check Exercise with Reps are empty", () => {
    expect(submit.checkExercisePOST(exerciseTest4)).toBeFalsy(); // False due Reps are empty
  });

  it("check Exercise with Inputs are empty ", () => {
    expect(submit.checkExercisePOST(exerciseTest5)).toBeFalsy(); // False due Inputs cannot be empty
  });

  it("check Exercise with Sets input are negative ", () => {
    expect(submit.checkExercisePOST(exerciseTest6)).toBeFalsy(); // False due Sets input is negative
  });

  it("check Exercise with Reps input are negative ", () => {
    expect(submit.checkExercisePOST(exerciseTest7)).toBeFalsy(); // False due Reps input is negative
  });

  it("check Exercise with Sets value zero", () => {
    expect(submit.checkExercisePOST(exerciseTest8)).toBeFalsy(); // False due Sets value is zero
  });

  it("check Exercise with Reps value zero ", () => {
    expect(submit.checkExercisePOST(exerciseTest9)).toBeFalsy(); // False due Reps value is zero
  });

});

const app = require("../src/index.js");
const supertest = require("supertest");
const request = supertest(app);
const port = 3001;

describe("Testing Integration", () => {
  let server;

  // False | Duration is zero value
  describe("Duration is Zero", () => {
    const WorkoutTest = {
      date: "2023-07-23",
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

    it("Duration is Zero", (done) => {
      request
        .post("/workouts")
        .send(WorkoutTest)
        .expect(500)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  // False | Empty workout name
  describe("Empty workout_name", () => {
    const WorkoutTest2 = {
      date: "2023-07-23",
      workout_name: "",
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

    it("Empty workout_name", (done) => {
      request
        .post("/workouts")
        .send(WorkoutTest2)
        .expect(500)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  // False | Empty date
  describe("Empty date", () => {
    const WorkoutTest3 = {
      date: "",
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

    it("Empty date", (done) => {
      request
        .post("/workouts")
        .send(WorkoutTest3)
        .expect(500)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  // False | Empty Workout inputs
  describe("Empty Workout inputs", () => {
    const WorkoutTest4 = {
      date: "",
      workout_name: "",
      duration: "",
      exercises: [
        {
          _id: "64bdb1b119bb9c87717235a2",
          exercise_name: "Deadlift",
          sets: 5,
          reps: 12,
        },
      ],
    };

    it("Empty Workout inputs", (done) => {
      request
        .post("/workouts")
        .send(WorkoutTest4)
        .expect(500)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  // False | Exercise value are zero
  describe("Exercise value are zero", () => {
    const WorkoutTest5 = {
      date: "2023-07-23",
      workout_name: "Back",
      duration: 20,
      exercises: [
        {
          exercise_name: "Deadlift",
          sets: 0,
          reps: 0,
        },
      ],
    };

    it("Exercise value are zero", (done) => {
      request
        .post("/workouts")
        .send(WorkoutTest5)
        .expect(500)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  // False | All inputs are empty
  describe("All inputs are empty", () => {
    const WorkoutTest6 = {
      date: "",
      workout_name: "",
      duration: "",
      exercises: [
        {
          _id: "",
          exercise_name: "",
          sets: "",
          reps: "",
        },
      ],
    };

    it("All inputs are empty", (done) => {
      request
        .post("/workouts")
        .send(WorkoutTest6)
        .expect(500)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  describe("Duration is negative numbers", () => {
    const WorkoutTest7 = {
      date: "2023-07-23",
      workout_name: "Back",
      duration: -20,
      exercises: [
        {
          _id: "64bdb1b119bb9c87717235a2",
          exercise_name: "Deadlift",
          sets: 5,
          reps: 12,
        },
      ],
    };

    it("Duration is negative numbers", (done) => {
      request
        .post("/workouts")
        .send(WorkoutTest7)
        .expect(500)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  // True - Works
    describe("Workout POST - Success", () => {
    const WorkoutTest = {
      date: "2023-07-23",
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
    it("Workout POST - Success", (done) => {
      request
        .post("/workouts")
        .send(WorkoutTest)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  beforeAll((done) => {
    server = app.startServer(port);
    server.once("listening", () => {
      console.log(`Server is running on port ${port}`);
      done();
    });
  });

  afterAll((done) => {
    server.close(() => {
      console.log("Server closed");
      done();
    });
  });
});

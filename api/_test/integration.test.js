const app = require("./../src/index.js");
const supertest = require("supertest");
const request = supertest(app);

describe("Testing Integration", () => {
  describe("Workout POST", () => {
    const addNewWorkout = { // correct
      date: "2023-07-20",
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

    it("should add a new workout when POST used", (done) => {
      request
        .post("/workouts")
        .send(addNewWorkout)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  afterAll((done) => {
    app.close(done);
  });
});
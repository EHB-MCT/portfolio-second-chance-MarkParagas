const app = require("./../src/index.js");
const supertest = require("supertest");
const request = supertest(app);

describe("Testing Integration", () => {
  describe("Workout POST", () => {

    const addNewWorkout = {
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

  beforeAll((done) => {
    // Start the server and store the database | Work!
    server = app.listen(app.get("port"), () => {
      console.log(`Server is running on port ${app.get("port")}`);
      done();
    });
  });
  afterAll((done) => {
    // Close the server after all test is done
    server.close(done);
  });
});
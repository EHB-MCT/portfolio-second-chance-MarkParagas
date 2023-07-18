<script>
import Navigation from '../components/Nav.vue'
// import router from '../router'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      date: '',
      workout_name: '',
      exercise: '',
      sets: 0,
      reps: 0,
      duration: 0
    }
  },
  methods: {
    async fetchData() {
      const exercise = {
        exercise_name: this.exercise_name,
        sets: this.sets,
        reps: this.reps
      }

      console.log(exercise)

      try {
        const exerciseResponse = await fetch('http://localhost:3000/exercises', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(exercise)
        })

        if (exerciseResponse.ok) {
          console.log('Exercise POST request successful')
          const exerciseData = await exerciseResponse.json()

          const workout = {
            date: this.date,
            workout_name: this.workout_name,
            duration: this.duration,
            exercises: [exerciseData.id]
          }

          const workoutResponse = await fetch('http://localhost:3000/workouts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
          })

          if (workoutResponse.ok) {
            console.log('Workout POST request successful')
            window.location.reload();
            //router.push('/Stats')
          } else {
            console.error('Workout POST request failed')
          }
        } else {
          console.error('Exercise POST request failed')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="fetchData">
    <Navigation />
    <section id="form">
      <h1>Workout today?</h1>
      <h2>Fill out the form for today's workout</h2>

      <label for="date"><b>Date:</b></label> <!-- Current Day -->
      <input v-model="date" type="date" name="date" required />
      
      <label for="workout"><b>Workout:</b></label> <!-- Workout -->
      <select v-model="workout_name" type="text" name="workout_name">
        <option disabled value="">Select your workout</option>
        <option value="Chest">Chest</option>
        <option value="Biceps">Biceps</option>
        <option value="Triceps">Triceps</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Abs">Abs</option>
        <option value="Back">Back</option>
        <option value="Legs">Legs</option>
        <option value="Forearms">Forearms</option>
      </select>

      <!-- required & Cannot be negative numbers (Need check) -->

      <label for="exercise"><b>Exercise:</b></label> <!-- Exercise -->
      <input v-model="exercise_name" type="text" name="exercise" />

      <label for="sets"><b>Sets:</b></label> <!-- Sets -->
      <input v-model="sets" type="number" name="sets" />

      <label for="reps"><b>Reps:</b></label> <!-- Reps -->
      <input v-model="reps" type="number" name="reps" />

      <label for="duration"><b>Duration:</b></label> <!-- Duration -->
      <input v-model="duration" type="number" name="duration" step="1" />

      <button type="submit" class="createbtn"><b>Submit</b></button>
    </section>
  </form>
</template>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
  margin-top: 1%;
}

select {
  text-align: center;
}

h1 {
  font-size: 3em;
  text-transform: uppercase;
  text-align: center;
}

h2 {
  font-size: 1.2em;
}

b {
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

input {
  width: 100%;
  text-align: center;
  padding: 2.5%;
}

label {
  font-size: 1.2em;
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 10vh;
}

.options article {
  display: flex;
  width: 50%;
  align-items: center;
}

button {
  color: white;
  background-color: #0ac882;
  padding: 5% 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: bold;
}

button:hover {
  background-color: #3687e9;
  opacity: 1;
}
</style>

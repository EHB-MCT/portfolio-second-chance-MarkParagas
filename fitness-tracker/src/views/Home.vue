<script>
import Navigation from '../components/Nav.vue'
import router from '../router'

export default {
    components: {
        Navigation,
    },
    data() {
        return {
            date: '',
            workout: '',
            exercise: '',
            sets: 0,
            reps: 0,
            duration: 0
        }
    },
    methods: {
        async fetchData() {
            const data = {
                date: this.date,
                workout: this.workout,
                exercise: this.exercise,
                sets: this.sets,
                reps: this.reps,
                duration: this.duration
            };

            try {
                const response = await fetch('http://localhost:3000/api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    console.log('POST request successful');
                } else {
                    console.error('POST request failed');
                }
                router.push('/Stats')
            } catch (error) {
                console.error(error);
            }
        },
    },
}
</script>

<template>
    <form @submit.prevent="fetchData">
        <Navigation />
        <section id="form">
            <h1>Workout today?</h1>
            <h2>Fill out the form for today's workout</h2>

            <!-- Current Day -->
            <label for="date"><b>Date:</b></label>
            <input v-model="date" type="date" name="date" required>

            <!-- Workout -->
            <label for="workout"><b>Workout:</b></label>
            <select v-model="workout" type="text" name="workout" >
                <option disabled value="">Select your workout</option>
                <option value="Chest">Chest</option>
                <option value="Biceps">Biceps</option>
                <option value="Triceps">Triceps</option>
                <option value="Shoulders">Shoulders</option>
                <option value="Abs">Abs</option>
                <option value="Back">Back</option>
                <option value="Legs">Legs</option>
                <option value="Arms">Arms</option>
            </select>
            
            <!-- Exercise -->
            <label for="exercise"><b>Exercise:</b></label>
            <input v-model="exercise" type="text" name="exercise" required>

            <!-- Sets -->
            <label for="sets"><b>Sets:</b></label>
            <input v-model="sets" type="number" name="sets" min="0" required>

            <!-- Reps -->
            <label for="reps"><b>Reps:</b></label>
            <input v-model="reps" type="number" name="reps" min="0" required>

            <!-- Duration -->
            <label for="duration"><b>Duration:</b></label>
            <input v-model="duration" type="number" name="duration" min="0" step="1"><br>

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
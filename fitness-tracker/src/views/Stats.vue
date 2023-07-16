<script>
import Navigation from '../components/Nav.vue'
import Chart from '../components/Charts.vue'

export default {
  components: {
    Navigation,
    Chart,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api');
        const getData = await response.json();
        if (response.ok) {
          this.items = getData;
          console.log(getData)
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
    <div class="main">
        <Navigation />
        <Chart />
        <div class="container">
            <section class="statslist">
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Workout</td>
                            <td>Exercise</td>
                            <td>Sets</td>
                            <td>Reps</td>
                            <td>Duration</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <td>{{ item.date }}</td>
                            <td>{{ item.workout }}</td>
                            <td>{{ item.exercise }}</td>
                            <td>{{ item.sets }}</td>
                            <td>{{ item.reps }}</td>
                            <td>{{ item.duration }} min</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
</template>
  
<style scoped>
table {
    width: 100%;
}

tbody {
    display: flex;
    flex-direction: column-reverse;
    overflow: scroll;
    max-height: 20vh;
}

.table_footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 2%;
}

thead tr td {
    font-weight: bolder;
}

tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

td {
    width: 100%;
    text-align: center;
}

tbody tr:last-child {
    background-color: #59f55087;
}

h1 {
    font-size: 4em;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 0 0;
}

h3 {
    display: flex;
    flex-direction: row;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    height: 100vh;
}

.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.info {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

article {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 20vh;
}

.statslist {
    width: 70%;
}

input[type="password"] {
    font-family: inherit;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
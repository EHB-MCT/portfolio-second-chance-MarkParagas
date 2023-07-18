<script>
import Chart from 'chart.js/auto'

export default {
    mounted() {
        const render = document.getElementById('myChart');

        // -------------------- Basic Setup Charts --------------------
        const data = {
            labels: [
                'Arms',
                'Core',
                'Legs',
            ],
            datasets: [
                {
                    type: 'bar',
                    label: 'Duration',
                    data: [10, 20, 30],
                    borderColor: 'rgb(133, 205, 253)',
                    backgroundColor: 'rgb(133, 205, 253,0.5)'
                }, {
                    type: 'line',
                    label: 'Sets',
                    data: [20, 10, 50],
                    fill: false,
                    borderColor: 'rgb(54, 162, 235)'
                }, {
                    type: 'line',
                    label: 'Reps',
                    data: [5, 5, 0],
                    fill: false,
                    borderColor: 'rgb(39, 233, 28)'
                }
            ]

        };

        // Config Chart
        const myChart = new Chart(render, {
            type: 'scatter',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        // --------------------  END Setup Charts --------------------

        // Fetch and update data of Charts Update chart data from the API database
        async function fetchData() {
            const response = await fetch('http://localhost:3000/workouts');
            const getData = await response.json();
            console.log(getData);

            // Extract the data from API
            const workout_name = getData.map(index => index.workout_name);
            const duration = getData.map(index => index.duration);
            // This need to be check below
            const sets = getData.map(index => index.exercises[0].sets);
            const reps = getData.map(index => index.exercises[0].reps);

            // Update chart by API data
            myChart.data.labels = workout_name; // Labels
            myChart.data.datasets[0].data = duration; // Duration
            myChart.data.datasets[1].data = sets; // Sets
            myChart.data.datasets[2].data = reps; // Reps
            myChart.update();
        }

        fetchData();

    }
}
</script>


<template>
    <div id="Test">
        <canvas id="myChart" style="width: 400px; height: 400px;"></canvas>
    </div>
</template>

<style scoped>
#Test {
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 50%;
    align-items: center;
    justify-content: center;
}
</style>
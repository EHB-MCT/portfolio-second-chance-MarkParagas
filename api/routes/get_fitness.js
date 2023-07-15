// GET
app.get('/', (request, response) => {
    let testResponse = {
        workout: 'Arms',
        exercise: 'Push-ups',
        sets: 5,
        reps: 20,
        duration: 30,
    }
    response.send(testResponse)
})
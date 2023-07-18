<template>
    <div id="nav_container">
        <div id="nav">
            <router-link to="/" class="nav_btn">Home</router-link>
            <router-link to="/Stats" class="nav_btn">Stats</router-link>
        </div>
    </div>
</template>

<style>
#nav_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

#nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 25%;
}

.nav_btn {
    text-decoration: none;
    opacity: 1;
    color: #0ac882;
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 1.3em;
    text-transform: capitalize;
}

.nav_btn:hover {
    color: #3687e9
}
</style>
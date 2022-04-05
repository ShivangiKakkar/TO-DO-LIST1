<script setup lang="ts">
import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="section">
        <div class="columns">
            <div class="column is-one-quarter">
            <!-- CARD 1 -->
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://images.unsplash.com/photo-1514782831304-632d84503f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="../assets/done.gif">
                                    <!-- <img src="https://img.icons8.com/plasticine/100/000000/my-melody.png" alt="Placeholder image"> -->
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Weekly Planner</p>
                                <p class="subtitle is-6">@demo</p>
                            </div>
                        </div>
                        <div class="content">
                            <p class="gratitude">“Unless commitment is made, there are only promises and hopes; but no plans.” - Peter F. Drucker</p>
                            <strong>Start planning your weeks ^.^</strong>
                            <br>
                            <a>Get your weekly planner</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CARD 2 -->
            <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://images.unsplash.com/photo-1603959822589-e57a12429125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="../assets/gratitude.gif">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Gratitude Journal</p>
                                <p class="subtitle is-6">@demo</p>
                            </div>
                        </div>

                        <div class="content">
                            <p class="gratitude">“Acknowledging the good that you already have in your life is the foundation for all the abundance.” - Eckhart Tolle</p>
                            <br>
                            <strong>
                                Start your gratitude journey with us :)
                            </strong>
                            <br>
                            <a>Get your Gratitude Journal</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CARD 3 -->
            <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="../assets/fitness.gif">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Fitness Planner</p>
                                <p class="subtitle is-6">@demo</p>
                            </div>
                        </div>

                        <div class="content">
                            <p class="gratitude">“A feeble body weakens the mind.” - Jean-Jacques Rousseau</p>
                            <strong>Start your fitness journey today ;_;</strong>
                            <br>
                            <a>Get your fitness planner</a>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CARD 4 -->
            <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://i.pinimg.com/564x/74/92/a6/7492a6bc7ad25686b437cc9d0c04dc43.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="../assets/habit.gif">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Habit Tracker</p>
                                <p class="subtitle is-6">@demo</p>
                            </div>
                        </div>

                        <div class="content">
                            <p class="gratitude">“Life is habit. Or rather life is a succession of habits.” -Samuel Beckett</p>
                            <strong>Analyse your habit patterns o_O</strong>
                            <br>
                            <a>Get your habit tracker</a>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CARD ENDS -->
        </div>
    </div>
<Footer />
</template>

<style scoped>
.pic{
    width: 400px;
    height: auto;
    margin-left: 30px;
}
ul{
    list-style: circle;
    margin: 0px;
}
.align{
    display: flex;
}
.mid-term{
    color: burlywood;
    font-weight: bolder;
    background-color: antiquewhite;
    height: 120px;
}
.gratitude {
    background-color:  rgb(234, 234, 247);
}

</style>
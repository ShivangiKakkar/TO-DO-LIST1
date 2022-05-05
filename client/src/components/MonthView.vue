<script setup lang="ts">
import { Month } from "../models/months";
const { month } = defineProps<{month: Month}>();


</script>

<template>
    <section class="section is-small">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by3">
                        <img class="month_img" :src="month.src" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img :src="month?.user?.pic" alt="Placeholder image">
                                </figure>
                            </div>

                            <div class="media-content">
                                <p class="title is-4">{{month?.user?.firstname}} {{month?.user?.lastname}}</p>
                                <p class="subtitle is-6">@{{month?.user?.handle}}</p>
                            </div>
                            
                </div>
                <div class="content">
                            {{ month.caption }} 
                            <br />
                            <br>
                            <time datetime="2016-1-1">03:30 PM - 30 Apr 2022</time>
                        </div>
                </div>
                
            <div class="card-footer">
              <p class="card-footer-item">
                <span>Share on
                  <a href="#">Facebook</a>
                </span>
              </p>
              <p class="card-footer-item">
                <span>Tweet on
                  <a href="#">Twitter</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.card-equal-height {
   display: flex;
   flex-direction: column;
   height: 100%;
}
.card-equal-height .card-footer {
  margin-top: auto;
}
.card{
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 0.5rem;
}
.card img{
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
	border-radius: 0.5rem;
	max-width: 96.5%;
	max-height: 96.5%;
	margin: 0 auto;
	margin-top: -3.5%;
}
</style>
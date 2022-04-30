<script lang="ts">

</script>
<template>
    <div>
        <article class="panel is-danger is-right">
                      <p class="has-text-danger panel-heading has-background-danger-light">
                      Notes
                      </p>
                      <p class="panel-tabs">
                        <a class="is-active">Groceries</a>
                        <a>Wishlist</a>
                        <a>Brain Dump</a>
                      </p>
                    <div class="panel-block">
                      <input class="input" type="text" placeholder="Create a new note">
                      <div class="panel-block">
                        <button class="button is-danger is-outlined is-fullwidth">
                          <i class="fas fa-add" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                <a class="panel-block is-active">
                  <span class="panel-icon">
                    <i class="fa-solid fa-x" aria-hidden="true"></i>
                  </span>
                  Milk
                </a>
                <a class="panel-block">
                  <span class="panel-icon">
                    <i class="fa-solid fa-x" aria-hidden="true"></i>
                  </span>
                  Sugar
                </a>
                <a class="panel-block">
                  <span class="panel-icon">
                    <i class="fa-solid fa-x" aria-hidden="true"></i>
                  </span>
                  Green Tea
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <i class="fa-solid fa-x" aria-hidden="true"></i>
                    </span>
                    Nuts
                  </a>
                   <div class="panel-block">
                    <button class="button is-danger is-outlined is-fullwidth">
                    Clear all notes
                    </button>
                </div>
            </article>
    </div>
</template>

<style scoped>
a {
  color: rgb(234,44,85);
}
</style>
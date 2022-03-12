<script setup lang="ts"></script>
<template>
<div class="section columns">
    <div class="column is-half">
                    <article class="panel">
                        <!-- UPPER -->
                        <div class="tabs is-boxed">
                            <ul>
                              <li>
                                <a>
                                  <span class="icon is-small"><i class="fas fa-clipboard-list"></i></span>
                                  <span id="current">Current</span>
                                </a>
                              </li>
                              <li>
                                <a>
                                  <span class="icon is-small"><i class="fas fa-calendar-times"></i></span>
                                  <span id="completed">Completed</span>
                                </a>
                              </li>
                              <li>
                                <a>
                                  <span class="icon is-small"><i class="fas fa-calendar-day"></i></span>
                                  <span id="upcoming">Upcoming</span>
                                </a>
                              </li>
                              <li class="is-active">
                                <a>
                                  <span class="icon is-small"><i class="fas fa-calendar"></i></span>
                                  <span id="all">All</span>
                                </a>
                              </li>
                            </ul>
                        </div>
                      <div class="panel-block">
                        <div class="field has-addons " style="width: 100%;">
                          <div class="control has-icons-left is-expanded">
                            <input class="input is-primary field" type="text" placeholder="New Task">
                            <span class="icon is-left">
                              <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                            </span>
                          </div>
                            <div class="control">
                              <button class="button is-primary">Add</button>
                            </div>
                          </div>
                      </div>
                      <!-- DIV  -->
                          <label class="panel-block">
                            <input type="checkbox"/>
                            <span>Make Bulma great again</span>
                          </label>
                          <label class="panel-block">
                            <input type="checkbox" />
                              <span>Add some more features</span>
                          </label>
                          <label class="panel-block">
                            <input type="checkbox" />
                            <span>Make a github account</span>
                          </label>
                          <label class="panel-block">
                            <input type="checkbox" />
                            <span>Learn how to use github</span>
                          </label>
                          <label class="panel-block">
                            <input type="checkbox" />
                            <span>add a .gitignore file</span>
                          </label>
                    </article>
    </div> 
</div>       
    
</template>

    <style>
    </style>
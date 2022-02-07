<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo-Bulma</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css">
</head>
<body>
    <nav class="navbar is-primary">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
          </a>
          <div class="navbar-burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </nav>
    <!-- LEFT PANEL -->
    <div class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-one-quarter">
                    <div class="card">
                        <header class="card-header">
                          <p class="card-header-title">
                            Component
                          </p>
                          <button class="card-header-icon" aria-label="more options">
                            <span class="icon">
                              <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                          </button>
                        </header>
                        <div class="card-content">
                          <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                          </div>
                        </div>
                        <footer class="card-footer">
                          <a href="#" class="card-footer-item">Save</a>
                          <a href="#" class="card-footer-item">Edit</a>
                          <a href="#" class="card-footer-item">Delete</a>
                        </footer>
                      </div>
                </div>
        
                  <!-- CENTER HEADING TABS -->
                  <div class="column is-half">
                    <article class="panel">
                        <!-- UPPER -->
                        <div class="tabs is-boxed">
                            <ul>
                              <li class="is-active">
                                <a>
                                  <span class="icon is-small"><i class="fas fa-clipboard-list" aria-hidden="true"></i></span>
                                  <span>Current</span>
                                </a>
                              </li>
                              <li>
                                <a>
                                  <span class="icon is-small"><i class="fas fa-calendar-times" aria-hidden="true"></i></span>
                                  <span>Completed</span>
                                </a>
                              </li>
                              <li>
                                <a>
                                  <span class="icon is-small"><i class="fas fa-calendar-day" aria-hidden="true"></i></span>
                                  <span>Upcoming</span>
                                </a>
                              </li>
                              <li>
                                <a>
                                  <span class="icon is-small"><i class="fas fa-calendar" aria-hidden="true"></i></span>
                                  <span>All</span>
                                </a>
                              </li>
                            </ul>
                        </div>
                      <div class="panel-block">
                          <p class="control has-icons-left">
                            <input class="input is-primary" type="text" placeholder="New Task">
                            <span class="icon is-left">
                              <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                            </span>
                          </p>
                      </div>
                        <label class="panel-block">
                          <input type="checkbox">
                          Make Bulma great again
                        </label>
                        <label class="panel-block">
                          <input type="checkbox">
                            Add some more features
                        </label>
                        <label class="panel-block">
                          <input type="checkbox">
                            Make a github account
                        </label>
                        <label class="panel-block">
                          <input type="checkbox">
                            Learn how to use github
                        </label>
                        <label class="panel-block">
                          <input type="checkbox">
                            add a .gitignore file
                        </label>  
                    </article>
                  </div>
                      <!-- ARTICLE ENDS  -->
                      <!-- Trying another way of addding commit -->
                  
                <!-- RIGHT PANEL -->
                <div class="column is-one-quarter">
                    <h2 class="title">Table of contents</h2>
                    <h3 class="subtitle">Intra-page navigation</h3>
                    <aside class="menu">
                        <p class="menu-label">
                          General
                        </p>
                        <ul class="menu-list">
                          <li><a>Dashboard</a></li>
                          <li><a>Customers</a></li>
                        </ul>
                        <p class="menu-label">
                          Administration
                        </p>
                        <ul class="menu-list">
                          <li><a>Team Settings</a></li>
                          <li>
                            <a class="is-active">Manage Your Team</a>
                            <ul>
                              <li><a>Members</a></li>
                              <li><a>Plugins</a></li>
                              <li><a>Add a member</a></li>
                            </ul>
                          </li>
                          <li><a>Invitations</a></li>
                          <li><a>Cloud Storage Environment Settings</a></li>
                          <li><a>Authentication</a></li>
                        </ul>
                        <p class="menu-label">
                          Transactions
                        </p>
                        <ul class="menu-list">
                          <li><a>Payments</a></li>
                          <li><a>Transfers</a></li>
                          <li><a>Balance</a></li>
                        </ul>
                      </aside>
                </div>
        
            </div>       
        </div>
    </div>

</body>
</html>
<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Change from "./change.svelte";
  import Users from "./users.svelte";
  </script>
  
  <Router>
    <header>
      <h1>History</h1>
  
      <nav>
        <Link to="/">Base</Link>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="blog">Blog</Link>
      </nav>
    </header>
  
    <main>
      <Route path="blog/*blogRoute" component={Change} />
      
      <Route path="about">
        <h3>About</h3>
        <p>That's what it's all about!</p>
      </Route>
  
      <Route>
        <h3>Default</h3>
        <p>No Route could be matched.</p>
      </Route>
    </main>
  </Router>
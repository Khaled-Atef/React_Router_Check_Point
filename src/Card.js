import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div class="container mt-3">
        <h2>Film Name: The Courier</h2>
        <div class="card">
          <div class="card-header">
            Description: responsible for distributing packages and documents for
            institutions, businesses, government agencies, and individuals
          </div>
          {/* <div class="card-body">Content</div>
          <div class="card-footer">Footer</div> */}
        </div>
      </div>
      <br />
      <br />
      <Link to="/">
        <input type="submit" value="Back to home page" />
      </Link>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </div>
  );
};

export default Card;

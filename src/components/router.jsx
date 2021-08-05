import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Idol from "../pages/idol";
import Tags from "../pages/tag";
import Details from "../pages/details";
import Post from "../pages/post";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/post/:id">
      {params => {
        return <Post id={params.id} />;
      }}
    </Route>
    ;
    <Route path="/idol" component={Idol} />
    <Route path="/details/:slug">
      {params => {
        return <Details slug={params.slug} />;
      }}
    </Route>
    ;
    <Route path="/tags" component={Tags} />
  </Switch>
);

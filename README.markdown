# Unscalable Webpage Application Boilerplate

A client has a problem. I rush out a webpage app in a few days to solve it.
Add a few week's real-world testing, debugging, iterating and sometimes a
rewrite, the app stabilizes for this one client on a modern browser
(often on iPhone or iPad).

This is my starting point (or boilerplate) for such apps.

## Features

- codes faster:
  - supports ES6 which makes fast app making libraries like Redux & React faster and less buggy
  - auto-reload server on server file change
  - auto-refresh webpage on css and javascript change
  - Uses only npm scripts for automation (or tooling). Alternatives `gulp` and `grunt`
    take up too much space, it slows down the initial creation of a project, and plugins
    are more likely to break.
- mostly dumb server:
  - I mostly make apps that only hit the server once to download files, then connects
    to firebase for data storage. (or single-page web app). For my one client with his
    advanced browser the single-page app responds instantly to data edits and view changes
    despite always under spotty internet. (Most of these apps run in restaurants.)
  - with express as the server it's very easy to add 1 or 2 server functions like SMS authentication.

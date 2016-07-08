import express from "express"
const app = express()

// Use jade views
import jade from 'jade'
import path from 'path'
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, '../../src/jade'))
app.locals.pretty = true

app.locals.devMode = true

// load css, js & images
app.use(express.static(path.join(__dirname, '../../assets')))

// Test React Server
// import React from 'react'
// import ReactDOM from 'react-dom'
// import ReactDOMServer from 'react-dom/server'
// console.log(ReactDOMServer.renderToString(
//   <div>
//     <h1>Hello World!</h1>
//     <div className="hello">I am react</div>
//   </div>
// ))

app.get('/', (req, res) => res.render('home'))

app.listen(process.env.PORT || 4000)

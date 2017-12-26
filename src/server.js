import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './client/App'
import Html from './client/Html'
// this is important
import { ServerStyleSheet } from 'styled-components'

const port = 3000
const server = express()

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet()  // create our stylesheet

  const body = renderToString(sheet.collectStyles(<App />))  // collect styles
  const styles = sheet.getStyleTags()  // get all the tags from the sheet
  const title = 'SSR with Styled Components'

  res.send(
    Html({
      body,
      styles,  // pass the styles to our template
      title
    })
  )
})

server.listen(port)

console.log(`Serving at localhost:${port}`)
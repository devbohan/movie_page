const config = require('dotenv').config();
const express = require("express")
const { graphqlHTTP }  = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const app = express()
const dbname = config.parsed.MongoDBName
const dbaccount = config.parsed.MongoDBAccountName
const dbsecret = config.parsed.MongoDBAccountSecret
//test is database name
mongoose.connect(`mongodb+srv://${dbaccount}:${dbsecret}@cluster0.gtgxruw.mongodb.net/${dbname}?retryWrites=true&w=majority`)
mongoose.connection.once('open', () => {
    console.log('db connected')
})
app.use('/graphql', graphqlHTTP({
 schema,
 graphiql: true
}))

app.listen(4000, () => {
    console.log('listen port 4000')
})
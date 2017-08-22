const Agenda = require('agenda')
const jobs = require('./jobs')

require('dotenv').config()

const connectionOpts = {
  db: {
    address: process.env.DB,
    collection: 'Jobs'
  }
}

const agenda = new Agenda(connectionOpts)

Object.keys(jobs).forEach((job) => {
  jobs[job](agenda)
})

if (Object.keys(jobs).length) {
  agenda.on('ready', () => {
    agenda.start()
  })
}

module.exports = agenda

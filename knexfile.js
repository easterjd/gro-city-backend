if (process.env.NODE_ENV !== 'production') require('dotenv').load()
const { DATABASE_URL, NODE_ENV } = process.env

const path = require('path')
const config = {
  client: 'pg',
  connection: DATABASE_URL,
  migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds')
  }
}

module.exports = {
  development: config,
  production: config,
  testing: { ...config, connection: DATABASE_URL.replace('_dev', '_test') }
}

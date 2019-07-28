import path from 'path'

const testEnv = process.env.NODE_ENV === 'test'
const dbName = 'mobileWorld'

export const config = {
  PORT: 3000,
  session: {
    secret: "nodeJSForever",
    key: "sid",
    cookie: {
      name: 'session',
      keys: ['key1', 'key2'],
      maxAge: 10000
    }
  },
  mongoose: {
    uri: testEnv ? `mongodb://localhost/${dbName}-test` : `mongodb://localhost/${dbName}`,
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    }
  },
  hash: {
    secret: 'boooom!',
    salt: 10
  },
  uploadPath: {
    articleImages: path.join(__dirname, '../../static/images/ARTICLES')
  },
};
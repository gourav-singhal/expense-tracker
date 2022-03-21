import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createModule, ModuleConfig } from 'graphql-modules'
import { typeDefs } from './userSettings.type.graphql.js'
import { resolvers } from './userSettings.resolver.graphql.js'
import { authMiddleware } from '../../middlewares/index.js'

const _dirname = dirname(fileURLToPath(import.meta.url))

const configModule: ModuleConfig = {
  id: 'userSettings-module',
  dirname: _dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
  middlewares: {
    Mutation: {
      updateUserSettings: [authMiddleware],
      updateUserPassword: [authMiddleware]
    }
  }
}

export default createModule(configModule)

import { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

dotenv.config()

const config: CodegenConfig = {
  schema: {
    'https://api.github.com/graphql': {
      headers: {
        Authorization: `Bearer ${process.env.VITE_GITHUB_TOKEN}`,
        'User-Agent': 'Node',
      },
    },
  },
  documents: ['src/**/*.ts'],
  generates: {
    './src/shared/api/types/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
}

export default config

import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      // Dependencies
      'node_modules/',
      '.pnp',
      '.pnp.js',

      // Testing
      'coverage/',

      // Production
      'build/',
      'dist/',

      // Development
      '.vscode/',
      '.idea/',
      '*.log',

      // Cache
      '.eslintcache',
      '.cache/',
      '.parcel-cache/',

      // Environment
      '.env',
      '.env.local',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',

      // TypeScript
      '*.tsbuildinfo',

      // Vite
      'vite.config.ts.timestamp-*',

      // Generated files
      '**/types/graphql.ts',
      '**/generated/**',

      // Misc
      '.DS_Store',
      '*.pem',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

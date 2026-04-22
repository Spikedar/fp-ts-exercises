import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.solution.ts'],
    exclude: ['node_modules', 'dist', 'playground'],
    reporters: ['verbose'],
    typecheck: {
      checker: 'tsc',
      include: ['src/**/*.solution.ts'],
    },
  },
})

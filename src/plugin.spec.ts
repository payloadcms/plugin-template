import type { Config } from 'payload/config'
import { defaults } from 'payload/dist/config/defaults'

import { samplePlugin } from './plugin'

describe('plugin', () => {
  // Create tests to ensure expected behaviour from the plugin
  it('should run the plugin', () => {
    const runPlugin = samplePlugin({ enabled: true })
    const config = runPlugin(createConfig())

    assertPluginRan(config)
  })
})

function assertPluginRan(config: Config): void {
  // Define the conditions you expect to be true after the plugin runs
  expect(config).toBeDefined()
}

function createConfig(overrides?: Partial<Config>): Config {
  return {
    ...defaults,
    ...overrides,
  }
}

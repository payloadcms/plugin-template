import { samplePlugin } from './plugin'
import { Config } from 'payload/config'

describe('Plugin', () => {
  let config: Config
  beforeAll(() => {
    // @ts-ignore
    config = {
      admin: { user: 'admins' },
      collections: []
    }
  })
  it('returns the config', () => {
    const result = samplePlugin(config)
    expect(result).toBe(config)
  })
})
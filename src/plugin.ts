import type { Config } from 'payload/config'

import { onInitExtension } from './onInitExtension'
import type { PluginTypes } from './types'
import { extendWebpackConfig } from './webpack'

export const samplePlugin =
  (pluginOptions: PluginTypes) =>
  (incomingConfig: Config): Config => {
    let config = { ...incomingConfig }

    // If you need to add a webpack alias, use this function to extend the webpack config
    const webpack = extendWebpackConfig(incomingConfig)

    config.admin = {
      ...(config.admin || {}),
      // If you extended the webpack config, add it back in here
      // If you did not extend the webpack config, you can remove this line
      webpack,

      // Add additional admin config here
    }

    // If the plugin is disabled, return the config without modifying it
    // The order of this check is important, we still want any webpack extensions to be applied even if the plugin is disabled
    if (pluginOptions.enabled === false) {
      return config
    }

    // Add additional collections here
    config.collections = [
      ...(config.collections || []),
      // Add additional collections here
    ]

    config.globals = [
      ...(config.globals || []),
      // Add additional globals here
    ]

    config.hooks = {
      ...(incomingConfig.hooks || {}),
      // Add additional hooks here
    }

    config.onInit = async payload => {
      if (incomingConfig.onInit) await incomingConfig.onInit(payload)
      // Add additional onInit code by using the onInitExtension function
      onInitExtension(pluginOptions, payload)
    }

    return config
  }

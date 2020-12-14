import { ThrelsCookiePluginOptions } from '../types/index'

export function getOptions(options: Partial<ThrelsCookiePluginOptions> | undefined) {
  const defaults: ThrelsCookiePluginOptions = {
    registerComponents: true,
    registerDirectives: true,
    registerMixins: true,
    registerStores: true
  }

  return {
    ...defaults,
    ...options
  }
}

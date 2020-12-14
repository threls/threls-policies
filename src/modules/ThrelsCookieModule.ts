import { Store } from 'vuex/types'

import {
    ThrelsCookiePluginOptions,
    RouterQuery, ThrelsCookieParams
} from '@/types'
import { getModule } from 'vuex-module-decorators'
import CookieStore from '@/store/CookieStore'


export default class ThrelsCookieModule {
    private options: ThrelsCookiePluginOptions | ThrelsCookieParams

    private stores: { cookie: CookieStore }

    constructor(
        options: ThrelsCookiePluginOptions | ThrelsCookieParams,
        store: Store<any>
    ) {
        this.options = options
        this.stores = { cookie: getModule(CookieStore, store) }
        this.stores.cookie.SET_OPTIONS(options as ThrelsCookieParams)
    }
}

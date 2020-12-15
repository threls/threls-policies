import { Store } from 'vuex/types'

import {
    ThrelsCookiePluginOptions,
    RouterQuery, ThrelsCookieParams
} from '@/types'
import { getModule } from 'vuex-module-decorators'
import CookieStore from '@/store/CookieStore'


export default class ThrelsCookieModule {
    private options: ThrelsCookieParams

    private stores: { cookie: CookieStore }

    constructor(
        options: ThrelsCookieParams,
        store: Store<any>
    ) {
        this.options = options
        this.stores = { cookie: getModule(CookieStore, store) }

    }

    get params() {
        return {
            'entity': this.options.entity,
            'website': this.options.website,
            'effectiveDate': this.options.effectiveDate,
            'dataController': {
                'name': this.options.dataControllerName,
                'email': this.options.dataControllerEmail
            },
            'dataProtection': {
                'name': this.options.dataProtectionOfficerName,
                'email': this.options.dataProtectionOfficerEmail
            }
        }
    }
}

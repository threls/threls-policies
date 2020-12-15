import { Store } from 'vuex/types'

import { ThrelsCookiePluginOptions } from '@/types'


export default class ThrelsCookieModule {
    private options: ThrelsCookiePluginOptions

    private stores: {}

    constructor(
        options: ThrelsCookiePluginOptions,
        store: Store<any>
    ) {
        this.options = options
        this.stores = {}

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

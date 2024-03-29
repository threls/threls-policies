import { Vue as _Vue } from 'vue-property-decorator'
import {
    ThrelsCookiePlugin,
    ThrelsCookiePluginOptions
} from "./types/index"

import ThrelsCookieComponent from '@/components/ThrelsCookieComponent.vue'
import ThrelsPoliciesMenuComponent from '@/components/ThrelsPoliciesMenuComponent.vue'
import ThrelsPrivacyComponent from '@/components/ThrelsPrivacyComponent.vue'
import ThrelsTermsComponent from '@/components/ThrelsTermsComponent.vue'

import { Store } from 'vuex'

import { getOptions } from '@/helpers/helpers'
import ThrelsCookieModule from "@/modules/ThrelsCookieModule";


export default class ThrelsPolicies implements ThrelsCookiePlugin {
    private vue!: typeof _Vue

    options!: ThrelsCookiePluginOptions

    store!: Store<any>

    static install(
        Vue: typeof _Vue,
        options: Partial<ThrelsCookiePluginOptions> | undefined
    ): void {
        (new ThrelsPolicies()).install(Vue, options)
    }

    install(
        Vue: typeof _Vue,
        options: Partial<ThrelsCookiePluginOptions> | undefined
    ): void {
        this.vue = _Vue

        this.options = getOptions(options as ThrelsCookiePluginOptions)

        if (!this.options || !this.options.store) {
            throw new Error('Please initialise plugin with a Vuex store.')
        } else {
            this.store = this.options.store
        }

        if (this.options.registerStores) {
            this.registerStores()
        }

        if (this.options.registerComponents) {
            this.registerComponents()
        }

        if (this.options.registerDirectives) {
            this.registerDirectives()
        }

        if (this.options.registerMixins) {
            this.registerMixins()
        }

        this.inject()
    }

    registerComponents() {
        this.vue.component('threls-policies-menu-component', ThrelsPoliciesMenuComponent)
        this.vue.component('threls-cookie-component', ThrelsCookieComponent)
        this.vue.component('threls-privacy-component', ThrelsPrivacyComponent)
        this.vue.component('threls-terms-component', ThrelsTermsComponent)

    }

    registerDirectives() {

    }

    registerMixins() {

    }

    registerStores() {

    }

    inject() {
        const injections: { [key: string]: any } = {
            'threlsCookie': new ThrelsCookieModule(this.options, this.store),
        }

        Object.keys(injections).forEach((_injectionKey: string) => {
            this.injectModule(_injectionKey, injections[_injectionKey])
        })
    }

    injectModule(
        key: string,
        module: any
    ) {
        if (typeof this.options.inject === 'undefined') {
            this.vue.prototype['$' + key] = module
        } else {
            this.options.inject(key, module)
        }
    }

    [key: string]: any;
}


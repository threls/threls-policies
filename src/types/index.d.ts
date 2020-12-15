import Vue, { PluginFunction, PluginObject } from 'vue'
import { Store } from 'vuex'
import ThrelsCookieModule from "@/modules/ThrelsCookieModule";

export interface ThrelsCookiePluginOptions {
    registerComponents: boolean
    registerDirectives: boolean
    registerMixins: boolean
    registerStores: boolean
    store?: Store<any>
    inject?: any
}

export interface ThrelsCookieParams {
    entity: string,
    website: string,
    effectiveDate: string,
    dataControllerName: string,
    dataControllerEmail: string,
    dataProtectionOfficerName: string,
    dataProtectionOfficerEmail: string,
}


export interface ThrelsCookiePlugin extends PluginObject<Partial<ThrelsCookiePluginOptions>> {
    install: PluginFunction<Partial<ThrelsCookiePluginOptions> | ThrelsCookieParams>
}

export type Dictionary<T> = { [key: string]: T }
export type RouterQuery = Dictionary<string | (string | null)[]>

declare module '@nuxt/vue-app' {
    interface Context {
        $threlsCookie: ThrelsCookieModule
    }

    interface NuxtAppOptions {
        $threlsCookie: ThrelsCookieModule
    }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
    interface Context {
        $threlsCookie: ThrelsCookieModule
    }

    interface NuxtAppOptions {
        $threlsCookie: ThrelsCookieModule
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $threlsCookie: ThrelsCookieModule
    }
}


export declare const ThrelsCookie: ThrelsCookiePlugin
export default ThrelsCookie

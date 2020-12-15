import { StoreModule } from '@/store/storeModule'
import { Module, Mutation, Action } from 'vuex-module-decorators'
import { ThrelsCookieParams } from "@/types";

@Module({
    name: 'threls-cookie',
    stateFactory: true,
    namespaced: true
})
export default class CookieStore extends StoreModule {
    entity: string = "Entity Name"

    website: string = "https://www.website.com"

    effectiveDate: string = "14 December 2020"

    dataControllerName: string = 'Data Controller'
    dataControllerEmail: string = 'info@website.com'

    dataProtectionOfficerName: string = 'Data Controller'
    dataProtectionOfficerEmail: string = 'info@website.com'


    @Mutation
    SET_OPTIONS(options: ThrelsCookieParams) {
        console.log('store- opt', options);
        this.entity = options.entity
        this.website = options.website
        this.effectiveDate = options.effectiveDate
        this.dataControllerName = options.dataControllerName
        this.dataControllerEmail = options.dataControllerEmail
        this.dataProtectionOfficerName = options.dataProtectionOfficerName
        this.dataProtectionOfficerEmail = options.dataProtectionOfficerEmail
    }


}

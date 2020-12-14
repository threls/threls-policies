import { VuexModule } from 'vuex-module-decorators'
import { Store } from 'vuex'

export class StoreModule extends VuexModule {
  store!: Store<any>
}

import {createStore} from "vuex";
import {storeModule} from "@/store/storeModule";

export default createStore({
    modules: {
        store: storeModule
    }
})
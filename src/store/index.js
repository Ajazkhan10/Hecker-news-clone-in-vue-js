import { createStore } from "vuex";
import heckerModules from './Modules/Hecke-for-Top/index.js'
const store=createStore({
 modules:{
     hecker:heckerModules
 }

})
export default store;

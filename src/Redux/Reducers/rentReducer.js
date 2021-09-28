import {Cars} from '../../Components/dataCar'
import { RENT_CAR, RETURN_CAR } from '../Actions/actionRent'

const rent_car = (state = Cars, action) => {
    
    
    switch(action.type){
        
        case RENT_CAR : {
            return{
                ...state,
                free : state.free - action.cant,
                rent : state.rent + action.cant
            }
        }
        case RETURN_CAR: {
            return{
                ...state,
                free : state.free + action.cant,
                rent : state.rent - action.cant
            }
        }

        default: return state
    }
}

export default rent_car
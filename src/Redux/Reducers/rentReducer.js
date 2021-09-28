import {Cars} from '../../Components/dataCar'
import { RENT_CAR, RETURN_CAR } from '../Actions/actionRent'

const rent_car = (state = Cars, action) => {
    
    
    switch(action.type){
        
        case RENT_CAR : {
            return{
                ...state
            }
        }
        case RETURN_CAR: {
            return{
                ...state,
                rent: state[action.id].rent - action.cant,
                free: state[action.id].free + action.cant
            }
        }

        default: return state
    }
}

export default rent_car
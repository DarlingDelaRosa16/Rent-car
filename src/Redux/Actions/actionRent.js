export const RENT_CAR = "RENT_CAR";
export const RETURN_CAR = "RETURN_CAR"

export const rent_car = (cant)=>{
    return{
        type: RENT_CAR,
        cant
    }
}

export const return_car = (cant)=>{
    return{
        type: RETURN_CAR,
        cant
    }
}
export const RENT_CAR = "RENT_CAR";
export const RETURN_CAR = "RETURN_CAR"

export const rent_car = (cant, id)=>{
    return{
        type: RENT_CAR,
        cant: cant,
        id: id
    }
}

export const return_car = (cant, id)=>{
    return{
        type: RETURN_CAR,
        cant: cant,
        id: id
    }
}
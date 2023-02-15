import {
    ADD_STOLEN_CARD,
    REMOVE_STOLEN_CARD,
    GET_ALL_STOLEN_CARDS
} from "./stolenCardActions"

const stolenCardReducer = (state, action) =>{
    switch (action.type){
        case action.type === ADD_STOLEN_CARD:
            const {id, number} = action.payload;
            return {}
    }
}

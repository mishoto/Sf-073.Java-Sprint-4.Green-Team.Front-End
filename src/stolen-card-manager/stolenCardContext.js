import React, {useEffect, useContext, useReducer} from "react"
import stolenCardReducer from "./stolenCardReducer"
import {
    REMOVE_STOLEN_CARD,
    GET_ALL_STOLEN_CARDS,
    ADD_STOLEN_CARD
} from "./stolenCardActions"
import {getUserFromLocalStorage} from "../utils"

const CardContext = React.createContext();

const initialState = {
    card: getUserFromLocalStorage()
}

import HotelData from "./HotelData"

let initialState={
    hotels:HotelData.Mumbaidata
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "":
    return { ...state, ...payload }

  default:
    return state
  }
}

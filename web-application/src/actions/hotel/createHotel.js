import axios from 'axios';

export const CREATE_HOTEL_BEGIN = 'CREATE_HOTEL_BEGIN';
export const CREATE_HOTEL_SUCCESS = 'CREATE_HOTEL_SUCCESS';
export const CREATE_HOTEL_FAILURE = 'CREATE_HOTEL_FAILURE';

export const createHotelBegin = () => ({
  type: CREATE_HOTEL_BEGIN,
});

export const createHotelSuccess = successMessage => ({
  type: CREATE_HOTEL_SUCCESS,
  payload: {successMessage},
});

export const createHotelFailure = error => ({
  type: CREATE_HOTEL_FAILURE,
  payload: {error},
});

export const createHotel = (
  tripId,
  name,
  price,
  location,
  checkIn,
  checkOut,
  numRating,
  rating,
  priceLevel,
) => {
  return dispatch => {
    dispatch(createHotelBegin());

    return axios
      .post(`/hotel/add/${tripId}`, {
        name,
        price,
        location,
        checkIn,
        checkOut,
        numRating,
        rating,
        priceLevel,
      })
      .then(response => response.data)
      .then(successMessage => dispatch(createHotelSuccess(successMessage)))
      .catch(error => dispatch(createHotelFailure(error)));
  };
};

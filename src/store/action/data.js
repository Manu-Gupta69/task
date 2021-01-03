export const SET_DATA = 'SET_DATA';
export const SET_DETAILS = 'SET_DETAILS'

export const setdata = (data) =>{
    return {
        type : SET_DATA,
        payload : {
          data : data
        }
    }
}

export const setdetails = (data , key) =>{
  return {
    type : SET_DETAILS,
    payload : {
      data : data,
      key : key
    }
  }
}

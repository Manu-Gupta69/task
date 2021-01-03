import { SET_DATA } from "../action/data";

const intialstate = {
  data: [],
  counter : {
    delcounter: 0,
  intcounter: 0,
  oodcounter: 0,
  undcounter: 0,
  nficounter: 0,
  }
  
};

const dataReducer = (state = intialstate, action) => {
  switch (action.type) {
    case SET_DATA:
        action.payload.data.forEach(piece => {
            if(piece.current_status_code === 'DEL'){
              state.counter.delcounter += 1;
            } 
            else if(piece.current_status_code === 'OOD'){
              state.counter.oodcounter +=1;
            }
            else if(piece.current_status_code === 'INT'){
              state.counter.intcounter +=1;
            }
            else if(piece.current_status_code === 'UND'){
              state.counter.undcounter +=1;
            }
            else if(piece.current_status_code === 'NFI'){
              state.counter.nficounter +=1;
            }
        });
        const updatedData = [...action.payload.data]
       return { ...state , data: updatedData , counter:{...state.counter } }
    default:
      return intialstate;
  }
};

export default dataReducer;

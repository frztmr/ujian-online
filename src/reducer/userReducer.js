const INITIAL_STATE = { 
    user_id:"", 
    firstname:"", 
    midname:"",
    lastname:"",
  };
  
  export const userReducer = (state = INITIAL_STATE, action) => {
    // console.log("state from reducer",state);
  
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          ...action.payload,
        }; 
  
      case "LOGOUT_SUCCESS":
        return INITIAL_STATE;
  
      default:
        return state;
        
    }
  };
    
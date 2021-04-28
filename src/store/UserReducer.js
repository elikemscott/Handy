import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    
  ],

  accepted_users: [],
};

const usersReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        id: uuid(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        product: action.payload.product,
        materials: action.payload.materials,
        total: action.payload.total,
      };
      return { ...state, users: [...state.users, newUser] };

    case "DELETE_USER":
      const filterdUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, users: filterdUsers };

    // case "EDIT_USER":
    //   const editedUsers = state.users.map((user) => {
    //     if (user.id === action.user_id) {
    //       return { ...user, ...action.updated_info };
    //     } else {
    //       return user;
    //     }
    //   });
    //   return { ...state, users: editedUsers };

    case "ADD_ACCEPTED_USER":
      console.log("bgt");
      const acceptedNewUser = {
        id: uuid(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.email,
        product: action.payload.product,
        materials: action.payload.materials,
        total: action.payload.total,
      };
      return { ...state, accepted_users: [...state.accepted_users, acceptedNewUser] };

    default:
      return state;
  }
};

export default usersReducer;

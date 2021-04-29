import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    {
      id: "1",
      firstName: "Edith",
      lastName: "Thomson",
      email: "Editom@gmail.com",
      phone: "+2337658397",
      product: "Kitchen Cabinet",
      materials: '800',
      workmanship: "250",
      total: "$1,050",
      
      
    },

    {
      id: "2",
      firstName: "Abraham",
      lastName: "Davidson",
      email: "Abdave@gmail.com",
      phone: "+2338740386",
      product: "Door",
      materials: '300',
      workmanship: "100",
      total: "$400",
      
      
    },

    {
      id: "3",
      firstName: "William",
      lastName: "Osie",
      email: "willos@yahoo.com",
      phone: "+2332087639",
      product: "Sofa",
      materials: '2500',
      workmanship: "500",
      total: "$3,000",
      
      
    },

    {
      id: "4",
      firstName: "Desmond",
      lastName: "Agbeko",
      email: "Agbe@gmail.com",
      phone: "+2335784276",
      product: "Fence",
      materials: '2300',
      workmanship: "1000",
      total: "$3,300",
      
      
    },

    {
      id: "5",
      firstName: "Ellis",
      lastName: "Asare",
      email: "Elisas@yahoo.com",
      phone: "+233557890283",
      product: "Gate",
      materials: '5200',
      workmanship: "2000",
      total: "$7,200",
      
      
    },

    {
      id: "1",
      firstName: "Caroline",
      lastName: "Thomson",
      email: "caro@gmail.com",
      phone: "+2336524387",
      product: "Wardrobe",
      materials: '1000',
      workmanship: "250",
      total: "$1,250",
      
      
    },

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
      return {
        ...state,
        accepted_users: [...state.accepted_users, acceptedNewUser],
      };

    default:
      return state;
  }
};

export default usersReducer;

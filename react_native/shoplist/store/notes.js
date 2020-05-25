// ACTION TYPES
const ADD_LIST = "ADD_LIST";
const ADD_COMPONENT = "ADD_COMPONENT";
const DELETE_COMPONENT = "DELETE_COMPONENT";
const UPDATE_COMPONENT = "UPDATE_COMPONENT";
const TOGGLE_BOUGHT = "TOGGLE_BOUGHT";
const RESET_BOUGHT = "RESET_BOUGHT";
const DELETE_LIST = "DELETE_LIST";

// SELECTORS
const MODULE_NAME = "data";
export const getLists = (state) => state[MODULE_NAME].lists;

// REDUCER

const initialState = {
  lists: [
    {
      id: createID(),
      name: "Everything for breakfast",
      type: "onetime",
      components: [
        {
          id: createID(),
          name: "Pasta",
          amount: 2,
          unit: "pkg",
          bought: true,
        },
        {
          id: createID(),
          name: "Salt",
          amount: 1,
          unit: "pkg",
          bought: true,
        },
        {
          id: createID(),
          name: "Tomatoes",
          amount: 1,
          unit: "kg",
          bought: false,
        },
        {
          id: createID(),
          name: "Cheese",
          amount: 0.3,
          unit: "kg",
          bought: false,
        },
      ],
    },
  ],
};

export function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_LIST:
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: createID(),
            name: payload.name,
            type: payload.type,
            components: [],
          },
        ],
      };
    case DELETE_LIST:
      return {
        lists: state.lists.filter((list) => list.id !== payload.listID),
      };

    case ADD_COMPONENT:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === payload.listID) {
            return {
              ...list,
              components: [
                ...list.components,
                {
                  id: createID(),
                  name: payload.name,
                  amount: payload.amount,
                  unit: payload.unit,
                  bought: false,
                },
              ],
            };
          }
          return list;
        }),
      };
    case DELETE_COMPONENT:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === payload.listID) {
            return {
              ...list,
              components: list.components.filter(
                (comp) => comp.id !== payload.componentID
              ),
            };
          }
          return list;
        }),
      };
    case UPDATE_COMPONENT:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === payload.listID) {
            return {
              ...list,
              components: list.components.map((comp) => {
                if (comp.id === payload.componentID) {
                  return {
                    ...comp,
                    name: payload.name,
                    amount: payload.amount,
                    unit: payload.unit,
                  };
                }
                return comp;
              }),
            };
          }
          return list;
        }),
      };
    case TOGGLE_BOUGHT:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === payload.listID) {
            return {
              ...list,
              components: list.components.map((comp) => {
                if (comp.id === payload.componentID) {
                  return {
                    ...comp,
                    bought: !comp.bought,
                  };
                }
                return comp;
              }),
            };
          }
          return list;
        }),
      };
    case RESET_BOUGHT:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === payload.listID) {
            return {
              ...list,
              components: list.components.map((comp) => {
                return {
                  ...comp,
                  bought: false,
                };
              }),
            };
          }
          return list;
        }),
      };
    default:
      return state;
  }
}

// ACTION CREATORS

export const addList = (payload) => ({
  type: ADD_LIST,
  payload,
});
export const deleteList = (payload) => ({
  type: DELETE_LIST,
  payload,
});
export const addComponent = (payload) => ({
  type: ADD_COMPONENT,
  payload,
});
export const deleteComponent = (payload) => ({
  type: DELETE_COMPONENT,
  payload,
});
export const updateComponent = (payload) => ({
  type: UPDATE_COMPONENT,
  payload,
});
export const toggleBought = (payload) => ({
  type: TOGGLE_BOUGHT,
  payload,
});
export const resetBought = (payload) => ({
  type: RESET_BOUGHT,
  payload,
});

function createID() {
  return `${Date.now()}${Math.random()}`;
}

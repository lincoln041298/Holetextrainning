const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoLists: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  ],
};

const rootReducer = (state = initState, action) => {};

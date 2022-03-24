export const actions = {
  //--nuxtServerInit Thằng này chạy trên server mỗi khi các bố F5 hoặc firt req
  async nuxtServerInit({ dispatch, commit }, { req }) {
    console.log("Start Request, Login status: " + this.$auth.loggedIn);
  }
};

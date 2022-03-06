<template>
  <section class="signup" style="background: #aac7fa">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <div class="mb-4 d-flex align-items-end">
            <nuxt-link to="/"
              ><img
                src="https://res.cloudinary.com/dattranit/image/upload/v1644306810/DoAn/f3ahvkmkzkc0r0l108ux.png"
                alt=""
                height="100"
            /></nuxt-link>
            <h3>Đăng ký</h3>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <h3 class="text-center">Điền thông tin để đăng kí</h3>
          <form class="mx-1 mx-md-4">
            <div class="d-flex flex-row align-items-center mb-4">
              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
              <div class="form-outline flex-fill mb-0">
                <input
                  type="text"
                  id="form3Example1c"
                  class="form-control"
                  placeholder="Họ của quý khách"
                  v-model="objAccount.firstname"
                />
              </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4">
              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
              <div class="form-outline flex-fill mb-0">
                <input
                  type="text"
                  id="form3Example1c"
                  class="form-control"
                  placeholder="Tên của quý khách"
                  v-model="objAccount.lastname"
                />
              </div>
            </div>

            <div class="d-flex flex-row align-items-center mb-4">
              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
              <div class="form-outline flex-fill mb-0">
                <input
                  type="text"
                  id="form3Example3c"
                  class="form-control"
                  placeholder="Tên đăng nhập"
                  v-model="objAccount.account.username"
                />
              </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4">
              <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
              <div class="form-outline flex-fill mb-0">
                <input
                  type="text"
                  id="form3Example3c"
                  class="form-control"
                  placeholder="Số điện thoại"
                  v-model="objAccount.phonenumber"
                />
              </div>
            </div>
            <div class="d-flex flex-row align-items-center mb-4">
              <i class="fas fa-map-marker-alt fa-lg me-3 fa-fw"></i>
              <div class="form-outline flex-fill mb-0">
                <input
                  type="text"
                  id="form3Example3c"
                  class="form-control"
                  placeholder="Địa chỉ"
                  v-model="objAccount.address"
                />
              </div>
            </div>

            <div class="d-flex flex-row align-items-center mb-4">
              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
              <div class="form-outline flex-fill mb-0">
                <input
                  type="password"
                  id="form3Example4c"
                  class="form-control"
                  placeholder="Mật khẩu"
                  v-model="objAccount.account.password"
                />
              </div>
            </div>

            <div class="d-flex flex-row align-items-center mb-4">
              <i class="fas fa-key fa-lg me-3 fa-fw"></i>
              <div class="form-outline flex-fill mb-0">
                <input
                  type="password"
                  id="form3Example4cd"
                  class="form-control"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
            </div>

            <div class="form-check d-flex justify-content-center mb-5">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3c"
              />
              <label class="form-check-label" for="form2Example3">
                I agree all statements in <a href="#!">Terms of service</a>
              </label>
            </div>

            <div class="d-flex justify-content-evenly mx-4 mb-3 mb-lg-4">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                @click="saveData"
              >
                Đăng kí
              </button>
              <nuxt-link to="/login"
                ><button type="button" class="btn btn-dark btn-lg">
                  Quay lại đăng nhập
                </button></nuxt-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Account } from "@/utils/account";
export default {
  methods: {
    async saveData() {
      let _data = await Account.act(this, { data: this.objAccount });
      if(_data){

        if (_data.IsSuccess) {
          this.$toast.success(_data.MSG);
        this.$router.push("/login");
      } else {
        console.log(_data);
        this.$toast.error(_data.MSG);
      }
        }
        else {
          this.$toast.error("Hãy thử đăng ký lại ");
        }
    },
  },
  data() {
    return {
      objAccount: {
        firstname: "",
        lastname: "",
        account: {
          username: "",
          password: "",
        },
        phonenumber: "",
        address: "",
      },
    };
  },
  layout: "empty",
  head: {
    title: "Đăng ký - Cửa hàng Thúy Hằng",
  }
};
</script>
<style scoped>
@media screen and (min-width: 767px) {
  .signup {
    height: 100vh;
  }
}
</style>

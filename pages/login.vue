<template>
  <section class="vh-100" style="background: #aac7fa">
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
            <h3>Đăng nhập</h3>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example13"
                >Tên đăng nhập</label
              >
              <input
                type="email"
                id="form1Example13"
                class="form-control form-control-lg"
                placeholder="Email hoặc số điện thoại"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-2">
              <label class="form-label" for="form1Example23">Mật khẩu</label>
              <input
                type="password"
                id="form1Example23"
                class="form-control form-control-lg"
                placeholder="Mật khẩu"
              />
            </div>

            <div class="mb-4">
              <!-- Checkbox -->
              <div class="form-check"></div>
              <button class="btn">Quên mật khẩu?</button>
            </div>

            <!-- Submit button -->
            <div class="d-flex justify-content-evenly">
              <button  class="btn btn-primary btn-lg btn-block">
                Đăng nhập
              </button>
              <nuxt-link to="/signup"
                ><button  class="btn btn-secondary btn-lg btn-block">
                  Đăng ký
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
export default {
  layout: "empty",
};
</script>
<style></style>

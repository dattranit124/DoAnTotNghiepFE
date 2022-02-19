<template>
  <footer class="text-center text-lg-start bg-dark text-muted pt-3">
    <section class="">
      <div class="container text-center text-md-start mt-5 wrapper">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Hệ Thống Thúy Hằng
            </h6>
            <p>
              Thúy Hằng Store là một hệ thống thời trang hàng đầu Việt Nam. Rất hân hạnh mang đến những trải nghiệm mua sắm tuyệt vời nhất dành cho quý khách.
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <p v-for="(about,index) in abouts" :key="index">
              <nuxt-link :to="about.url" class="text-reset">{{about.name	}}</nuxt-link>
            </p>
            
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <p v-for="(user,index) in users" :key="index">
              <nuxt-link :to="user.url" class="text-reset">{{user.name}}</nuxt-link>
            </p>
            
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <p> GET 20% OFF COUPON</p>
            <p>
             Đăng kí để nhận nhiều thông tin ưu đãi từ Thúy Hằng Store
            </p>
			<p class="d-flex justify-content-center justify-content-md-start">
				<input type="text" placeholder="Email..." style="outline: none; color:black">
				<button style="color:black !important" class="text-nowrap btn btn-light">Đăng kí</button>
			</p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="#"
        >ThuyHang.store</a
      >
    </div>
  </footer>
  <!-- Footer -->
</template>
<script>
export default {
  data () {
    return {
		abouts : [
			{
				name : 'Giới thiệu',
				url : '#'
			},
			{
				name : 'Tin tức & Sự kiện',
				url : '#'
			},
			{
				name: 'Cửa hàng',
				url : '#',
			},
			{
				name:'Liên hệ',
				url : '#'
			}
		],
		users : [
			{
				name : 'Tài khoản',
				url :'',
			},
			{
				name : 'Giỏ hàng',
				url :'',
			},
			{
				name : 'Thanh toán',
				url :'',
			},
			{
				name : 'Kiểm tra đơn hàng',
				url :'',
			},
		]
    }
  },

};
</script>
<style scoped>
* {
	color: white;
}
</style>

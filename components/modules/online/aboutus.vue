<template>
  <div class="aboutus text-center d-flex flex-column justify-content-center">
	  <div class="w-75 mx-auto">
		  <h1>Thúy Hằng Store</h1>
		  <p class="fs-5 mt-4">Hệ thống của hàng thời trang hàng đầu Việt Nam. Mong muốn lớn nhất của chúng tôi là mang đến cho các bạn những trải nghiệm tuyệt vời nhất khi mua sắm thời trang trên toàn lãnh thổ Việt Nam.</p>
	 		<nuxt-link style="color :black; text-decoration: none;" class=" fw-bold fs-3" to="/about">Về chúng tôi <i class="fas fa-arrow-right fs-4 ms-3 "></i></nuxt-link>
	  </div>

  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.aboutus {
  height: 400px;
  background: linear-gradient(
      to bottom,
      rgba(218,227,229, 0.9),
      rgba(218,227,229, 0.9)
    ),
    url(https://res.cloudinary.com/dattranit/image/upload/v1644306810/DoAn/f3ahvkmkzkc0r0l108ux.png)
      no-repeat center/contain;
}
</style>

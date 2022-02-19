<template>
  <div class="about-title text-center pt-5">
	  <h1>{{title}}</h1>
	  <h2 class="fs-5 fw-normal mt-4"><nuxt-link to="/" class="fs-5">TRANG CHỦ</nuxt-link> / {{title | upperCase}}</h2>
  </div>
</template>
<script>
export default {
props : {
	title : String,
},
filters: {
	upperCase(value)
	{
		return value.toUpperCase();
	}
}
};


</script>
<style scoped>
.about-title {
  height: 200px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(68, 67, 67, 0.7)
    ),
    url(https://res.cloudinary.com/dattranit/image/upload/v1644374281/DoAn/qfqeszgxwizxp7zwuolp.jpg)
      no-repeat center/cover;
}
.about-title  * {
	color: white;
	text-decoration: none;
}
</style>

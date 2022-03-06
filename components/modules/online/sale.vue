<template>
  <div
    class="slider d-md-flex d-block align-items-md-center"
    style="background-color: #f0e4dd"
  >
    <div class="pt-5 mx-5">
      <strong class="fs-1 sale-up">Sale off up to 70%</strong>
      <p class="mt-md-5 fs-3">
        Những sản phẩm mới nhất đang được cập nhật liên tục trên Website của
        Thúy Hằng Store
      </p>
      <button class="btn btn-dark mt-md-5 px-5 py-3" @click="$router.push('/product')">MUA NGAY</button>
    </div>
    <div class="w-auto">
      <img
        src="https://res.cloudinary.com/dattranit/image/upload/v1644320221/DoAn/gipxfm2n67p4yph3ex5n.png"
        alt=""
        class="w-100"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.sale-up {
	font-size: 50px;
}
</style>

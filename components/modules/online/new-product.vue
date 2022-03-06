<template>
  <div class="wrapper row my-5">
    <h3 class="text-center fs-1">Sản phẩm mới</h3>
    <div
      class="col-12 col-sm-6 col-xl-3 text-center mt-5"
      role="button"
      v-for="(item, index) in products"
      :key="index"
	  @click="clickDetail(item.Slug)"
    >
      <img
        :src="item.Image"
        alt=""
        height="300"
        width="200"
        style="object-fit: contain"
      />
      <p class="py-3">{{ item.ProductName }}</p>
      <h4 class="fs-6 text-danger">{{ item.Price | stringToMoney }}</h4>
    </div>
    <div class="mt-5 text-center" role="button">
      <nuxt-link to="/product" style="text-decoration: none; color: black"
        ><h5>Xem thêm sản phẩm <i class="fas fa-arrow-right ms-3"></i></h5
      ></nuxt-link>
    </div>
  </div>
</template>
<script>
import { Product } from "@/utils/product";
export default {
  filters: {
    stringToMoney(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
  methods: {
    async loadData() {
      let _data = await Product.get(this, { params: this.objParams });
      this.products = _data.product;
    },
    clickDetail(slug) {
      this.$router.push(`/product/${slug}`);
    },
  },
  async created() {
    this.loadData();
  },
  data() {
    return {
      products: [],
      objParams: {
        pageSize: 8,
        pageIndex: 1,
      },
    };
  },
};
</script>
<style></style>

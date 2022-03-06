<template>
  <div class="my-5">
    <ul class="list-group product-list">
      <li class="list-group-item fs-4 fw-bold text-center">SẢN PHẨM MỚI</li>
      <li
        class="list-group-item p-2 d-flex mw-100"
        v-for="(item, index) in newProducts"
        :key="index"
        :class="{'odd' : index%2==0}"
        @click="clickDetail(item.Slug)"
      >
        <img :src="item.Image" alt="" height="50" />
        <div class="ps-2 d-flex flex-column justify-content-center fw-bold" role="button">
          <div class="product-name mb-0">{{ item.ProductName }}</div>
          <p class="mb-0">{{ item.Price | stringToMoney }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Product } from "@/utils/product"
export default {
  data() {
    return {
      newProducts: [
        
      ],
      objParams : {
			pageSize : 5,
			pageIndex : 1,
		}

    };

  },
   created () {
	 this.loadData();
  },
  filters : {
		stringToMoney(value){
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
		}
	},
  methods: {
	  async loadData() {
		  let _data = await Product.get(this,{params : this.objParams});
      if(_data)
      { 
        this.newProducts = _data.product;
      }
		  },
      clickDetail(slug) {
			  this.$router.push(`/product/${slug}`)
		  }
  },
};
</script>
<style scoped>
.product-list {
  width: 300px;
}
.odd {
  background-color: #f8f8f8;
}

</style>

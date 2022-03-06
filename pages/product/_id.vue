<template>
	<div class="wrapper ms-5 my-5">
		<div class="row">
			<img :src="objDetail.Image" alt="" height="400" class="col-12 col-md-4">
			<div class="col-12 col-md-8">
				<h2>{{objDetail.ProductName}}</h2>
				<p class="text-danger fs-4">{{objDetail.Price | stringToMoney}}</p>
				<p v-html="objDetail.Description"></p>
				<div class="d-flex align-items-center">
					<span role="button" class=" p-3 fs-4" @click="objDetail.Quanlity--">-</span>
					<input type="number" min="1" step="1" style="width: 50px" v-model="objDetail.Quanlity">
					<span role="button" class="p-3 fs-4" @click="objDetail.Quanlity++">+</span>
					<button @click="AddToCart(objDetail)" class="btn btn-primary"><i class="fas fa-cart-plus me-3"></i>Thêm vào giỏ</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { Product } from "@/utils/product";
import {mapMutations} from 'vuex'
export default {
  created () {
	  this.getDetail();
  },
  filters: {
    stringToMoney(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
  methods: {
	  ...mapMutations('cart',['AddToCart']),
	 async getDetail()
	  {
		  var slugId = this.$route.params.id;
		  var _data = await Product.getBySlug(this, {params :{slug :slugId } });
		  if(_data) {
			  this.objDetail = _data;
			  this.objDetail.Quanlity = 1;
		  }
		
	  }
  },
  data () {
    return {
		objDetail : {},
		objCart : {
			product : this.objDetail,
			
		}
    }
  },
	layout : 'detail'
	
}
</script>
<style scoped>

</style>
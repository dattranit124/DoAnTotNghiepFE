<template>
	<div class="w-100 ms-5" >
		<div>
			<h1 class="text-center">Sản phẩm</h1>
		</div>
		 <div class="d-flex align-items-center">
			 <input type="text" class="form-control" placeholder="Nhập tên sản phẩm để tìm kiếm" aria-label="Username" aria-describedby="basic-addon1" v-model="searchValue">
			 <i class="fas fa-search border p-2 rounded" @click="objParams.searchText = searchValue"></i>
		 </div>
		 <div class="mt-5 d-flex align-items-center"  >
			 <h3>Bộ sưu tập</h3>
			 <select class="ms-2 form-select w-25" v-model="objParams.collectionId">
				 <option :value="item.CollectionId" v-for="(item, index) in categorys" :key="index">{{item.CollectionName}}</option>
			 </select>
		 </div>
		 <div v-if="products.length<=0" class="text-center m-5 fs-3 text-danger">Không tìm thấy sản phẩm</div>
		<div v-else class="row">
			<div @click="clickDetail(item.Slug)" class="col-12 col-sm-6 col-xl-3 text-center mt-5 " role="button" v-for="(item, index) in products" :key="index">
				<img :src="item.Image" alt="" height="300" width="200" style="object-fit: contain">
				<p class="py-3">{{item.ProductName}}</p>
				<h4 class="fs-6 text-danger">{{item.Price | stringToMoney}}</h4>
			</div>
		</div>
		<div>
			<div v-if="products.length>0" class="d-flex justify-content-center mt-2">
				<div>
					<i @click="prevPage" role="button" class="fas fa-chevron-circle-left fs-3"></i>
					<span class="fs-3">{{objParams.pageIndex}}</span>
					<i @click="nextPage" role="button" class="fas fa-chevron-circle-right fs-3"></i>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
import { Product } from "@/utils/product"
import { Collection } from '@/utils/collection'
export default {
  data () {
    return {
		products : [],
		objParams : {
			searchText : '',
			collectionId : '',
			pageSize : 12,
			pageIndex : 1
		},
		searchValue : '',
		categorys : []
    }
  },	
  filters : {
		stringToMoney(value){
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
		}
	},
	layout : 'product',
	methods: {
	  async loadData() {
		  let _data = await Product.get(this,{params : this.objParams});
			this.products = _data.product;
		  },
		  clickDetail(slug) {
			  this.$router.push(`/product/${slug}`)
		  },

		  nextPage(){
			  this.objParams.pageIndex++;
			  window.scrollTo(0,0);
		  },
		  prevPage(){
			  this.objParams.pageIndex--;
			  window.scrollTo(0,0);
		  },
		  async  loadDataCollection() {
		   let _data = await Collection.get(this);
		   if(_data) {
			   this.categorys = _data;
			    var allItem = {
				CollectionId: "",
				CollectionName: "Tất cả sản phẩm",
				CollectionSlug: ""
			}
			   this.categorys.unshift(allItem);
		   }
	   }
  },
  watch : {
	  objParams : {
		  handler() {
			  this.loadData();
		  },
		  deep : true
		
	  },
		  
	  
  },
 async created () {
	 this.loadData();
	 this.loadDataCollection();
  },
  props: {
	  
  }
}
</script>
<style>
	
</style>
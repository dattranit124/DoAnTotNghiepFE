<template>
  <div class="bg-white m-5">
    <div class="row p-3">
      <div class="col-auto">
        <nuxt-link to="/admin/product" class="btn btn-outline-secondary me-2">
          <i class="fas fa-arrow-left"></i>
        </nuxt-link>
      </div>
      <div class="col-auto">
        <h3 v-if="$route.params.id == 'create'">Thêm sản phẩm</h3>
        <h3 v-else>Sản phẩm : {{objProduct.ProductName}}</h3>
      </div>
    </div>
    <div class="row p-4">
      <div class="card col-8 p-3">
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Tên sản phẩm</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Nhập tên sản phẩm"
			v-model="objProduct.ProductName"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Giá sản phẩm</h5>
          <input
            type="number"
            class="form-control"
            placeholder="Nhập giá sản phẩm"
			v-model="objProduct.Price"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Số lượng sản phẩm</h5>
          <input
            type="number"
            class="form-control"
            placeholder="Nhập Số lượng sản phẩm"
			v-model="objProduct.Total"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Mô tả sản phẩm</h5>
          <Vue-Editor v-model="objProduct.Description" />
        </div>
		<div class="border border-1 p-3 rounded mb-3">
          <h5>Bộ sưu tập</h5>
		  <select class="form-select"  v-model="objProduct.Collection">
			  <option :value="item" v-for="(item,index) in options" :key="index">{{item.CollectionName}}</option>
		  </select>
        </div>
      </div>
      <div class="card col-4 p-3">
		  <h5>Ảnh sản phẩm</h5>
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupFile01">
            <img
              v-if="objProduct.Image == ''"
              src="@/static/assets/image/no-image.png"
              alt=""
              height="300"
              class="text-center"
            />
            <img
              v-else
              :src="objProduct.Image"
              alt=""
              height="300"
              class="text-center"
			  style="width : 300px; heigth : 300px"
            />
          </label>
          <input
            type="file"
            class="form-control"
            id="inputGroupFile01"
            v-show="false"
            @change="insertPicture($event)"
          />
        </div>
      </div>
    </div>
	<div class="d-flex justify-content-between px-5 pb-2">
		<button @click="$router.push('/admin/product')" class="btn btn-danger">Hủy bỏ</button>
		<button @click="saveData" class="btn btn-secondary">Lưu</button>
	</div>
  </div>
</template>
<script>
import { Product } from '@/utils/product'
import { Collection } from '@/utils/collection'

export default {
  created () {
	  this.loadOption();
	  if(this.$route.params.id != 'create')
	  {
		  this.loadData();
	  }
  },
  data() {
    return {
      objProduct: {
		ProductId : '',
        ProductName: "",
        Description: "",
        Price: "",
        Total: 0,
        Image: "",
        Collection: {},
      },
	  options : []
    };
  },
  methods: {
    insertPicture(value) {
      var img = value.target.files[0];
      const reader = new FileReader();
      let rawImg;
       reader.onloadend = () => {
        rawImg = reader.result;
        this.objProduct.Image = rawImg;
      };
      reader.readAsDataURL(img);
    },
	async loadData() {
		if(this.$route.params.id != 'create')
		{
			var id = this.$route.params.id;
			var _data = await Product.getDetail(this,id);
			if(_data)
			{
				this.objProduct = _data;
			}
		}
	},
	async loadOption() {
		var _data = await Collection.get(this)
		if(_data) {
				this.options = _data;
		}
	},

	async saveData()
	{
		try {
			var _data = await Product.act(this, {data : this.objProduct});
			if(_data.IsSuccess)
			{
				this.$toast.success(_data.MSG);
				setTimeout(() => {
					this.$router.push('/admin/product/'+_data.Id);
				}, 1000);
			}
			
		} catch (error) {
			console.log('error: ', error);
		}
	}
  },
  layout: "admin",
};
</script>
<style></style>

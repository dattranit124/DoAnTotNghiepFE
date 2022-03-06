<template >
	<div class="bg-white m-5">
    <div class="row p-3">
      <div class="col-auto">
        <nuxt-link to="/admin/order" class="btn btn-outline-secondary me-2">
          <i class="fas fa-arrow-left"></i>
        </nuxt-link>
      </div>
      <div class="col-auto">
        <h3 >Đơn hàng : {{objOrder.OderCustomerCheck}}</h3>
      </div>
    </div>

    <div class="row p-4">
      <div class="card col-8 p-3">
		  <div class="border border-1 p-3 rounded mb-3">
			<h5>Trạng thái đơn hàng</h5>
			<select class="form-select" v-model="objOrder.OrderStatus">
				<option :value="item.value" v-for="(item,index) in objStatus " :key="index">{{item.name}}</option>
			</select>
		</div>
		  <h4>Thông tin khách hàng</h4>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Tên khách hàng</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Nhập tên sản phẩm"
			v-model="objOrder.CustomerOrder.CustomerName"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Số điện thoại</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Số điện thoại khách hàng"
			v-model="objOrder.CustomerOrder.PhoneCustomer"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Email</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Số điện thoại khách hàng"
			v-model="objOrder.CustomerOrder.EmailCustomer"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Địa chỉ khách hàng</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Địa chỉ khách hàng"
			v-model="objOrder.CustomerOrder.AddressCustomer"
          />
        </div>
      </div>
      <div class="card col-4 p-3">
		  <h5 class="my-3">Thông tin Đơn hàng</h5>
		  <div class="row" >
			  <h5 class="col-6">Sản phẩm</h5>
			  <h5 class="col-auto">Giá tiền</h5>
			  <h5 class="col-auto">Số lượng</h5>
		  </div>
		  <div class="row border-bottom" v-for="(item, index) in objOrder.Product" :key="index">
			  <img :src="item.Image" style="width : 50px; height : 50px"  class="col-1 rounded-circle" >
			  <p class="col-4">{{item.ProductName}}</p>
			  <p class="col-auto ps-4">{{item.Price | stringToMoney}}</p>
			  <p class="col-auto ps-5">{{item.Quanlity}}</p>
		  </div>
		  <div class="mt-5">
			  <h5>Tổng tiền : {{objOrder.TotalPrice | stringToMoney}} </h5>
		  </div>
      </div>
    </div>
	<div class="d-flex justify-content-between px-5 pb-2">
		<button @click="$router.push('/admin/order')" class="btn btn-danger">Hủy bỏ</button>
		<button @click="saveData" class="btn btn-secondary">Lưu</button>
	</div>
  </div>
</template>
<script>
import { Order } from "@/utils/order";
export default {
  created () {
	  this.loadData();
  },
  filters: {
    stringToMoney(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
	layout : 'admin',
  data () {
    return {
		objOrder : {
			OderCustomerCheck : '',
			CustomerOrder : {
				CustomerName : '',
				EmailCustomer : '',
				AddressCustomer : '',
				PhoneCustomer : '',
			},
			Product : [],
			OrderStatus :null,
		},
		 objStatus : [
		  {
			  name : 'Chờ xác nhận',
			  value : 0,
		  },
		  {
			  name : 'Đã tiếp nhận',
			  value : 1,
		  },
		  {
			  name : 'Đang giao hàng',
			  value : 2,
		  },
		  {
			  name : 'Đã giao hàng',
			  value : 3,
		  },
	  ],
    }
  },

  methods: {
	 async saveData() {
		var _data = await Order.update(this, {data : this.objOrder});
		if(_data) {
			this.$toast.success(_data.MSG);
		}
	  },
	  async loadData(){
		  var id  = this.$route.params.id;
		  var _data = await Order.getDetail(this,id);
		  if(_data) {
			  this.objOrder = _data;
		  }
	  }
	
  },
	
}
</script>
<style>
	
</style>
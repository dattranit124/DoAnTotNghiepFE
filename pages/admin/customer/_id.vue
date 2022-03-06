<template >
	 <div class="bg-white m-5">
    <div class="row p-3">
      <div class="col-auto">
        <nuxt-link to="/admin/customer" class="btn btn-outline-secondary me-2">
          <i class="fas fa-arrow-left"></i>
        </nuxt-link>
      </div>
      <div class="col-auto">
        <h3 >Khách hàng : {{objCustmer.FirstName + ' ' + objCustmer.LastName}}</h3>
      </div>
    </div>
      <div class="card  p-3">
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Họ</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Họ"
			v-model="objCustmer.FirstName"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Tên</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Tên"
			v-model="objCustmer.LastName"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Tài khoản</h5>
          <input
            type="text"
            class="form-control"
			disabled
			v-model="objCustmer.Account.Username"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Mật khẩu</h5>
          <input
            type="text"
            class="form-control"
			v-model="objCustmer.Account.Password"
			disabled
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Số điện thoại</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Số điện thoại"
			v-model="objCustmer.PhoneNumber"
          />
        </div>
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Địa chỉ</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Số điện thoại"
			v-model="objCustmer.Address"
          />
        </div>

	</div>
		<div class="d-flex justify-content-between px-5 pb-2 mt-2">
		<button @click="$router.push('/admin/customer')" class="btn btn-danger">Hủy bỏ</button>
		<button @click="saveData" class="btn btn-secondary">Lưu</button>
	</div>
	 </div>
</template>
<script>
import  { Customer } from "@/utils/customer"
export default {
  methods: {
	  async loadData()
	  {
		  var id = this.$route.params.id;
		  var _data = await Customer.getDetail(this,id);
		  if(_data) 
		  {
			  this.objCustmer = _data;
		  }
	  },
	  async saveData() {
		 	var _data = await Customer.update(this,{data : this.objCustmer});
			 if(_data.IsSuccess)
			 {
				 this.$toast.success(_data.MSG)
				 setTimeout(() => {
					 this.$router.push('/admin/customer/' + _data.Id);
				 }, 1000);
			 }
	  },
  },
  created () {
	  this.loadData();
  },
  data () {
    return {
		objCustmer : {
			FirstName : '',
			LastName : '',
			Account : {
				Username : '',
				Password : '',
			},
			PhoneNumber : '',
			Address : '',
		}
    }
  },
	layout : "admin",
}
</script>
<style >
	
</style>
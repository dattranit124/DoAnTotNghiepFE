<template >
	 <div class="bg-white m-5">
    <div class="row p-3">
      <div class="col-auto">
        <nuxt-link to="/admin/collection" class="btn btn-outline-secondary me-2">
          <i class="fas fa-arrow-left"></i>
        </nuxt-link>
      </div>
      <div class="col-auto">
        <h3 v-if="$route.params.id == 'create'">Thêm Bộ sưu tập</h3>
        <h3 v-else>Bộ sưu tập : </h3>
      </div>
    </div>
	<div class="row p-4">
      <div class="card col-8 p-3">
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Tên bộ sưu tập</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Nhập tên bộ sưu tập"
			v-model="objCollection.CollectionName"
          />
        </div>
	  </div>
	</div>
		<div class="d-flex justify-content-between px-5 pb-2">
		<button @click="$router.push('/admin/collection')" class="btn btn-danger">Hủy bỏ</button>
		<button @click="saveData" class="btn btn-secondary">Lưu</button>
	</div>
	 </div>
</template>
<script>
import  {Collection } from "@/utils/collection"
export default {
  created () {
	   if(this.$route.params.id != 'create') {
		   this.loadData();
	   }
  },
  methods: {
	 async saveData() {
		 	var _data = await Collection.act(this,{data : this.objCollection});
			 if(_data.IsSuccess)
			 {
				 this.$toast.success(_data.MSG)
				 setTimeout(() => {
					 this.$router.push('/admin/collection/' + _data.Id);
				 }, 1000);
			 }
	  },
	  async loadData() {
		  if(this.$route.params.id != 'create')
		  {
			  var id = this.$route.params.id;
			 var _data = await Collection.getDetail(this,id);
				if(_data) {
					this.objCollection = _data;
				}
		  }
	  }
  },
  data () {
    return {
		objCollection : {
			CollectionName : '',
		}
    }
  },
	layout : 'admin',
	
}
</script>
<style >
	
</style>
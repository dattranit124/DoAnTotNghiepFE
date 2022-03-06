<template >
	<div>
		<div class="bg-white m-5">
    <div class="d-flex justify-content-between p-3">
      <h3 v-if="collections">{{collections.length }} Bộ sưu tập</h3>
      <button
        class="btn btn-secondary"
        @click="$router.push('/admin/collection/create')"
      >
        Thêm Bộ sưu tập
      </button>
    </div>
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead class="align-middle">
          <tr>
            <!-- Checkbox -->
            <th>Tên bộ sưu tập</th>
            <th class="text-center"></th>
          </tr>
        </thead>

        <tbody class="border-top-0">
          <tr v-for="(item, index) in collections" :key="index">
            <!-- Checkbox -->
			<td>{{item.CollectionName}}</td>
            <td class="col-auto">
              <button @click="$router.push('/admin/collection/' + item.CollectionId)" class="btn btn-success">Sửa</button>
            </td>
            <td class="col-auto">
              <button
                @click="clickDelete(item.CollectionId)"
                class="btn btn-danger"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
	</div>
</template>
<script>
import  {Collection } from "@/utils/collection"
export default {
  created () {
	  this.loadData();
  },
  methods: {
	  async loadData() {
		  	 var _data = await Collection.get(this);
			   if(_data)
			   {
				   this.collections = _data;
			   }
	  },
	  async clickDelete(id) {
      try {
        var _data = await Collection.delete(this, { data: [id] });
        if (_data) {
          if (_data.IsSuccess) {
            this.$toast.success(_data.MSG);
            this.loadData();
          }
        }
      } catch (error) {
        console.log("error: ", error);
      }
    },
  },
  data () {
    return {
		collections : [],
		
    }
	
  },
  
	layout : 'admin'
}
</script>
<style lang="">
	
</style>
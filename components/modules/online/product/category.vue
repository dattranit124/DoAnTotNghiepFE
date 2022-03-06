<template>
  <div class="my-5">
    <ul class="list-group" style="width: 300px;">
      <li class="list-group-item fs-4 fw-bold text-center">DANH MỤC</li>
      <li
        class="list-group-item p-2 d-flex mw-100 fw-bold"
		role="button"
		:class="{odd : item.id%2==0}"
        v-for="item in categorys"
        :key="item.id"
      >
        {{item.CollectionName}}
      </li>
    </ul>
  </div>
</template>
<script>
import { Collection } from '@/utils/collection'
export default {
  created () {
this.loadData();
  },
  methods: {
	 async  loadData() {
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
  data () {
    return {
		categorys : [
	]
    }
  },

	
};
</script>
<style scoped>
.odd {
  background-color: #f8f8f8;
}
</style>

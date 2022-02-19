<template>
  <div class="my-5">
    <ul class="list-group" style="width: 300px;">
      <li class="list-group-item fs-4 fw-bold text-center">DANH MỤC</li>
      <li
        class="list-group-item p-2 d-flex mw-100"
		role="button"
		:class="{odd : item.id%2==0}"
        v-for="item in categorys"
        :key="item.id"
      >
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
		categorys : [
		{
			id : 1,
			name : 'Quần áo'
		},
		{
			id : 2,
			name : 'Túi xách & Balo'
		},
		{
			id : 3,
			name : 'Giày dép'
		},
		{
			id : 4,
			name : 'Phụ kiện & Trang sức'
		},
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

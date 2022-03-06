<template >
	<div>
		<div v-if="pageDetail" class="m-5">
			<h5>{{pageDetail.Title}}</h5>
			<div v-html="pageDetail.Content"></div>
		</div>
	</div>

</template>
<script>
import { Page } from "@/utils/page";
export default {
  created () {
	  this.getDetail();
  },
  data () {
    return {
		pageDetail : {},
    }
  },
  methods: {
	  async getDetail()
	  {
		  var slugId = this.$route.params.id;
		  var _data = await Page.getBySlug(this, {params :{slug :slugId } });
		  if(_data) {
			 this.pageDetail = _data;
		  }
		
	  }
  },
	
}
</script>
<style>
	
</style>
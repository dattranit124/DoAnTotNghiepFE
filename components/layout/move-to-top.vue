<template >
	<div @click="clickToTop" v-if="windowTop>800" class="d-flex align-items-center justify-content-center movetop fixed-bottom me-3 ms-auto mb-3" role="button">
		<i class="fas fa-chevron-up fs-3"></i>
	</div>
</template>
<script>
export default {
  methods: {
	  clickToTop() {
		  window.scrollTo(0,0);
	  }
  },
	 data(){
      return {
          windowTop: 0
      };
   },
   mounted()
   {
       var that = this;
       window.addEventListener("scroll", function(){
           that.windowTop = window.scrollY;
       });
   },
   
}
</script>
<style scoped>
	.movetop {
		
		width: 50px;
		height: 50px;
		background-color: white;
		border: 1px solid black;
		border-radius: 50%;
	}
	.movetop:hover {
		background-color: rgb(186, 186, 186);
		transition: linear 0.5s all;
	}
	
</style>
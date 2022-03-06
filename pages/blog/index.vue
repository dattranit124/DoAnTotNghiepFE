<template>
<client-only>
  <div>
	  <Layout-Page-Title :title="'Tin tức & Sự kiện'"/>
	  <div class="row wrapper my-5 position-relative">
		<nuxt-link :to="'/blog/' + item.PageSlug" class="card mx-2 col-12 col-xs-6 col-md-3 p-0" role="button" v-for="(item ,index) in pages" :key="index">
		  <img :src="item.Image" class="card-img-top" alt="..."  height="200" style="object-fit:cover"/>
		  <div class="card-body">
			<h5 class="card-title">{{item.Title}}</h5>
		  </div>
		  <div @click="test(item.date_created)" class="position-absolute top-0 start-0 p-2 m-1 rounded bg-dark text-white">
			  {{item.DateCreated| formatDate }}
		  </div>
		</nuxt-link>
	  </div>
  </div>
  </client-only>
</template>
<script>
import { Page } from "@/utils/page";
export default {
  created () {
	this.loadData();
  },
	filters : {
	formatDate(value) {
      if (value == null) return "";
      else {
		  var date = new Date(value)
        var dateStr = "";
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        if (day < 10) {
          day = `0${day}`;
        }
        if (month < 10) {
          month = `0${month}`;
        }
        dateStr = `${day}/${month}/${year}`;
        return dateStr;
      }
    },
	},
  data() {
    return {
      pages: [],
    };
  },
  methods: {
	    async loadData() {
      var _data = await Page.get(this);
      if (_data) {
        this.pages = _data;
      }
    },
  },
};
</script>
<style scoped>
.datetime {
	position: absolute;
};
a {
	text-decoration: none;
	color: black;
}
</style>

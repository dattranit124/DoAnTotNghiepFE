<template>
  <div class="bg-white m-5">
    <div class="row p-3">
      <div class="col-auto">
        <nuxt-link to="/admin/new" class="btn btn-outline-secondary me-2">
          <i class="fas fa-arrow-left"></i>
        </nuxt-link>
      </div>
      <div class="col-auto">
        <h3 v-if="$route.params.id == 'create'">Thêm bài viết</h3>
        <h3 v-else>Bài viết : {{objPage.Title}}</h3>
      </div>
    </div>
    <div class="row p-4">
      <div class="card col-8 p-3">
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Tiêu đề</h5>
          <input
            type="text"
            class="form-control"
            placeholder="Nhập tiêu đề"
			v-model="objPage.Title"
          />
        </div>
        
        <div class="border border-1 p-3 rounded mb-3">
          <h5>Nội dung bài viết</h5>
          <Vue-Editor v-model="objPage.Content"/>
        </div>
      </div>
      <div class="card col-4 p-3">
		  <h5>Ảnh bài viết</h5>
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupFile01">
            <img
              v-if="objPage.Image == ''"
              src="@/static/assets/image/no-image.png"
              alt=""
              height="300"
              class="text-center"
            />
            <img
              v-else
              :src="objPage.Image"
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
import { Page } from "@/utils/page";

export default {
  created () {
	  if(this.$route.params.id != 'create')
	  {
		  this.loadData();
	  }
  },
  data() {
    return {
      objPage: {
		Title : '',
		Content : '',
		Image : '',
      },
    };
  },
  methods: {
    insertPicture(value) {
      var img = value.target.files[0];
      const reader = new FileReader();
      let rawImg;
       reader.onloadend = () => {
        rawImg = reader.result;
        this.objPage.Image = rawImg;
      };
      reader.readAsDataURL(img);
    },
	async loadData() {
		if(this.$route.params.id != 'create')
		{
			var id = this.$route.params.id;
			var _data = await Page.getDetail(this,id);
			if(_data)
			{
				this.objPage = _data;
			}
		}
	},
	async saveData()
	{
		try {
			var _data = await Page.act(this, {data : this.objPage});
			if(_data.IsSuccess)
			{
				this.$toast.success(_data.MSG);
				setTimeout(() => {
					this.$router.push('/admin/new/'+_data.Id);
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

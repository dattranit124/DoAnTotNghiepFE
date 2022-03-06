<template>
  <div class="mb-5">
    <Layout-Page-Title :title="title" />
    <div class="wrapper d-md-flex justify-content-between d-block mt-5">
      <iframe
        class="w-lg-50 w-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.473663078437!2d105.73291811452754!3d21.053735992301945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1644312298806!5m2!1svi!2s"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div class="w-100 mt-3 mt-md-0 w-md-50 ms-md-5">
        <div class="d-flex align-items-center">
          <img
            src="https://res.cloudinary.com/dattranit/image/upload/v1644306810/DoAn/f3ahvkmkzkc0r0l108ux.png"
            alt=""
            height="100"
          />
          <div>
            <p>
              <i class="fas fa-map-marker-alt pe-2"></i> Quận Bắc Từ Liêm,Thành
              Phố Hà Nội
            </p>
            <p><i class="fas fa-phone-alt pe-2"></i> 0888.777.888</p>
            <p><i class="fas fa-envelope pe-2"></i> support@thuyhang.store</p>
            <p><i class="fab fa-facebook pe-2"></i> support@thuyhang.store</p>
          </div>
        </div>
        <h3 class="text-center fs-1 mt-3">Để lại lời nhắn cho chúng tôi</h3>
        <div class="row">
          <div class="col-md-6 rounded mb-2">
            <input type="text" class="form-control" placeholder="Họ và tên"  v-model="objNoti.fullName"/>
          </div>
          <div class="col-md-6 rounded mb-2">
            <input type="text" class="form-control" placeholder="Email" v-model="objNoti.email" />
          </div>
          <div class="col-md-6 rounded mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Số điện thoại"
			  v-model="objNoti.phoneNumber"
            />
          </div>
          <div class="col-md-6 rounded mb-2">
            <input type="text" class="form-control" placeholder="Địa chỉ" />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              class="form-control"
              placeholder="Lời nhắn"
			  v-model="objNoti.message"
            ></textarea>
          </div>
        </div>
        <div><button class="btn btn-dark px-5 mt-3" @click="sendNoti">Gửi</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import {Notification} from '@/utils/noti'
export default {
  methods: {
	 async sendNoti() {
		  var _data = await Notification.act(this, {data: this.objNoti});
		  this.$toast.success(_data.MSG);
		  this.objNoti = {
		fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        message: "",
		  }
	  }
  },
  data() {
    return {
      title: "Liên hệ",
      objNoti: {
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        message: "",
      },
    };
  },

  layout: "default",
};
</script>
<style></style>

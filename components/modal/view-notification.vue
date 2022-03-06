<template >
	<div class="modal fade" style="background:rgb(0 0 0 / 39%)" id="viewNoti" tabindex="-1" role="dialog">
    <div
      class="
        modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable
      "
    >
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <h5 class="modal-title fw-regular">Phản hồi từ khách hàng: <span class="fw-bold">{{detail.FullName}}</span> </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
         <div><span class="fw-bold">Email :</span> <span>{{detail.Email}}</span></div>
         <div><span  class="fw-bold">Số điện thoại :</span> <span>{{detail.PhoneNumber}}</span></div>
         <div><span  class="fw-bold">Địa chỉ:</span> <span>{{detail.Address}}</span></div>
         <div><span  class="fw-bold">Lời nhắn:</span></div>
		 <p>{{detail.Message}}</p>
        </div>

        <!-- Footer -->
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	
	mounted() {
    this.$nextTick(() => {
      //DOM really
      let eModal = document.getElementById("viewNoti");
      //--Lắng nghe các sự kiện
      eModal.addEventListener("hidden.bs.modal", event => {
        this.$emit("onHidden", event); //Trả dữ liệu về cho Parent
      });
      //--Cấu hình moldal
      this.$objModal = new bootstrap.Modal(eModal, {
        keyboard: true, //Ấn Esc thoát được
        backdrop: false, //Click ra backdrop ko thoát được
      });
      //--Chạy mặc định
      this.$objModal.toggle();
    });
  },
  props : {
	  detail : Object
  }
}
</script>
<style >
	
</style>
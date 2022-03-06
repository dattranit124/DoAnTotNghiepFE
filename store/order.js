export const actions = {
	act(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "post",
			url: "/Customer/Order/"+this.$auth.user.CustomerId,
			withCredentials: false,
			crossdomain: true,
			data: {
			  ...credentals.data,
			}
		  })
			.then(response => {
			  resolve(response.data);
			})
			.catch(error => {
				reject(error.response);
			});
		});
	  },
	  get(context) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "get",
			url: "/Order",
			withCredentials: false,
			crossdomain: true,
		  })
			.then(response => {
			  resolve(response.data);
			})
			.catch(error => {
			  reject(error.response);
			});
		});
	  },
	  delete(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "delete",
			url: "/Order",
			withCredentials: false,
			crossdomain: true,
			data: credentals.data
		  })
			.then(response => {
			  resolve(response.data);
			})
			.catch(error => {
			  reject(error.response);
			});
		});
	  },
	
	  update(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "post",
			url: "/Order",
			withCredentials: false,
			crossdomain: true,
			data: {
			  ...credentals.data,
			}
		  })
			.then(response => {
			  resolve(response.data);
			})
			.catch(error => {
				reject(error.response);
			});
		});
	  },
	  getDetail(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "get",
			url: "/Order/" + credentals,
			withCredentials: false,
			crossdomain: true,
		  })
			.then(response => {
			  resolve(response.data);
			})
			.catch(error => {
			  reject(error.response);
			});
		});
	  },
}
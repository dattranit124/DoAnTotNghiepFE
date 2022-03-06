export const actions = {
	get(context) {
	  return new Promise((resolve, reject) => {
		this.$axios({
		  method: "get",
		  url: "/Page",
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
	act(context,credentials) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "post",
			url: "/Page",
			withCredentials: false,
			crossdomain: true,
			data : credentials.data
		  })
			.then(response => {
			  resolve(response.data);
			})
			.catch(error => {
			  reject(error.response);
			});
		});
	  },
	  getDetail(context,credentials) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "get",
			url: "/Page/" + credentials,
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
			url: "/Page",
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
	  getBySlug(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "get",
			url: "/Page/slug",
			withCredentials: false,
			crossdomain: true,
			params: credentals.params
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
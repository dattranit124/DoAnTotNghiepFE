export const actions = {
	get(context, credentals) {
	  return new Promise((resolve, reject) => {
		this.$axios({
		  method: "get",
		  url: "/Product",
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
	getBySlug(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "get",
			url: "/Product/slug",
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
	  delete(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "delete",
			url: "/Product",
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
	  act(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "post",
			url: "/Product",
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
	  getDetail(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "get",
			url: "/Product/" + credentals,
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
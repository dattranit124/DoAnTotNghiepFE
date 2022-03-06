export const actions = {
  get(context) {
    return new Promise((resolve, reject) => {
      this.$axios({
        method: "get",
        url: "/Customer",
        withCredentials: false,
        crossdomain: true,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  delete(context, credentals) {
	return new Promise((resolve, reject) => {
	  this.$axios({
		method: "delete",
		url: "/Customer",
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
		url: "/Customer/act",
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
		url: "/Customer/" + credentals,
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

};

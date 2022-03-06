export const actions = {
	act(context, credentals) {
		return new Promise((resolve, reject) => {
		  this.$axios({
			method: "post",
			url: "/Account",
			withCredentials: false,
			crossdomain: true,
			params: credentals.params,
			data: {
			  ...credentals.data,
			}
		  })
			.then(response => {
			  resolve(response.data);
			})
			.catch(error => {
				if(error.response.status == 400)
				{

					resolve(error.response.data);
				}
				else reject(error.response);
			});
		});
	  },
}
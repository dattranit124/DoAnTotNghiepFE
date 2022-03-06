export class Notification {
	//--Phương thức khởi tạo class
	constructor() {}
  
	// List
	static async get(ctx) {
	  return await ctx.$store
		.dispatch("noti/get")
		.then(something => something)
		.catch(error => null);
	};
	static async act(ctx,credentals) {
		return await ctx.$store
		  .dispatch("noti/act",credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async getDetail(ctx,credentals) {
		return await ctx.$store
		  .dispatch("noti/getDetail",credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
	  static async delete(ctx, credentals) {
		return await ctx.$store
		  .dispatch("noti/delete", credentals)
		  .then(something => something)
		  .catch(error => null);
	  };
}
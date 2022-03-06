export class Account {
	//--Phương thức khởi tạo class
	constructor() {}
  
	// List
	static async act(ctx, credentals) {
	  return await ctx.$store
		.dispatch("account/act", credentals)
		.then(something => something)
		.catch(error => null);
	}
}
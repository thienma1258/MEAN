
const crypto=require('crypto').randomBytes(256).toString('hex');
module.exports=
{
	uri:'mongodb://localhost:27017/Meanangular2',
	secret:crypto,
	db:'Meanangular2'
}

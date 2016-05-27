var nums = process.argv.slice(2);
var total = 0;

for (var i = 0; i < nums.length; i++) {
	total += Number(nums[i]);
};

console.log(total);
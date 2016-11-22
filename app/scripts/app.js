(function(){
	var items = [
	{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}
	];
	var item = {}

	var vm = new Vue({
		el: '#main-container',
		data:{
			items: items,
			right: 0
		},
		methods:{
			addRow: function(){
				items.push(item)
			},
			moveLeft: function(){
				if(this.right > 0){
					this.right -= 100;
				}
				
			},
			moveRight: function(){
				
					this.right += 100;
				
			}
		}
	})
})();
var VueJs = require('vue/dist/vue.min.js');

var items = [
	{
		id:001,
		modelo: 'FRP-PARIGI',
		sku: 'PRG-38964Y',
		variedad: 'Airnata',
		stock:48
	},
	{
		id:001,
		modelo: 'FRP-PARIGI',
		sku: 'PRG-38964Y',
		variedad: 'lemon',
		stock:48
	},
	{
		id:001,
		modelo: 'FRP-PARIGI',
		sku: 'PRG-45964Y',
		variedad: 'Rose',
		stock:48
	},
	{
		id:001,
		modelo: 'FRP-PARIGI',
		sku: 'PRG-34564Y',
		variedad: 'Purple',
		stock:48
	},
	{
		id:001,
		modelo: 'FRP-PARIGI',
		sku: 'PRG-38964Y',
		variedad: 'Airnata',
		stock:48
	},
	{
		id:001,
		modelo: 'FRP-PARIGI',
		sku: 'PRG-38964Y',
		variedad: 'Airnata',
		stock:48
	},
	{
		id:001,
		modelo: 'FRP-PARIGI',
		sku: 'PRG-38964Y',
		variedad: 'Airnata',
		stock:48
	}
];
var item = {
		id:001,
		modelo: 'FRP-PARIGI',
		sku: 'PRG-38964Y',
		variedad: 'Airnata',
		stock:48
	};

var vm = new VueJs({

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
			if(this.right < 850){
				this.right += 100;
			}
		}
	}
})


Ext.define("IndexVC",{
	extend:"Ext.app.ViewController",
	alias:"controller.indexvc",
	onLoad:function(){
		
	},
	onSave:function(){
		Ext.createWidget("basewin",{
			title:"Hello",
			height:200,
			width:300,
			html:"hello world",
			header:{
				cls:"header-default"
			},
			bodyStyle:"border-color: #F56905;"
		}).show();
		
//		Ext.toast({
//			title:"Hello",
//			height:200,
//			width:300,
//			html:"hello world",
//			bodyStyle:"border-color: #F56905;background: rgb(129, 233, 237);"
//		});
	},
	onViewRender:function(){
	}
});

Ext.define("com.hd.BaswWin",{
	extend:"Ext.window.Window",
	alias:"widget.basewin",
//	createReExpander: function(direction, defaults) {
//		defaults = defaults ||{};
//		
//		defaults.cls = "header-default";
//		
//		return this.callParent(arguments);
//	}
});

Ext.define("com.hd.Index",{
	extend:"Ext.container.Viewport",
	controller:"indexvc",
	listeners:{
		onRender:"onViewRender"
	},
	viewModel:{
		links: {
		     user: {
		         type: 'com.hd.model.User',
		         id: 12
		     }
		 }
	},
	items:[{
		xtype:"form",
		jsonSubmit:true,
		reference:"form",
		width:300,
		buttonAlign:"center",
		url:"save.do",
		defaults:{
			xtype:"textfield",
			labelWidth:60,
			padding:10,
			margin:10
		},
		items:[{
			fieldLabel:"name",
			//bind:"{user.name}",
			name:"name"
		},{
			fieldLabel:"age",
			//bind:"{user.age}",
			xtype:"numberfield"
		},{
			fieldLabel:"sex",
			xtype:"radiogroup",
			name:"sex",
//			bind:"{user.sex}",
			items:[{
				inputValue:1,
				name:"sex",
				boxLabel:"男"
			},{
				inputValue:2,
				name:"sex",
				boxLabel:"女"
			}]
		}],
		buttons:[{
			text:"save",
			listeners:{
				click:"onSave"
			}
		},{
			text:"load",
			listeners:{
				click:"onLoad"
			}
		}]
	}]
});
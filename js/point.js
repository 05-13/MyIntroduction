/*
	散点图组件对象
 */
var Point = function(name , cfg){
	var component = new Base(name,cfg),
		//以第一个数据为比例大小的100%
		base = cfg.data[0][1];
	//输出每个Point
	$.each(cfg.data,function(index,item){
		var point = $('<div class="point point_'+index+'">'),
			pName = $('<div class="pName">'+item[0]+'</div>'),
			rate = $('<div class="rate">'+item[1]*100+'%</div>');
		//添加每个散点的内容
		pName.append(rate);
		point.append(pName);

		//计算各点比例大小
		var per = (item[1]/base*100) + '%';
		point.width(per).height(per);

		//为各点添加颜色
		if(item[2]){
			point.css('backgroundColor',item[2]);
		}
		//各点位置修改 相对基元的x和y偏移
		if(item[3] !== undefined &&item[4] !== undefined){
			point.css('left',item[3]).css('top',item[4]);
		}

		component.append(point);
	});
	return component;
};
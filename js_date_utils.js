/**
 * date utils
 */
(function() {
	var __dateUtils = {
		/**
		 * 获取当前的日期
		 * @param style 
		 * 		  格式化日期的样式
		 */
		getCurrentDatetime : function(style){
			var curDate = new Date(),
				y       = curDate.getFullYear(),
				M       = curDate.getMonth()+1,
				d       = curDate.getDate(),
				H       = curDate.getHours(),
				m       = curDate.getMinutes(),
				s       = curDate.getSeconds();
				//填充成两位
				M       = (M >= 10 ? M : '0'+M);
			   	d       = (d >= 10 ? d : '0'+d);
			    	H       = (H >= 10 ? H : '0'+H);
			    	m       = (m >= 10 ? m : '0'+m);
			    	s       = (s >= 10 ? s : '0'+s);
			    
			if(typeof style == 'undefined' || style == ''){
				style = 'y-M-d H:m:s';
			}
			
			return style.replace('y' , y).replace('M' , M).replace('d' , d)
						.replace('H' , H).replace('m' , m).replace('s' , s);
		},
		/**
		 * 格式化日期
		 * <p>
		 * formatDate(1347789258228,'y-M-d H:m:s');
		 * </p>
		 * create by 2012-09-02
		 * 
		 * @param time
		 * @param style
		 * @returns
		 */
		formatDate : function(time, style) {
			var _date = new Date();
			if (time != null) {
				_date.setTime(time);
			}
			var _dateInfo = {
				'y' : _date.getFullYear() ,
				'M' : '0' + (_date.getMonth() + 1) ,
				'd' : '0' + _date.getDate() ,
				'H' : '0' + _date.getHours() ,
				'm' : '0' + _date.getMinutes() ,
				's' : '0' + _date.getSeconds()
			};

			_dateInfo['M'] = _dateInfo['M'].substring(_dateInfo['M'].length - 2);
			_dateInfo['d'] = _dateInfo['d'].substring(_dateInfo['d'].length - 2);
			_dateInfo['H'] = _dateInfo['H'].substring(_dateInfo['H'].length - 2);
			_dateInfo['m'] = _dateInfo['m'].substring(_dateInfo['m'].length - 2);
			_dateInfo['s'] = _dateInfo['s'].substring(_dateInfo['s'].length - 2);

			style = style.replace('y', _dateInfo['y']);
			style = style.replace('M', _dateInfo['M']);
			style = style.replace('d', _dateInfo['d']);
			style = style.replace('H', _dateInfo['H']);
			style = style.replace('m', _dateInfo['m']);
			style = style.replace('s', _dateInfo['s']);
			return style;
		} ,
		/**
		 * 返回毫秒数
		 * 
		 * @param Y
		 *        年
		 * @param M
		 *        月
		 * @param d
		 *        日
		 * @param H
		 *        时
		 * @param m
		 *        分
		 * @param s
		 *        秒
		 */
		getMilliseconds : function(Y, M, d, H, m, s) {
			var date = new Date();
			if (Y != '' && Y != null) {
				date.setFullYear(Y);
			}
			if (M != '' && M != null) {
				date.setMonth(parseInt(M - 1));
			}
			if (d != '' || d != null) {
				date.setDate(d);
			}
			if (H != '' && H != null) {
				date.setHours(H);
			} else {
				date.setHours(0);
			}
			if (m != '' && m != null) {
				date.setMinutes(m);
			} else {
				date.setMinutes(0);
			}
			if (s != '' && s != null) {
				date.setSeconds(s);
			} else {
				date.setSeconds(0);
			}

			date.setMilliseconds(0);
			return date.getTime();
		} ,
		/**
		 * 根据字符串时间，返回Long型日期,24小时制
		 * <pre>
		 * 	y--年
		 *  M--月
		 *  d--日
		 *  H--时
		 *  m--分
		 *  s--秒
		 * </pre>
		 */
		parseDatetimeFromString : function(dateTimeStr , style){
			if(dateTimeStr == ''){
				return -1;
			}
			
			var metaIndexs       = [style.indexOf('y') , style.indexOf('M') , style.indexOf('d') , style.indexOf('H') , style.indexOf('m'),style.indexOf('s')],
			    pattern          = style.replace('y','([0-9]{4})').replace('M','([0-9]{2})').replace('d','([0-9]{2})').replace('H','([0-9]{2})')
						    .replace('m','([0-9]{2})').replace('s','([0-9]{2})').replace(/\s+/g,'\\s'),
			    patternRegExp    = new RegExp(pattern),
			    results       	 = dateTimeStr.match(patternRegExp),
			    perfectMetaIndex = [],
			    maxIndex         = 6;
			
			//计算年、月、日、时、分、秒对应的results索引
			for(var i=5 ; i >= 0 ;--i){
				var max = metaIndexs[i];
				var index = i;
				for(var j=i-1 ; j>=0 ; --j){
					if(metaIndexs[j] > max){
						max = metaIndexs[j];
						index = j;
					}
				}
				perfectMetaIndex[index] = maxIndex--;
			}
			//end
			
			return this.getMilliseconds(results[perfectMetaIndex[0]], results[perfectMetaIndex[1]], results[perfectMetaIndex[2]],results[perfectMetaIndex[3]]
					,results[perfectMetaIndex[4]] , results[perfectMetaIndex[5]]);
		}
	};

	window.dateUtils = __dateUtils;
})();

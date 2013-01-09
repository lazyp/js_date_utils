日期格式化工具类。

<pre>

格式化说明：

y-年

M-月

d-日

H-小时

m-分

s-秒

比如：y-M-d H:m:s 

dateUtils.getCurrentDatetime(formatStyle);//获取当前时间，formatStyle需要格式化成的样式。

dateUtils.parseDatetimeFromString(datetimeStr,formatStyle);//将字符串日期格式化为Long型

dateUtils.formatDate(datetime,formatStyle);//将long型日期格式化为指定格式的字符串


</pre>


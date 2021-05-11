/*
脚本使用方法如下：
Script目录下添加此脚本
[rewrite_local]
#轻颜相机
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body #零度摄影
 ^http://app.lingdu2019.cn/api/my_home/check_vip url LightCamera.js
[mitm]
hostname= *.faceu.mobi

*/


var Body=$response.body;
var json=JSON.parse(Body);
json.data.flag=true;
json.data.start_time=1586417081;
json.data.end_time=1901949881;
Body=JSON.stringify(json)
console.log(Body)
$notify("飞哥哥提示","已破解轻颜相机VIP功能","微信公众号搜索“IOS公社”了解飞哥哥更多资讯")
$done(Body);

//innerHTML : 指物件的內容
var UVI_now_value_temp;

fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-A8EC5354-4805-420B-9FC0-FA5651A5B994&locationName=%E9%AB%98%E9%9B%84').then(function(response)
{
    // 直接轉成JSON格式
    return response.json()
}).then(function(j)
{
	
    // `j`會是一個JavaScript物件
	console.log("接收資料結束....")
    console.log(j)
	console.log(j.records.location[0].time.obsTime)
	document.getElementById("Obs_time").innerHTML = "更新時間：" + j.records.location[0].time.obsTime;
	
	
	document.getElementById("Wind_dir").innerHTML = j.records.location[0].weatherElement[1].elementValue;
	document.getElementById("Wind").innerHTML = j.records.location[0].weatherElement[2].elementValue;
	document.getElementById("Temp_now_value").innerHTML = j.records.location[0].weatherElement[3].elementValue;
	document.getElementById("Humidity").innerHTML = j.records.location[0].weatherElement[4].elementValue;
	document.getElementById("Pressure").innerHTML = j.records.location[0].weatherElement[5].elementValue;
	document.getElementById("Rainfall").innerHTML = j.records.location[0].weatherElement[6].elementValue;
	document.getElementById("UVI_now_value").innerHTML = j.records.location[0].weatherElement[13].elementValue;
	document.getElementById("Temp_H_today_value").innerHTML = j.records.location[0].weatherElement[14].elementValue;
	document.getElementById("Temp_L_today_value").innerHTML = j.records.location[0].weatherElement[16].elementValue;


	UVI_now_value_temp = j.records.location[0].weatherElement[13].elementValue;
	UVI_dividing_degree_color_mark();
	
	
	console.log("DONE")
}).catch(function(err)
{
  // Error :(
})


function show()
{
	console.log("TEST")
	
	//document.write(a);
	//c = a;
	//document.getElementById("test").innerHTML = a;
	//document.getElementById("test1").innerHTML = b;
	//document.getElementById("Temp").innerHTML = j.records.location[0].weatherElement[3].elementValue;

    //show();
	
	//----------------------------
	
	console.log("TEST5")
}

function UVI_dividing_degree_color_mark()
{
	console.log(UVI_now_value_temp)
	
	if (UVI_now_value_temp <= 2) 
	{
		document.getElementById("UVI_dividing_degree").innerHTML = '低量級';
		document.getElementById("UVI_dividing_degree").style.color = "Green";
		console.log("低量級")
	} 
	else if (UVI_now_value_temp > 2 && UVI_now_value_temp <=5) 
	{
		document.getElementById("UVI_dividing_degree").innerHTML = '中量級';
		document.getElementById("UVI_dividing_degree").style.color = "Yellow";
		console.log("中量級")
	} 
	else if (UVI_now_value_temp > 5 && UVI_now_value_temp <=7) 
	{
		document.getElementById("UVI_dividing_degree").innerHTML = '高量級';
		document.getElementById("UVI_dividing_degree").style.color = "Orange";
		console.log("高量級")
	} 
	else if (UVI_now_value_temp > 7 && UVI_now_value_temp <=10) 
	{
		document.getElementById("UVI_dividing_degree").innerHTML = '過量級';
		document.getElementById("UVI_dividing_degree").style.color = "Red";
		console.log("過量級")
	} 
	else if (UVI_now_value_temp > 10) 
	{
		document.getElementById("UVI_dividing_degree").innerHTML = '危險級';
		document.getElementById("UVI_dividing_degree").style.color = "Violet";
		console.log("危險級")
	}
	
	console.log("紫外線分級顏色標註 (Done)");
}

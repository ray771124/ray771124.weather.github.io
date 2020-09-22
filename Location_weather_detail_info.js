//innerHTML : 指物件的內容
var a,b,c;
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
	document.getElementById("Temp").innerHTML = j.records.location[0].weatherElement[3].elementValue;
	document.getElementById("Humidity").innerHTML = j.records.location[0].weatherElement[4].elementValue;
	document.getElementById("Pressure").innerHTML = j.records.location[0].weatherElement[5].elementValue;
	document.getElementById("Rainfall").innerHTML = j.records.location[0].weatherElement[6].elementValue;
	//console.log(a)
	//console.log(b)
	//console.log(c)
	console.log("DONE")
}).catch(function(err)
{
  // Error :(
})


function show()
{
	console.log("TEST")
	console.log(a)
	//document.write(a);
	//c = a;
	//document.getElementById("test").innerHTML = a;
	//document.getElementById("test1").innerHTML = b;
	//document.getElementById("Temp").innerHTML = j.records.location[0].weatherElement[3].elementValue;

    //show();
	console.log(c)
	//----------------------------
	
	console.log("TEST5")
}
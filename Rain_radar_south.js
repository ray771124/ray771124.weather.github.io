fetch('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/O-A0084-003?Authorization=CWB-A8EC5354-4805-420B-9FC0-FA5651A5B994&downloadType=WEB&format=JSON').then(function(response)
{
    // 直接轉成JSON格式
    return response.json()
}).then(function(j)
{
	
    // `j`會是一個JavaScript物件
	console.log("接收雷達資料結束....")
    console.log(j)
	console.log(j.cwbopendata.dataset.resource.uri)

	document.getElementById("Rain_radar_pic").src = j.cwbopendata.dataset.resource.uri;

	console.log("(雷達)DONE")
}).catch(function(err)
{
  // Error :(
})
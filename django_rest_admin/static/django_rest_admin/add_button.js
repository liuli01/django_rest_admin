function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

function update_amis_local_to_editor(route_id)
{
    //本地文件到编辑器。需要调用api获取本地文件，写入到编辑器
    $.ajax({
        headers: {"X-CSRFToken":getCookie("csrftoken")},
        type: "post",
       url: "/aback/update_amis_local_to_editor/",
       async:false,
        dataType: "json",
        data:{'route_id':route_id},
         success: function(json_obj){
         var storage=window.localStorage;
         storage["store"]=JSON.stringify(json_obj['data']);
        }
    });
    window.location.href="/amis-editor-demo/";
}
function update_amis_editor_to_local()
{
    //编辑器内容到本地
    $.ajax({
        headers: {"X-CSRFToken":getCookie("csrftoken")},

        type: "post",
       url: "/aback/update_amis_editor_to_local/",
       async:false,
        dataType: "json",
        data:{'store':window.localStorage['store']},
         success: function(json_obj){
        }
    });
    window.location.href="/admin/";
}
function add_button() {
    var element = document.createElement("div");
    element.innerHTML="<button type='button' onclick='window.location.href=\"/rest_admin/update_rest/\"' >刷新restAPI</button>";
    //element.innerHTML= element.innerHTML+"<button type='button' onclick='window.location.href=\"/amis-editor-demo/\"' >打开页面编辑器</button>"
    //element.innerHTML= element.innerHTML+"<button type='button' onclick='update_amis_local_to_editor() ' >本地文件到编辑器</button>"
    //element.innerHTML= element.innerHTML+"<button type='button' onclick='update_amis_editor_to_local()' >编辑器到本地文件</button>"

    $("#content-main").prepend(element);


    //var ele1 = document.getElementById('content-main')
    //console.log(ele1)
    //ele1.appendChild(element);
}
//$(window).load(function(e) {
//    add_button();
//});

$(document).ready(function(){
add_button();
});



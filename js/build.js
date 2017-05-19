const fs = require('fs')
const path = require('path')
fs.readdir('./markdown',function(error,files){
    for(var i=0;i<files.length;i++){
        var newName = files[i].substring(0,files[i].length-3);
        var p = path.join('./markdown',files[i]);
        var markdown = fs.readFileSync(p).toString();
    // 修改网页标题
        var publics = fs.readFileSync('./public.html').toString();
        var results = publics.replace('%title%',newName);
        fs.writeFileSync('html/'+i+'.html',results);
    // 修改网页内容
        var public = fs.readFileSync('./html/'+i+'.html').toString();
        var result = public.replace('%content%',markdown);
        fs.writeFileSync('html/'+files[i]+'.html',result);
    }
})
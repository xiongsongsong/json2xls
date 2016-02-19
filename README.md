# json2xls

将JSON转换为XLSX文件

# Example

```javascript
var json={
    excel: {
        path: "items",
        fileName: "demo.xlsx",
        fields:[
            ["姓名", "name"],
            ["年龄", "age"]
        ]
    },
    items: [
        {
           name:"user A",
           age:"29"
    	},
    	{
           name:"user B",
           age:"35"
        }
    ]
}

var json2xlsx = require('json2xlsx');

app.get('/download', function(){
    //set MIME
    res.header('Content-Type', 'application/octet-stream;charset=utf-8');
    //set Filename
    res.header('Content-Disposition', 'attachment;filename=\"' + encodeURIComponent(excel.fileName) + '\"');

    var buffer = json2xlsx(data);
    res.end(buffer);
});

```

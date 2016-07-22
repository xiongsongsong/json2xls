# json2xls

如果需要尝试进行原生的拼装，参考：https://gist.github.com/xiongsongsong/8b16e39b20734579f10a

```bash
npm install json2xls
```
# Example

```javascript
var json = {
    excel: {
        path: "result.items",
        fileName: "demo.xlsx",
        fields: [
            ["姓名", "name"],
            ["年龄", "age"]
        ]
    },
    result: {
        items: [
            {
                name: "user A",
                age: "29"
            },
            {
                name: "user B",
                age: "35"
            }
        ]
    }
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

![example](https://cloud.githubusercontent.com/assets/342509/13385467/0fa90e50-dedc-11e5-9eee-a9e2566d50cb.png)


# Test

```bash
npm test
```

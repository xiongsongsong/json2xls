var expect = require('chai').expect;

var json2xlsx = require('../index');

describe('错误的数据', function () {
    it('传入控制必须返回错误', function () {
        expect(json2xlsx).to.throw('excel is a required.');
    });

    it('传入空的对象', function () {
        expect(function () {
            json2xlsx({})
        }).to.throw('excel is a required.');
    });

    it('传入对象,但excel为空对象', function () {
        expect(function () {
            json2xlsx({
                excel: {}
            })
        }).to.throw('excel.fields must be Array.');
    });

    it('传入对象,但excel.fields为空', function () {
        expect(function () {
            json2xlsx({
                excel: {
                    path: '[0]'
                }
            })
        }).to.throw('excel.fields must be Array.');
    });

    it('传入对象,但excel.path为空', function () {
        expect(function () {
            json2xlsx({
                excel: {
                    fields: [["姓名", "name"]]
                }
            })
        }).to.throw('excel.path must setting.');
    });

});

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

describe('转换为Excel', function () {
    var buffer = json2xlsx(json).toString();
    it('应该包含xml标记', function () {
        expect(buffer).to.contain('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
    });

    it('应该包含表头', function () {
        expect(buffer).to.contain('<v>姓名</v>');
        expect(buffer).to.contain('<v>年龄</v>');
    });

    it('应该包含数据', function () {
        expect(buffer).to.contain('<v>29</v>');
        expect(buffer).to.contain('<v>35</v>');
    });

});

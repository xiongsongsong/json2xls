/**
 * Created by song song on 2/18/16 5:57 PM.
 * JSON to XLSX file
 */

var xlsx = require('node-xlsx');
var _ = require('lodash');

module.exports = function (body) {
    //get excel field, includes table fields define and row data
    var excel = _.get(body, 'excel');
    if (!excel) {
        throw new Error('excel is a required.');
    }
    //get field defined
    var fields = excel.fields;
    if (typeof excel !== 'object' || typeof fields !== 'object') {
        throw new Error('excel must setting');
    }

    var _data = _.get(body, excel.path);

    var rowList = [];
    var row = [];

    //insert table head
    for (var j = 0; j < fields.length; j++) {
        row.push(fields[j][0]);
    }
    rowList.push(row);

    //loop insert row
    for (var i = 0; i < _data.length; i++) {
        row = [];
        for (j = 0; j < fields.length; j++) {
            row.push(_data[i][fields[j][1]]);
        }
        rowList.push(row);
    }

    //return buffer
    return xlsx.build([{name: "mySheetName", data: rowList}]);
};

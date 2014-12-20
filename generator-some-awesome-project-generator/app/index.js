var yeoman_generator = require('yeoman-generator');
var _ = require('lodash');


console.log(_.keys(yeoman_generator));
var tasks = {
    method1: function someTask() {
        console.log('Task 1');
    },
    method2: function someTask() {
        console.log('Task 2');
    }
};

var our_generator = yeoman_generator.Base.extend(tasks);
module.exports = our_generator;
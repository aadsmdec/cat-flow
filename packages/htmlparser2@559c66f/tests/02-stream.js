var helper=require("./test-helper.js"),Stream=require("..").WritableStream,fs=require("fs");exports.dir="Stream",exports.test=function(e,t){fs.createReadStream(__dirname+e.file).pipe(new Stream(helper.getEventCollector(function(n,i){t(n,i);var r=helper.getEventCollector(t),o=new Stream(r,e.options);o.end(fs.readFileSync(__dirname+e.file))}),e.options))};
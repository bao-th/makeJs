const {init} = require("./init/init")
const {scan} = require("./core/scanner");
const {statement} = require("./core/parse");
const {interpretAST} = require("./core/interpreter");
const {gData,ASTNodeTypes} = require("./core/token");
const {addBuildInMethod} = require("./init/buildInFn");
function main(){
   addBuildInMethod("log",console.log);

   console.log("start compiling");

   init(); //读取文件成字符串，存入gData.content
   scan(); //扫描出一个token
   let astNodeTree = statement(); //get ast
   interpretAST(astNodeTree,null,gData.gScope); //解释ast，执行代码，变量声明，赋值

   console.log("compiled finished");
}

main();

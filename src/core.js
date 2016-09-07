import './util/assign';
import typeOf from './util/typeOf';
import create from './util/create';
import '../lib/Component';
import $ from '../lib/jquery-plugins/utils';

function DropDown(){  
}

Component.inherito(DropDown, {

  // 根元素
  root: null,

  // 文档对象
  doc: null,

  // 文档根元素式
  docRoot: null,

  // 初始化
  init(root, config){
    Object.assign(this, config);
    this.initRoot(root);
    this.setRoot();
    this.initParts();
    this.setParts();
  },

  // 初始化根元素
  initRoot(root){
    this.doc = document;
    this.docRoot = document.documentElement;
    this.root = $(root)[0] || this.createRoot();
  },

  // 创建根元素
  createRoot(root){
    return this.doc.body;
  },
  
  // 部件属性名
  partAttributeName: 'data-part',

  // 初始化各部件
  initParts(){
    var elements = this.root.getElementsByTagName('*');
    forEach.call(elements, element => {
      let part = element.getAttribute(this.partAttributeName);
      if(part){
        this.part = 
      }
    });
  },
  
  // 事件处理函数
  handleEvent(){},

  // 渲染
  render(){},

  // 销毁
  destroy(){}

}, {

})



export default DropDown;
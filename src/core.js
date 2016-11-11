import './util/assign';
import typeOf from './util/typeOf';
import create from './util/create';
import '../lib/EventEmitter';
import '../lib/jquery-plugins/utils';

function Component(){ 

}

EventEmitter.inherito(Component, {

  // 组件根元素
  root: null,

  // 文档对象（相对于组件根元素）
  doc: null,

  // 文档根元素
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
    var elements = this.root.getElementsByTagName('*'),
      element, i = 0;

    while(element = elements[i++]){
      let partName = element.getAttribute(this.partAttributeName);
      if(partName){
        this[partName] = element;
      } 
    }
  },
  
  // 事件处理函数
  handleEvent(event, ...args){
    switch(event.type){
      case 'click':
        break;
      default:
    }
  },

  click(event){
    var delegateNode = $.iiancestorAll(event.target, '[]', event.currentTarget)
    switch(event.type){
      case 'click':
        break;
      default:
    }
  },

  mouse(event){

  },

  // 构建组件
  render(model){
    var data = vm(mode);
    '<div he="click;">'
  },

  // 销毁组件
  destroy(){
    //this.parent
  },

  /**
   * 追加子实例
   * @param  {object} instance 必须是 Component 的实例
   * @return {object} instance 参数
   * @api public
   */
  appendChild(instance, ) {
    if(!(instance instanceof Component)){
      throw new TypeError(instance + 'is not instanceof Component.');
    }
    if(Component.contains(instance, this, true)){
      throw new Error('The new child instance contains this instance.');
    }
    this.children || (this.children = []);
    if (this.children.indexOf(instance) < 0) {
      if(instance.parent){
        instance.parent.removeChild(instance);
      }
      this.children.push(instance);
      instance.parent = this;
    }
    return instance;
  },

  /**
   * 删除子实例
   * @param  {object} instance 必须是 EventEmitter 的实例
   * @return {object} instance 参数
   * @api public
   */
  removeChild(instance) {
    if(!(instance instanceof Component)){
      throw new TypeError(instance + 'is not instanceof Component.');
    }
    var index;
    if (this.children && (index = this.children.indexOf(instance)) > -1) {
      this.children.splice(index, 1);
      delete instance.parent;
    }
    else{
      throw new Error('The instance to be removed is not a child of this instance.');
    }
    return instance;
  },

  /**
   * 判断是否为祖先实例
   * @param  {object} instance 必须是 EventEmitter 的实例
   * @param  {boolean} includeSelf 指定是否包含自身
   * @return {boolean}
   * @api public
   */
  isAncestor(instance, includeItSelf){
    var parent = includeItSelf ? this : this.parent;
    do{
      if(instance === parent){
        return true;
      }
    }while(parent = parent.parent);
    return false;
  }

}, 

{

  contains(parentInstance, childInstance, includeItSelf){
    var parent = includeItSelf ? childInstance : childInstance.parent;
    do{
      if(parentInstance === parent){
        return true;
      }
    }while(parent = parent.parent);
    return false;
  }

});



export default DropDown;
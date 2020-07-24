Object.defineProperty(exports,"__esModule",{value:true});exports.ToastContainer=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/ToastContainer.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');var _mapPropsToStyleNames=require('../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);var _commonColor=require('../theme/variables/commonColor');var _Text=require('./Text');var _Button=require('./Button');var _Toast=require('./Toast');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var POSITION={ABSOLUTE:'absolute',BOTTOM:'bottom',TOP:'top'};var ToastContainer=function(_Component){_inherits(ToastContainer,_Component);_createClass(ToastContainer,null,[{key:'show',value:function show(_ref){var config=_objectWithoutProperties(_ref,[]);this.toastInstance._root.showToast({config:config});}},{key:'hide',value:function hide(){if(this.toastInstance._root.getModalState()){this.toastInstance._root.closeToast('functionCall');}}}]);function ToastContainer(props){_classCallCheck(this,ToastContainer);var _this=_possibleConstructorReturn(this,(ToastContainer.__proto__||Object.getPrototypeOf(ToastContainer)).call(this,props));_this.state={fadeAnim:new _reactNative.Animated.Value(0),pan:new _reactNative.Animated.ValueXY({x:0,y:0}),keyboardHeight:0,isKeyboardVisible:false,modalVisible:false};_this.keyboardDidHide=_this.keyboardDidHide.bind(_this);_this.keyboardDidShow=_this.keyboardDidShow.bind(_this);_this._panResponder=_reactNative.PanResponder.create({onMoveShouldSetPanResponderCapture:function onMoveShouldSetPanResponderCapture(){return true;},onPanResponderRelease:function onPanResponderRelease(evt,_ref2){var dx=_ref2.dx;if(dx!==0){_reactNative.Animated.timing(_this.state.pan,{toValue:{x:dx,y:0},duration:100}).start(function(){return _this.closeToast('swipe');});}}});return _this;}_createClass(ToastContainer,[{key:'componentDidMount',value:function componentDidMount(){_reactNative.Keyboard.addListener('keyboardDidShow',this.keyboardDidShow);_reactNative.Keyboard.addListener('keyboardDidHide',this.keyboardDidHide);}},{key:'getToastStyle',value:function getToastStyle(){return{position:POSITION.ABSOLUTE,opacity:this.state.fadeAnim,width:'100%',elevation:9,paddingHorizontal:_reactNative.Platform.OS===_commonColor.PLATFORM.IOS?20:0,top:this.state.position===POSITION.TOP?30:undefined,bottom:this.state.position===POSITION.BOTTOM?this.getTop():undefined};}},{key:'getTop',value:function getTop(){if(_reactNative.Platform.OS===_commonColor.PLATFORM.IOS){if(this.state.isKeyboardVisible){return this.state.keyboardHeight;}return 30;}return 0;}},{key:'getButtonText',value:function getButtonText(buttonText){if(buttonText){if(buttonText.trim().length===0){return undefined;}return buttonText;}return undefined;}},{key:'getModalState',value:function getModalState(){return this.state.modalVisible;}},{key:'keyboardDidHide',value:function keyboardDidHide(){this.setState({keyboardHeight:0,isKeyboardVisible:false});}},{key:'keyboardDidShow',value:function keyboardDidShow(e){this.setState({keyboardHeight:e.endCoordinates.height,isKeyboardVisible:true});}},{key:'showToast',value:function showToast(_ref3){var config=_ref3.config;this.setState({modalVisible:true,text:config.text,buttonText:this.getButtonText(config.buttonText),type:config.type,position:config.position?config.position:POSITION.BOTTOM,supportedOrientations:config.supportedOrientations,style:config.style,buttonTextStyle:config.buttonTextStyle,buttonStyle:config.buttonStyle,textStyle:config.textStyle,onClose:config.onClose});if(this.closeTimeout){clearTimeout(this.closeTimeout);}if(config.duration!==0){var duration=config.duration>0?config.duration:1500;this.closeTimeout=setTimeout(this.closeToast.bind(this,'timeout'),duration);}_reactNative.Animated.timing(this.state.fadeAnim,{toValue:1,duration:200,useNativeDriver:false}).start();}},{key:'closeModal',value:function closeModal(reason){this.setState({modalVisible:false});var onClose=this.state.onClose;if(onClose&&typeof onClose==='function'){onClose(reason);}}},{key:'closeToast',value:function closeToast(reason){var _this2=this;clearTimeout(this.closeTimeout);_reactNative.Animated.timing(this.state.fadeAnim,{toValue:0,duration:200,useNativeDriver:false}).start(function(){_this2.closeModal(reason);_this2.state.pan.setValue({x:0,y:0});});}},{key:'render',value:function render(){var _this3=this;if(this.state.modalVisible){var _state$pan=this.state.pan,x=_state$pan.x,y=_state$pan.y;return _react2.default.createElement(_reactNative.Animated.View,_extends({},this._panResponder.panHandlers,{style:[this.getToastStyle(),{transform:[{translateX:x},{translateY:y}]}],__source:{fileName:_jsxFileName,lineNumber:175}}),_react2.default.createElement(_Toast.Toast,{style:[this.state.style],danger:this.state.type==='danger',success:this.state.type==='success',warning:this.state.type==='warning',__source:{fileName:_jsxFileName,lineNumber:182}},_react2.default.createElement(_Text.Text,{style:this.state.textStyle,__source:{fileName:_jsxFileName,lineNumber:188}},this.state.text),this.state.buttonText&&_react2.default.createElement(_Button.Button,{style:this.state.buttonStyle,onPress:function onPress(){return _this3.closeToast('user');},__source:{fileName:_jsxFileName,lineNumber:190}},_react2.default.createElement(_Text.Text,{style:this.state.buttonTextStyle,__source:{fileName:_jsxFileName,lineNumber:194}},this.state.buttonText))));}return null;}}]);return ToastContainer;}(_react.Component);ToastContainer.propTypes=_extends({},_reactNative.ViewPropTypes);var StyledToastContainer=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.ToastContainer',{},_mapPropsToStyleNames2.default)(ToastContainer);exports.ToastContainer=StyledToastContainer;
//# sourceMappingURL=ToastContainer.js.map
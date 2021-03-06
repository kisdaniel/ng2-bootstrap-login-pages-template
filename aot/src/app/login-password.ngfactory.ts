/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/app/login-password';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_PasswordPage {
  /*private*/ _eventHandler:Function;
  context:import0.PasswordPage;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.PasswordPage();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_PasswordPage_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_PasswordPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.PasswordPage>;
  _PasswordPage_0_3:Wrapper_PasswordPage;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PasswordPage_Host0,renderType_PasswordPage_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'login-password',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PasswordPage0(this.viewUtils,this,0,this._el_0);
    this._PasswordPage_0_3 = new Wrapper_PasswordPage();
    this.compView_0.create(this._PasswordPage_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PasswordPage_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PasswordPage) && (0 === requestNodeIndex))) { return this._PasswordPage_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PasswordPage_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PasswordPageNgFactory:import7.ComponentFactory<import0.PasswordPage> = new import7.ComponentFactory<import0.PasswordPage>('login-password',View_PasswordPage_Host0,import0.PasswordPage);
const styles_PasswordPage:any[] = ([] as any[]);
var renderType_PasswordPage:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_PasswordPage,{});
export class View_PasswordPage0 extends import1.AppView<import0.PasswordPage> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  /*private*/ _expr_36:any;
  /*private*/ _expr_37:any;
  /*private*/ _expr_38:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PasswordPage0,renderType_PasswordPage,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_36 = import8.UNINITIALIZED;
    this._expr_37 = import8.UNINITIALIZED;
    this._expr_38 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','col-xs-10 col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3 col-xs-offset-1'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','well well-md'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'h1',new import3.InlineArray2(2,'class','text-center'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText(this._el_7,'\n\n                ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_7,'h1',new import3.InlineArray2(2,'class','text-center text-danger'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n                    ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'span',new import3.InlineArray2(2,'class','fa-stack fa-lg'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n                        ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'i',new import3.InlineArray2(2,'class','fa fa-circle fa-stack-2x'),(null as any));
    this._text_17 = this.renderer.createText(this._el_14,'\n                        ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_14,'i',new import3.InlineArray2(2,'class','fa fa-lock fa-stack-1x fa-inverse'),(null as any));
    this._text_19 = this.renderer.createText(this._el_14,'\n                    ',(null as any));
    this._text_20 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._text_21 = this.renderer.createText(this._el_7,'\n\n                ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_7,'form',new import3.InlineArray2(2,'class','form-vertical'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n                    ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_22,'input',new import3.InlineArray8(8,'class','form-control','placeholder','password','required','','type','password'),(null as any));
    this._text_25 = this.renderer.createText(this._el_22,'',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_22,'button',new import3.InlineArray2(2,'class','btn btn-md btn-primary btn-block'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_26,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-chevron-right'),(null as any));
    this._text_29 = this.renderer.createText(this._el_26,'\n                    ',(null as any));
    this._text_30 = this.renderer.createText(this._el_22,'                \n                ',(null as any));
    this._text_31 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._text_32 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_33 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_34 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._text_35 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._text_35
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_36:any = import3.inlineInterpolate(1,'','login.title','');
    if (import3.checkBinding(throwOnChange,this._expr_36,currVal_36)) {
      this.renderer.setText(this._text_10,currVal_36);
      this._expr_36 = currVal_36;
    }
    const currVal_37:any = import3.inlineInterpolate(1,'\n                    ','login.fhbHelp','\n                    ');
    if (import3.checkBinding(throwOnChange,this._expr_37,currVal_37)) {
      this.renderer.setText(this._text_25,currVal_37);
      this._expr_37 = currVal_37;
    }
    const currVal_38:any = import3.inlineInterpolate(1,'\n                        ','login.next','\n                        ');
    if (import3.checkBinding(throwOnChange,this._expr_38,currVal_38)) {
      this.renderer.setText(this._text_27,currVal_38);
      this._expr_38 = currVal_38;
    }
  }
}
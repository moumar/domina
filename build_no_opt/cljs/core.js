goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____7260 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{var or__3548__auto____7262 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__7576 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7273 = this$;

if(cljs.core.truth_(and__3546__auto____7273))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7273;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7274 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7274))
{return or__3548__auto____7274;
} else
{var or__3548__auto____7275 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7577 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7276 = this$;

if(cljs.core.truth_(and__3546__auto____7276))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7276;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7278 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7278))
{return or__3548__auto____7278;
} else
{var or__3548__auto____7281 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7578 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7284 = this$;

if(cljs.core.truth_(and__3546__auto____7284))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7284;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7286 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7286))
{return or__3548__auto____7286;
} else
{var or__3548__auto____7289 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7580 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7292 = this$;

if(cljs.core.truth_(and__3546__auto____7292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7298 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{var or__3548__auto____7299 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7581 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7303 = this$;

if(cljs.core.truth_(and__3546__auto____7303))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7303;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7325 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7325))
{return or__3548__auto____7325;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7582 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7330 = this$;

if(cljs.core.truth_(and__3546__auto____7330))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7330;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7334 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{var or__3548__auto____7336 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7583 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7351 = this$;

if(cljs.core.truth_(and__3546__auto____7351))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7351;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7357 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7357))
{return or__3548__auto____7357;
} else
{var or__3548__auto____7360 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7584 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7364 = this$;

if(cljs.core.truth_(and__3546__auto____7364))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7364;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7376 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7376))
{return or__3548__auto____7376;
} else
{var or__3548__auto____7377 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7377))
{return or__3548__auto____7377;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7585 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7384 = this$;

if(cljs.core.truth_(and__3546__auto____7384))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7384;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7389 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{var or__3548__auto____7390 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7586 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7400 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{var or__3548__auto____7402 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7587 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7408 = this$;

if(cljs.core.truth_(and__3546__auto____7408))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7408;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7440 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{var or__3548__auto____7444 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7444))
{return or__3548__auto____7444;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7588 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7448 = this$;

if(cljs.core.truth_(and__3546__auto____7448))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7448;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7452 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{var or__3548__auto____7455 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7455))
{return or__3548__auto____7455;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7589 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7460 = this$;

if(cljs.core.truth_(and__3546__auto____7460))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7460;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7464 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{var or__3548__auto____7467 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7590 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7472 = this$;

if(cljs.core.truth_(and__3546__auto____7472))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7472;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7476 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{var or__3548__auto____7478 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7591 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7483 = this$;

if(cljs.core.truth_(and__3546__auto____7483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7488 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7488))
{return or__3548__auto____7488;
} else
{var or__3548__auto____7489 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7592 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7494 = this$;

if(cljs.core.truth_(and__3546__auto____7494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7497 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7497))
{return or__3548__auto____7497;
} else
{var or__3548__auto____7499 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7593 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7503 = this$;

if(cljs.core.truth_(and__3546__auto____7503))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7503;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7507 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{var or__3548__auto____7509 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7509))
{return or__3548__auto____7509;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7594 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7513 = this$;

if(cljs.core.truth_(and__3546__auto____7513))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7513;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7516 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{var or__3548__auto____7519 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7595 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7522 = this$;

if(cljs.core.truth_(and__3546__auto____7522))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7522;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7525 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7525))
{return or__3548__auto____7525;
} else
{var or__3548__auto____7528 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7596 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7531 = this$;

if(cljs.core.truth_(and__3546__auto____7531))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7531;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7534 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7534))
{return or__3548__auto____7534;
} else
{var or__3548__auto____7536 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7597 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7540 = this$;

if(cljs.core.truth_(and__3546__auto____7540))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7540;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7542 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7542))
{return or__3548__auto____7542;
} else
{var or__3548__auto____7543 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7543))
{return or__3548__auto____7543;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7576.call(this,this$);
case  2 :
return _invoke__7577.call(this,this$,a);
case  3 :
return _invoke__7578.call(this,this$,a,b);
case  4 :
return _invoke__7580.call(this,this$,a,b,c);
case  5 :
return _invoke__7581.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7582.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7583.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7584.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7585.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7586.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7587.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7588.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7589.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7590.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7591.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7592.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7593.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7594.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7595.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7596.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7597.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7707 = coll;

if(cljs.core.truth_(and__3546__auto____7707))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7707;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7719 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{var or__3548__auto____7721 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7721))
{return or__3548__auto____7721;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7730 = coll;

if(cljs.core.truth_(and__3546__auto____7730))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7730;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7732 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{var or__3548__auto____7734 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7737 = coll;

if(cljs.core.truth_(and__3546__auto____7737))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7737;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7739 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7739))
{return or__3548__auto____7739;
} else
{var or__3548__auto____7742 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7742))
{return or__3548__auto____7742;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__7763 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7754 = coll;

if(cljs.core.truth_(and__3546__auto____7754))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7754;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7755 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{var or__3548__auto____7756 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7756))
{return or__3548__auto____7756;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7764 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7757 = coll;

if(cljs.core.truth_(and__3546__auto____7757))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7757;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7759 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7759))
{return or__3548__auto____7759;
} else
{var or__3548__auto____7760 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__7763.call(this,coll,n);
case  3 :
return _nth__7764.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7772 = coll;

if(cljs.core.truth_(and__3546__auto____7772))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7772;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7773 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7773))
{return or__3548__auto____7773;
} else
{var or__3548__auto____7775 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7775))
{return or__3548__auto____7775;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7780 = coll;

if(cljs.core.truth_(and__3546__auto____7780))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7780;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7782 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{var or__3548__auto____7784 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__7806 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7791 = o;

if(cljs.core.truth_(and__3546__auto____7791))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7791;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7794 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
} else
{var or__3548__auto____7795 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7807 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7800 = o;

if(cljs.core.truth_(and__3546__auto____7800))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7800;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7803 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{var or__3548__auto____7804 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__7806.call(this,o,k);
case  3 :
return _lookup__7807.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7818 = coll;

if(cljs.core.truth_(and__3546__auto____7818))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7818;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7820 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{var or__3548__auto____7822 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7825 = coll;

if(cljs.core.truth_(and__3546__auto____7825))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7825;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7827 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{var or__3548__auto____7828 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7836 = coll;

if(cljs.core.truth_(and__3546__auto____7836))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7836;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7839 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7839))
{return or__3548__auto____7839;
} else
{var or__3548__auto____7840 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7847 = coll;

if(cljs.core.truth_(and__3546__auto____7847))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7847;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7849 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7849))
{return or__3548__auto____7849;
} else
{var or__3548__auto____7850 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7850))
{return or__3548__auto____7850;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = coll;

if(cljs.core.truth_(and__3546__auto____7856))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7856;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7857 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{var or__3548__auto____7858 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7859 = coll;

if(cljs.core.truth_(and__3546__auto____7859))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7859;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7862 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7862))
{return or__3548__auto____7862;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = coll;

if(cljs.core.truth_(and__3546__auto____7872))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7872;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7875 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7875))
{return or__3548__auto____7875;
} else
{var or__3548__auto____7876 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7878 = o;

if(cljs.core.truth_(and__3546__auto____7878))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7878;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7880 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{var or__3548__auto____7881 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7881))
{return or__3548__auto____7881;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7965 = o;

if(cljs.core.truth_(and__3546__auto____7965))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7965;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7966 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{var or__3548__auto____7967 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7972 = o;

if(cljs.core.truth_(and__3546__auto____7972))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7972;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7975 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{var or__3548__auto____7976 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7976))
{return or__3548__auto____7976;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7983 = o;

if(cljs.core.truth_(and__3546__auto____7983))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7983;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7988 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____7992 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__8012 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8001 = coll;

if(cljs.core.truth_(and__3546__auto____8001))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8001;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8002 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{var or__3548__auto____8004 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8013 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8006 = coll;

if(cljs.core.truth_(and__3546__auto____8006))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8006;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8008 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
} else
{var or__3548__auto____8009 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__8012.call(this,coll,f);
case  3 :
return _reduce__8013.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8022 = o;

if(cljs.core.truth_(and__3546__auto____8022))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8022;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8026 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
} else
{var or__3548__auto____8027 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8034 = o;

if(cljs.core.truth_(and__3546__auto____8034))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8034;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8036 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8036))
{return or__3548__auto____8036;
} else
{var or__3548__auto____8038 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8038))
{return or__3548__auto____8038;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8044 = o;

if(cljs.core.truth_(and__3546__auto____8044))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8044;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8046 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{var or__3548__auto____8048 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____8054 = o;

if(cljs.core.truth_(and__3546__auto____8054))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8054;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8058 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{var or__3548__auto____8061 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8071 = d;

if(cljs.core.truth_(and__3546__auto____8071))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8071;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8075 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8088 = this$;

if(cljs.core.truth_(and__3546__auto____8088))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8088;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8090 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = this$;

if(cljs.core.truth_(and__3546__auto____8100))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8100;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8104 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{var or__3548__auto____8105 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = this$;

if(cljs.core.truth_(and__3546__auto____8108))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8108;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8115 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__8152 = null;
var G__8152__8153 = (function (o,k){
return null;
});
var G__8152__8154 = (function (o,k,not_found){
return not_found;
});
G__8152 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8152__8153.call(this,o,k);
case  3 :
return G__8152__8154.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8152;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__8157 = null;
var G__8157__8158 = (function (_,f){
return f.call(null);
});
var G__8157__8159 = (function (_,f,start){
return start;
});
G__8157 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8157__8158.call(this,_,f);
case  3 :
return G__8157__8159.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8157;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__8162 = null;
var G__8162__8163 = (function (_,n){
return null;
});
var G__8162__8164 = (function (_,n,not_found){
return not_found;
});
G__8162 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8162__8163.call(this,_,n);
case  3 :
return G__8162__8164.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8162;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__8228 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8207 = cljs.core._nth.call(null,cicoll,0);
var n__8208 = 1;

while(true){
if(cljs.core.truth_((n__8208 < cljs.core._count.call(null,cicoll))))
{{
var G__8234 = f.call(null,val__8207,cljs.core._nth.call(null,cicoll,n__8208));
var G__8236 = (n__8208 + 1);
val__8207 = G__8234;
n__8208 = G__8236;
continue;
}
} else
{return val__8207;
}
break;
}
}
});
var ci_reduce__8229 = (function (cicoll,f,val){
var val__8214 = val;
var n__8217 = 0;

while(true){
if(cljs.core.truth_((n__8217 < cljs.core._count.call(null,cicoll))))
{{
var G__8240 = f.call(null,val__8214,cljs.core._nth.call(null,cicoll,n__8217));
var G__8241 = (n__8217 + 1);
val__8214 = G__8240;
n__8217 = G__8241;
continue;
}
} else
{return val__8214;
}
break;
}
});
var ci_reduce__8230 = (function (cicoll,f,val,idx){
var val__8224 = val;
var n__8225 = idx;

while(true){
if(cljs.core.truth_((n__8225 < cljs.core._count.call(null,cicoll))))
{{
var G__8244 = f.call(null,val__8224,cljs.core._nth.call(null,cicoll,n__8225));
var G__8245 = (n__8225 + 1);
val__8224 = G__8244;
n__8225 = G__8245;
continue;
}
} else
{return val__8224;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8228.call(this,cicoll,f);
case  3 :
return ci_reduce__8229.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8230.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8295 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8313 = null;
var G__8313__8314 = (function (_,f){
var this__8297 = this;
return cljs.core.ci_reduce.call(null,this__8297.a,f,(this__8297.a[this__8297.i]),(this__8297.i + 1));
});
var G__8313__8315 = (function (_,f,start){
var this__8298 = this;
return cljs.core.ci_reduce.call(null,this__8298.a,f,start,this__8298.i);
});
G__8313 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8313__8314.call(this,_,f);
case  3 :
return G__8313__8315.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8313;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8303 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8304 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8320 = null;
var G__8320__8321 = (function (coll,n){
var this__8305 = this;
var i__8306 = (n + this__8305.i);

if(cljs.core.truth_((i__8306 < this__8305.a.length)))
{return (this__8305.a[i__8306]);
} else
{return null;
}
});
var G__8320__8322 = (function (coll,n,not_found){
var this__8307 = this;
var i__8308 = (n + this__8307.i);

if(cljs.core.truth_((i__8308 < this__8307.a.length)))
{return (this__8307.a[i__8308]);
} else
{return not_found;
}
});
G__8320 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8320__8321.call(this,coll,n);
case  3 :
return G__8320__8322.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8320;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8309 = this;
return (this__8309.a.length - this__8309.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8310 = this;
return (this__8310.a[this__8310.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8311 = this;
if(cljs.core.truth_(((this__8311.i + 1) < this__8311.a.length)))
{return (new cljs.core.IndexedSeq(this__8311.a,(this__8311.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8312 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__8342 = null;
var G__8342__8343 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8342__8345 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8342 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8342__8343.call(this,array,f);
case  3 :
return G__8342__8345.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8342;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8350 = null;
var G__8350__8351 = (function (array,k){
return (array[k]);
});
var G__8350__8352 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8350 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8350__8351.call(this,array,k);
case  3 :
return G__8350__8352.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8350;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8354 = null;
var G__8354__8355 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8354__8356 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8354 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8354__8355.call(this,array,n);
case  3 :
return G__8354__8356.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8354;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____8370 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8370))
{var s__8372 = temp__3698__auto____8370;

return cljs.core._first.call(null,s__8372);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__8388 = cljs.core.next.call(null,s);
s = G__8388;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__8389 = cljs.core.seq.call(null,x);
var n__8390 = 0;

while(true){
if(cljs.core.truth_(s__8389))
{{
var G__8391 = cljs.core.next.call(null,s__8389);
var G__8392 = (n__8390 + 1);
s__8389 = G__8391;
n__8390 = G__8392;
continue;
}
} else
{return n__8390;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__8403 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8404 = (function() { 
var G__8408__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8411 = conj.call(null,coll,x);
var G__8412 = cljs.core.first.call(null,xs);
var G__8413 = cljs.core.next.call(null,xs);
coll = G__8411;
x = G__8412;
xs = G__8413;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8408 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8408__delegate.call(this, coll, x, xs);
};
G__8408.cljs$lang$maxFixedArity = 2;
G__8408.cljs$lang$applyTo = (function (arglist__8416){
var coll = cljs.core.first(arglist__8416);
var x = cljs.core.first(cljs.core.next(arglist__8416));
var xs = cljs.core.rest(cljs.core.next(arglist__8416));
return G__8408__delegate.call(this, coll, x, xs);
});
return G__8408;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8403.call(this,coll,x);
default:
return conj__8404.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8404.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__8428 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8429 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8428.call(this,coll,n);
case  3 :
return nth__8429.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__8437 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8438 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8437.call(this,o,k);
case  3 :
return get__8438.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__8445 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8446 = (function() { 
var G__8456__delegate = function (coll,k,v,kvs){
while(true){
var ret__8443 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8457 = ret__8443;
var G__8458 = cljs.core.first.call(null,kvs);
var G__8459 = cljs.core.second.call(null,kvs);
var G__8460 = cljs.core.nnext.call(null,kvs);
coll = G__8457;
k = G__8458;
v = G__8459;
kvs = G__8460;
continue;
}
} else
{return ret__8443;
}
break;
}
};
var G__8456 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8456__delegate.call(this, coll, k, v, kvs);
};
G__8456.cljs$lang$maxFixedArity = 3;
G__8456.cljs$lang$applyTo = (function (arglist__8484){
var coll = cljs.core.first(arglist__8484);
var k = cljs.core.first(cljs.core.next(arglist__8484));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8484)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8484)));
return G__8456__delegate.call(this, coll, k, v, kvs);
});
return G__8456;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8445.call(this,coll,k,v);
default:
return assoc__8446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8446.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__8533 = (function (coll){
return coll;
});
var dissoc__8534 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8535 = (function() { 
var G__8537__delegate = function (coll,k,ks){
while(true){
var ret__8485 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8538 = ret__8485;
var G__8539 = cljs.core.first.call(null,ks);
var G__8540 = cljs.core.next.call(null,ks);
coll = G__8538;
k = G__8539;
ks = G__8540;
continue;
}
} else
{return ret__8485;
}
break;
}
};
var G__8537 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8537__delegate.call(this, coll, k, ks);
};
G__8537.cljs$lang$maxFixedArity = 2;
G__8537.cljs$lang$applyTo = (function (arglist__8541){
var coll = cljs.core.first(arglist__8541);
var k = cljs.core.first(cljs.core.next(arglist__8541));
var ks = cljs.core.rest(cljs.core.next(arglist__8541));
return G__8537__delegate.call(this, coll, k, ks);
});
return G__8537;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8533.call(this,coll);
case  2 :
return dissoc__8534.call(this,coll,k);
default:
return dissoc__8535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8535.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____8550 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8551 = x__445__auto____8550;

if(cljs.core.truth_(and__3546__auto____8551))
{var and__3546__auto____8552 = x__445__auto____8550.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8552))
{return cljs.core.not.call(null,x__445__auto____8550.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8552;
}
} else
{return and__3546__auto____8551;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8550);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__8620 = (function (coll){
return coll;
});
var disj__8621 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8622 = (function() { 
var G__8624__delegate = function (coll,k,ks){
while(true){
var ret__8581 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8626 = ret__8581;
var G__8627 = cljs.core.first.call(null,ks);
var G__8628 = cljs.core.next.call(null,ks);
coll = G__8626;
k = G__8627;
ks = G__8628;
continue;
}
} else
{return ret__8581;
}
break;
}
};
var G__8624 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8624__delegate.call(this, coll, k, ks);
};
G__8624.cljs$lang$maxFixedArity = 2;
G__8624.cljs$lang$applyTo = (function (arglist__8629){
var coll = cljs.core.first(arglist__8629);
var k = cljs.core.first(cljs.core.next(arglist__8629));
var ks = cljs.core.rest(cljs.core.next(arglist__8629));
return G__8624__delegate.call(this, coll, k, ks);
});
return G__8624;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8620.call(this,coll);
case  2 :
return disj__8621.call(this,coll,k);
default:
return disj__8622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8622.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8630 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8632 = x__445__auto____8630;

if(cljs.core.truth_(and__3546__auto____8632))
{var and__3546__auto____8633 = x__445__auto____8630.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8633))
{return cljs.core.not.call(null,x__445__auto____8630.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8633;
}
} else
{return and__3546__auto____8632;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8630);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8637 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8638 = x__445__auto____8637;

if(cljs.core.truth_(and__3546__auto____8638))
{var and__3546__auto____8639 = x__445__auto____8637.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8639))
{return cljs.core.not.call(null,x__445__auto____8637.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8639;
}
} else
{return and__3546__auto____8638;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8637);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8644 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8646 = x__445__auto____8644;

if(cljs.core.truth_(and__3546__auto____8646))
{var and__3546__auto____8647 = x__445__auto____8644.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8647))
{return cljs.core.not.call(null,x__445__auto____8644.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8647;
}
} else
{return and__3546__auto____8646;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8644);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8660 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8661 = x__445__auto____8660;

if(cljs.core.truth_(and__3546__auto____8661))
{var and__3546__auto____8662 = x__445__auto____8660.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8662))
{return cljs.core.not.call(null,x__445__auto____8660.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8662;
}
} else
{return and__3546__auto____8661;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8660);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8669 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8671 = x__445__auto____8669;

if(cljs.core.truth_(and__3546__auto____8671))
{var and__3546__auto____8674 = x__445__auto____8669.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8674))
{return cljs.core.not.call(null,x__445__auto____8669.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8674;
}
} else
{return and__3546__auto____8671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8669);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8686 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8688 = x__445__auto____8686;

if(cljs.core.truth_(and__3546__auto____8688))
{var and__3546__auto____8689 = x__445__auto____8686.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8689))
{return cljs.core.not.call(null,x__445__auto____8686.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8689;
}
} else
{return and__3546__auto____8688;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8686);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8701 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8703 = x__445__auto____8701;

if(cljs.core.truth_(and__3546__auto____8703))
{var and__3546__auto____8705 = x__445__auto____8701.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8705))
{return cljs.core.not.call(null,x__445__auto____8701.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8705;
}
} else
{return and__3546__auto____8703;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8701);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8720 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8720.push(key);
}));
return keys__8720;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____8771 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8773 = x__445__auto____8771;

if(cljs.core.truth_(and__3546__auto____8773))
{var and__3546__auto____8774 = x__445__auto____8771.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8774))
{return cljs.core.not.call(null,x__445__auto____8771.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8774;
}
} else
{return and__3546__auto____8773;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8771);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____8787 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8787))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8790 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8790))
{return or__3548__auto____8790;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8787;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8795 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8795))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8795;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8799 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8799))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8799;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____8807 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8807))
{return (n == n.toFixed());
} else
{return and__3546__auto____8807;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8815 = coll;

if(cljs.core.truth_(and__3546__auto____8815))
{var and__3546__auto____8817 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8817))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8817;
}
} else
{return and__3546__auto____8815;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___8828 = (function (x){
return true;
});
var distinct_QMARK___8829 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8830 = (function() { 
var G__8832__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8819 = cljs.core.set([y,x]);
var xs__8820 = more;

while(true){
var x__8822 = cljs.core.first.call(null,xs__8820);
var etc__8825 = cljs.core.next.call(null,xs__8820);

if(cljs.core.truth_(xs__8820))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8819,x__8822)))
{return false;
} else
{{
var G__8835 = cljs.core.conj.call(null,s__8819,x__8822);
var G__8836 = etc__8825;
s__8819 = G__8835;
xs__8820 = G__8836;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__8832 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8832__delegate.call(this, x, y, more);
};
G__8832.cljs$lang$maxFixedArity = 2;
G__8832.cljs$lang$applyTo = (function (arglist__8845){
var x = cljs.core.first(arglist__8845);
var y = cljs.core.first(cljs.core.next(arglist__8845));
var more = cljs.core.rest(cljs.core.next(arglist__8845));
return G__8832__delegate.call(this, x, y, more);
});
return G__8832;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8828.call(this,x);
case  2 :
return distinct_QMARK___8829.call(this,x,y);
default:
return distinct_QMARK___8830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8830.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__8857 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8857)))
{return r__8857;
} else
{if(cljs.core.truth_(r__8857))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__8873 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8874 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8870 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8870,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8870);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8873.call(this,comp);
case  2 :
return sort__8874.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__8886 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8887 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8886.call(this,keyfn,comp);
case  3 :
return sort_by__8887.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__8892 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8893 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8892.call(this,f,val);
case  3 :
return reduce__8893.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8904 = (function (f,coll){
var temp__3695__auto____8896 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8896))
{var s__8898 = temp__3695__auto____8896;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8898),cljs.core.next.call(null,s__8898));
} else
{return f.call(null);
}
});
var seq_reduce__8905 = (function (f,val,coll){
var val__8902 = val;
var coll__8903 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8903))
{{
var G__8907 = f.call(null,val__8902,cljs.core.first.call(null,coll__8903));
var G__8908 = cljs.core.next.call(null,coll__8903);
val__8902 = G__8907;
coll__8903 = G__8908;
continue;
}
} else
{return val__8902;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8904.call(this,f,val);
case  3 :
return seq_reduce__8905.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8911 = null;
var G__8911__8912 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8911__8913 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8911 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8911__8912.call(this,coll,f);
case  3 :
return G__8911__8913.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8911;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8922 = (function (){
return 0;
});
var _PLUS___8923 = (function (x){
return x;
});
var _PLUS___8924 = (function (x,y){
return (x + y);
});
var _PLUS___8925 = (function() { 
var G__8927__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8927 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8927__delegate.call(this, x, y, more);
};
G__8927.cljs$lang$maxFixedArity = 2;
G__8927.cljs$lang$applyTo = (function (arglist__8929){
var x = cljs.core.first(arglist__8929);
var y = cljs.core.first(cljs.core.next(arglist__8929));
var more = cljs.core.rest(cljs.core.next(arglist__8929));
return G__8927__delegate.call(this, x, y, more);
});
return G__8927;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8922.call(this);
case  1 :
return _PLUS___8923.call(this,x);
case  2 :
return _PLUS___8924.call(this,x,y);
default:
return _PLUS___8925.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8925.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___8934 = (function (x){
return (- x);
});
var ___8935 = (function (x,y){
return (x - y);
});
var ___8936 = (function() { 
var G__8940__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8940 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8940__delegate.call(this, x, y, more);
};
G__8940.cljs$lang$maxFixedArity = 2;
G__8940.cljs$lang$applyTo = (function (arglist__8941){
var x = cljs.core.first(arglist__8941);
var y = cljs.core.first(cljs.core.next(arglist__8941));
var more = cljs.core.rest(cljs.core.next(arglist__8941));
return G__8940__delegate.call(this, x, y, more);
});
return G__8940;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8934.call(this,x);
case  2 :
return ___8935.call(this,x,y);
default:
return ___8936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8936.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9006 = (function (){
return 1;
});
var _STAR___9007 = (function (x){
return x;
});
var _STAR___9008 = (function (x,y){
return (x * y);
});
var _STAR___9009 = (function() { 
var G__9014__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9014 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9014__delegate.call(this, x, y, more);
};
G__9014.cljs$lang$maxFixedArity = 2;
G__9014.cljs$lang$applyTo = (function (arglist__9019){
var x = cljs.core.first(arglist__9019);
var y = cljs.core.first(cljs.core.next(arglist__9019));
var more = cljs.core.rest(cljs.core.next(arglist__9019));
return G__9014__delegate.call(this, x, y, more);
});
return G__9014;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9006.call(this);
case  1 :
return _STAR___9007.call(this,x);
case  2 :
return _STAR___9008.call(this,x,y);
default:
return _STAR___9009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9009.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___9024 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9025 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9026 = (function() { 
var G__9031__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9031 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9031__delegate.call(this, x, y, more);
};
G__9031.cljs$lang$maxFixedArity = 2;
G__9031.cljs$lang$applyTo = (function (arglist__9032){
var x = cljs.core.first(arglist__9032);
var y = cljs.core.first(cljs.core.next(arglist__9032));
var more = cljs.core.rest(cljs.core.next(arglist__9032));
return G__9031__delegate.call(this, x, y, more);
});
return G__9031;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9024.call(this,x);
case  2 :
return _SLASH___9025.call(this,x,y);
default:
return _SLASH___9026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9026.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___9041 = (function (x){
return true;
});
var _LT___9042 = (function (x,y){
return (x < y);
});
var _LT___9043 = (function() { 
var G__9047__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9048 = y;
var G__9049 = cljs.core.first.call(null,more);
var G__9050 = cljs.core.next.call(null,more);
x = G__9048;
y = G__9049;
more = G__9050;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9047 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9047__delegate.call(this, x, y, more);
};
G__9047.cljs$lang$maxFixedArity = 2;
G__9047.cljs$lang$applyTo = (function (arglist__9051){
var x = cljs.core.first(arglist__9051);
var y = cljs.core.first(cljs.core.next(arglist__9051));
var more = cljs.core.rest(cljs.core.next(arglist__9051));
return G__9047__delegate.call(this, x, y, more);
});
return G__9047;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9041.call(this,x);
case  2 :
return _LT___9042.call(this,x,y);
default:
return _LT___9043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9043.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___9066 = (function (x){
return true;
});
var _LT__EQ___9067 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9068 = (function() { 
var G__9078__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9079 = y;
var G__9080 = cljs.core.first.call(null,more);
var G__9081 = cljs.core.next.call(null,more);
x = G__9079;
y = G__9080;
more = G__9081;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9078 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9078__delegate.call(this, x, y, more);
};
G__9078.cljs$lang$maxFixedArity = 2;
G__9078.cljs$lang$applyTo = (function (arglist__9086){
var x = cljs.core.first(arglist__9086);
var y = cljs.core.first(cljs.core.next(arglist__9086));
var more = cljs.core.rest(cljs.core.next(arglist__9086));
return G__9078__delegate.call(this, x, y, more);
});
return G__9078;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9066.call(this,x);
case  2 :
return _LT__EQ___9067.call(this,x,y);
default:
return _LT__EQ___9068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9068.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___9104 = (function (x){
return true;
});
var _GT___9105 = (function (x,y){
return (x > y);
});
var _GT___9106 = (function() { 
var G__9109__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9113 = y;
var G__9114 = cljs.core.first.call(null,more);
var G__9115 = cljs.core.next.call(null,more);
x = G__9113;
y = G__9114;
more = G__9115;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9109 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9109__delegate.call(this, x, y, more);
};
G__9109.cljs$lang$maxFixedArity = 2;
G__9109.cljs$lang$applyTo = (function (arglist__9117){
var x = cljs.core.first(arglist__9117);
var y = cljs.core.first(cljs.core.next(arglist__9117));
var more = cljs.core.rest(cljs.core.next(arglist__9117));
return G__9109__delegate.call(this, x, y, more);
});
return G__9109;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9104.call(this,x);
case  2 :
return _GT___9105.call(this,x,y);
default:
return _GT___9106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9106.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___9132 = (function (x){
return true;
});
var _GT__EQ___9133 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9135 = (function() { 
var G__9137__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9138 = y;
var G__9139 = cljs.core.first.call(null,more);
var G__9140 = cljs.core.next.call(null,more);
x = G__9138;
y = G__9139;
more = G__9140;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9137 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9137__delegate.call(this, x, y, more);
};
G__9137.cljs$lang$maxFixedArity = 2;
G__9137.cljs$lang$applyTo = (function (arglist__9141){
var x = cljs.core.first(arglist__9141);
var y = cljs.core.first(cljs.core.next(arglist__9141));
var more = cljs.core.rest(cljs.core.next(arglist__9141));
return G__9137__delegate.call(this, x, y, more);
});
return G__9137;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9132.call(this,x);
case  2 :
return _GT__EQ___9133.call(this,x,y);
default:
return _GT__EQ___9135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9135.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__9151 = (function (x){
return x;
});
var max__9152 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9153 = (function() { 
var G__9155__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9155 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9155__delegate.call(this, x, y, more);
};
G__9155.cljs$lang$maxFixedArity = 2;
G__9155.cljs$lang$applyTo = (function (arglist__9158){
var x = cljs.core.first(arglist__9158);
var y = cljs.core.first(cljs.core.next(arglist__9158));
var more = cljs.core.rest(cljs.core.next(arglist__9158));
return G__9155__delegate.call(this, x, y, more);
});
return G__9155;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9151.call(this,x);
case  2 :
return max__9152.call(this,x,y);
default:
return max__9153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9153.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9163 = (function (x){
return x;
});
var min__9164 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9165 = (function() { 
var G__9167__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9167 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9167__delegate.call(this, x, y, more);
};
G__9167.cljs$lang$maxFixedArity = 2;
G__9167.cljs$lang$applyTo = (function (arglist__9168){
var x = cljs.core.first(arglist__9168);
var y = cljs.core.first(cljs.core.next(arglist__9168));
var more = cljs.core.rest(cljs.core.next(arglist__9168));
return G__9167__delegate.call(this, x, y, more);
});
return G__9167;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9163.call(this,x);
case  2 :
return min__9164.call(this,x,y);
default:
return min__9165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9165.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__9184 = (n % d);

return cljs.core.fix.call(null,((n - rem__9184) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9190 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9190));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9468 = (function (){
return Math.random.call(null);
});
var rand__9469 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9468.call(this);
case  1 :
return rand__9469.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___9521 = (function (x){
return true;
});
var _EQ__EQ___9522 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9523 = (function() { 
var G__9526__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9529 = y;
var G__9531 = cljs.core.first.call(null,more);
var G__9533 = cljs.core.next.call(null,more);
x = G__9529;
y = G__9531;
more = G__9533;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9526 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9526__delegate.call(this, x, y, more);
};
G__9526.cljs$lang$maxFixedArity = 2;
G__9526.cljs$lang$applyTo = (function (arglist__9537){
var x = cljs.core.first(arglist__9537);
var y = cljs.core.first(cljs.core.next(arglist__9537));
var more = cljs.core.rest(cljs.core.next(arglist__9537));
return G__9526__delegate.call(this, x, y, more);
});
return G__9526;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9521.call(this,x);
case  2 :
return _EQ__EQ___9522.call(this,x,y);
default:
return _EQ__EQ___9523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9523.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__9550 = n;
var xs__9551 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9556 = xs__9551;

if(cljs.core.truth_(and__3546__auto____9556))
{return (n__9550 > 0);
} else
{return and__3546__auto____9556;
}
})()))
{{
var G__9560 = (n__9550 - 1);
var G__9561 = cljs.core.next.call(null,xs__9551);
n__9550 = G__9560;
xs__9551 = G__9561;
continue;
}
} else
{return xs__9551;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9581 = null;
var G__9581__9582 = (function (coll,n){
var temp__3695__auto____9569 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9569))
{var xs__9570 = temp__3695__auto____9569;

return cljs.core.first.call(null,xs__9570);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9581__9583 = (function (coll,n,not_found){
var temp__3695__auto____9575 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9575))
{var xs__9576 = temp__3695__auto____9575;

return cljs.core.first.call(null,xs__9576);
} else
{return not_found;
}
});
G__9581 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9581__9582.call(this,coll,n);
case  3 :
return G__9581__9583.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9581;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9653 = (function (){
return "";
});
var str_STAR___9654 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___9655 = (function() { 
var G__9657__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9658 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9659 = cljs.core.next.call(null,more);
sb = G__9658;
more = G__9659;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9657 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9657__delegate.call(this, x, ys);
};
G__9657.cljs$lang$maxFixedArity = 1;
G__9657.cljs$lang$applyTo = (function (arglist__9662){
var x = cljs.core.first(arglist__9662);
var ys = cljs.core.rest(arglist__9662);
return G__9657__delegate.call(this, x, ys);
});
return G__9657;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9653.call(this);
case  1 :
return str_STAR___9654.call(this,x);
default:
return str_STAR___9655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9655.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__9670 = (function (){
return "";
});
var str__9671 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__9672 = (function() { 
var G__9676__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9676 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9676__delegate.call(this, x, ys);
};
G__9676.cljs$lang$maxFixedArity = 1;
G__9676.cljs$lang$applyTo = (function (arglist__9677){
var x = cljs.core.first(arglist__9677);
var ys = cljs.core.rest(arglist__9677);
return G__9676__delegate.call(this, x, ys);
});
return G__9676;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9670.call(this);
case  1 :
return str__9671.call(this,x);
default:
return str__9672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9672.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9682 = (function (s,start){
return s.substring(start);
});
var subs__9683 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9682.call(this,s,start);
case  3 :
return subs__9683.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__9685 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__9686 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9685.call(this,ns);
case  2 :
return symbol__9686.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__9702 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__9703 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9702.call(this,ns);
case  2 :
return keyword__9703.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9711 = cljs.core.seq.call(null,x);
var ys__9712 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9711)))
{return cljs.core.nil_QMARK_.call(null,ys__9712);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9712)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9711),cljs.core.first.call(null,ys__9712))))
{{
var G__9715 = cljs.core.next.call(null,xs__9711);
var G__9716 = cljs.core.next.call(null,ys__9712);
xs__9711 = G__9715;
ys__9712 = G__9716;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__9717_SHARP_,p2__9718_SHARP_){
return cljs.core.hash_combine.call(null,p1__9717_SHARP_,cljs.core.hash.call(null,p2__9718_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9801__9803 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9801__9803))
{var G__9806__9808 = cljs.core.first.call(null,G__9801__9803);
var vec__9807__9809 = G__9806__9808;
var key_name__9810 = cljs.core.nth.call(null,vec__9807__9809,0,null);
var f__9812 = cljs.core.nth.call(null,vec__9807__9809,1,null);
var G__9801__9813 = G__9801__9803;

var G__9806__9815 = G__9806__9808;
var G__9801__9816 = G__9801__9813;

while(true){
var vec__9818__9922 = G__9806__9815;
var key_name__9923 = cljs.core.nth.call(null,vec__9818__9922,0,null);
var f__9924 = cljs.core.nth.call(null,vec__9818__9922,1,null);
var G__9801__9925 = G__9801__9816;

var str_name__9926 = cljs.core.name.call(null,key_name__9923);

obj[str_name__9926] = f__9924;
var temp__3698__auto____9928 = cljs.core.next.call(null,G__9801__9925);

if(cljs.core.truth_(temp__3698__auto____9928))
{var G__9801__9930 = temp__3698__auto____9928;

{
var G__9953 = cljs.core.first.call(null,G__9801__9930);
var G__9954 = G__9801__9930;
G__9806__9815 = G__9953;
G__9801__9816 = G__9954;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9958 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9959 = this;
return (new cljs.core.List(this__9959.meta,o,coll,(this__9959.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9960 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9961 = this;
return this__9961.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9962 = this;
return this__9962.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9963 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9965 = this;
return this__9965.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9966 = this;
return this__9966.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9967 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9968 = this;
return (new cljs.core.List(meta,this__9968.first,this__9968.rest,this__9968.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9971 = this;
return this__9971.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9973 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9980 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9981 = this;
return (new cljs.core.List(this__9981.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9982 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9983 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9984 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9985 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9986 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9987 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9988 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9989 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9990 = this;
return this__9990.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9991 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__10026){
var items = cljs.core.seq( arglist__10026 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10033 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10034 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10035 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10036 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10036.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10037 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10042 = this;
return this__10042.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10043 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10043.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10043.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10045 = this;
return this__10045.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10046 = this;
return (new cljs.core.Cons(meta,this__10046.first,this__10046.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__10125 = null;
var G__10125__10126 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10125__10127 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10125 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10125__10126.call(this,string,f);
case  3 :
return G__10125__10127.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10125;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10132 = null;
var G__10132__10134 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10132__10135 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10132 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10132__10134.call(this,string,k);
case  3 :
return G__10132__10135.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10132;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10141 = null;
var G__10141__10142 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10141__10143 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10141 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10141__10142.call(this,string,n);
case  3 :
return G__10141__10143.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10141;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__10150 = null;
var G__10150__10151 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10150__10152 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10150 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10150__10151.call(this,this$,coll);
case  3 :
return G__10150__10152.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10150;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__10168 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10168;
} else
{lazy_seq.x = x__10168.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10185 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10186 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10187 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10188 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10188.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10189 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10196 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10197 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10198 = this;
return this__10198.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10200 = this;
return (new cljs.core.LazySeq(meta,this__10200.realized,this__10200.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10266 = cljs.core.array.call(null);

var s__10267 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10267)))
{ary__10266.push(cljs.core.first.call(null,s__10267));
{
var G__10269 = cljs.core.next.call(null,s__10267);
s__10267 = G__10269;
continue;
}
} else
{return ary__10266;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10271 = s;
var i__10272 = n;
var sum__10273 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10274 = (i__10272 > 0);

if(cljs.core.truth_(and__3546__auto____10274))
{return cljs.core.seq.call(null,s__10271);
} else
{return and__3546__auto____10274;
}
})()))
{{
var G__10282 = cljs.core.next.call(null,s__10271);
var G__10283 = (i__10272 - 1);
var G__10284 = (sum__10273 + 1);
s__10271 = G__10282;
i__10272 = G__10283;
sum__10273 = G__10284;
continue;
}
} else
{return sum__10273;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__10298 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10299 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10300 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10287 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10287))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10287),concat.call(null,cljs.core.rest.call(null,s__10287),y));
} else
{return y;
}
})));
});
var concat__10301 = (function() { 
var G__10304__delegate = function (x,y,zs){
var cat__10297 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10294 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10294))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10294),cat.call(null,cljs.core.rest.call(null,xys__10294),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10297.call(null,concat.call(null,x,y),zs);
};
var G__10304 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10304__delegate.call(this, x, y, zs);
};
G__10304.cljs$lang$maxFixedArity = 2;
G__10304.cljs$lang$applyTo = (function (arglist__10307){
var x = cljs.core.first(arglist__10307);
var y = cljs.core.first(cljs.core.next(arglist__10307));
var zs = cljs.core.rest(cljs.core.next(arglist__10307));
return G__10304__delegate.call(this, x, y, zs);
});
return G__10304;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10298.call(this);
case  1 :
return concat__10299.call(this,x);
case  2 :
return concat__10300.call(this,x,y);
default:
return concat__10301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10301.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___10316 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10317 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10318 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10319 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10320 = (function() { 
var G__10323__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10323 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10323__delegate.call(this, a, b, c, d, more);
};
G__10323.cljs$lang$maxFixedArity = 4;
G__10323.cljs$lang$applyTo = (function (arglist__10324){
var a = cljs.core.first(arglist__10324);
var b = cljs.core.first(cljs.core.next(arglist__10324));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10324)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10324))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10324))));
return G__10323__delegate.call(this, a, b, c, d, more);
});
return G__10323;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10316.call(this,a);
case  2 :
return list_STAR___10317.call(this,a,b);
case  3 :
return list_STAR___10318.call(this,a,b,c);
case  4 :
return list_STAR___10319.call(this,a,b,c,d);
default:
return list_STAR___10320.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10320.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__10374 = (function (f,args){
var fixed_arity__10350 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10350 + 1)) <= fixed_arity__10350)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10375 = (function (f,x,args){
var arglist__10358 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10360 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10358,fixed_arity__10360) <= fixed_arity__10360)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10358));
} else
{return f.cljs$lang$applyTo(arglist__10358);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10358));
}
});
var apply__10376 = (function (f,x,y,args){
var arglist__10364 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10365 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10364,fixed_arity__10365) <= fixed_arity__10365)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10364));
} else
{return f.cljs$lang$applyTo(arglist__10364);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10364));
}
});
var apply__10377 = (function (f,x,y,z,args){
var arglist__10367 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10368 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10367,fixed_arity__10368) <= fixed_arity__10368)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10367));
} else
{return f.cljs$lang$applyTo(arglist__10367);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10367));
}
});
var apply__10378 = (function() { 
var G__10407__delegate = function (f,a,b,c,d,args){
var arglist__10372 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10373 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10372,fixed_arity__10373) <= fixed_arity__10373)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10372));
} else
{return f.cljs$lang$applyTo(arglist__10372);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10372));
}
};
var G__10407 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10407__delegate.call(this, f, a, b, c, d, args);
};
G__10407.cljs$lang$maxFixedArity = 5;
G__10407.cljs$lang$applyTo = (function (arglist__10411){
var f = cljs.core.first(arglist__10411);
var a = cljs.core.first(cljs.core.next(arglist__10411));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10411)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10411))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10411)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10411)))));
return G__10407__delegate.call(this, f, a, b, c, d, args);
});
return G__10407;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10374.call(this,f,a);
case  3 :
return apply__10375.call(this,f,a,b);
case  4 :
return apply__10376.call(this,f,a,b,c);
case  5 :
return apply__10377.call(this,f,a,b,c,d);
default:
return apply__10378.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10378.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__10423){
var obj = cljs.core.first(arglist__10423);
var f = cljs.core.first(cljs.core.next(arglist__10423));
var args = cljs.core.rest(cljs.core.next(arglist__10423));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___10427 = (function (x){
return false;
});
var not_EQ___10428 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10429 = (function() { 
var G__10433__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10433 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10433__delegate.call(this, x, y, more);
};
G__10433.cljs$lang$maxFixedArity = 2;
G__10433.cljs$lang$applyTo = (function (arglist__10435){
var x = cljs.core.first(arglist__10435);
var y = cljs.core.first(cljs.core.next(arglist__10435));
var more = cljs.core.rest(cljs.core.next(arglist__10435));
return G__10433__delegate.call(this, x, y, more);
});
return G__10433;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10427.call(this,x);
case  2 :
return not_EQ___10428.call(this,x,y);
default:
return not_EQ___10429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10429.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__10437 = pred;
var G__10438 = cljs.core.next.call(null,coll);
pred = G__10437;
coll = G__10438;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____10457 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10457))
{return or__3548__auto____10457;
} else
{{
var G__10463 = pred;
var G__10464 = cljs.core.next.call(null,coll);
pred = G__10463;
coll = G__10464;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__10483 = null;
var G__10483__10484 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10483__10485 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10483__10486 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10483__10487 = (function() { 
var G__10489__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10489 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10489__delegate.call(this, x, y, zs);
};
G__10489.cljs$lang$maxFixedArity = 2;
G__10489.cljs$lang$applyTo = (function (arglist__10491){
var x = cljs.core.first(arglist__10491);
var y = cljs.core.first(cljs.core.next(arglist__10491));
var zs = cljs.core.rest(cljs.core.next(arglist__10491));
return G__10489__delegate.call(this, x, y, zs);
});
return G__10489;
})()
;
G__10483 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10483__10484.call(this);
case  1 :
return G__10483__10485.call(this,x);
case  2 :
return G__10483__10486.call(this,x,y);
default:
return G__10483__10487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10483.cljs$lang$maxFixedArity = 2;
G__10483.cljs$lang$applyTo = G__10483__10487.cljs$lang$applyTo;
return G__10483;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10564__delegate = function (args){
return x;
};
var G__10564 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10564__delegate.call(this, args);
};
G__10564.cljs$lang$maxFixedArity = 0;
G__10564.cljs$lang$applyTo = (function (arglist__10566){
var args = cljs.core.seq( arglist__10566 );;
return G__10564__delegate.call(this, args);
});
return G__10564;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__10575 = (function (){
return cljs.core.identity;
});
var comp__10576 = (function (f){
return f;
});
var comp__10577 = (function (f,g){
return (function() {
var G__10583 = null;
var G__10583__10584 = (function (){
return f.call(null,g.call(null));
});
var G__10583__10585 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10583__10586 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10583__10587 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10583__10588 = (function() { 
var G__10590__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10590 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10590__delegate.call(this, x, y, z, args);
};
G__10590.cljs$lang$maxFixedArity = 3;
G__10590.cljs$lang$applyTo = (function (arglist__10591){
var x = cljs.core.first(arglist__10591);
var y = cljs.core.first(cljs.core.next(arglist__10591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10591)));
return G__10590__delegate.call(this, x, y, z, args);
});
return G__10590;
})()
;
G__10583 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10583__10584.call(this);
case  1 :
return G__10583__10585.call(this,x);
case  2 :
return G__10583__10586.call(this,x,y);
case  3 :
return G__10583__10587.call(this,x,y,z);
default:
return G__10583__10588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10583.cljs$lang$maxFixedArity = 3;
G__10583.cljs$lang$applyTo = G__10583__10588.cljs$lang$applyTo;
return G__10583;
})()
});
var comp__10578 = (function (f,g,h){
return (function() {
var G__10592 = null;
var G__10592__10593 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10592__10594 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10592__10595 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10592__10596 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10592__10597 = (function() { 
var G__10599__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10599 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10599__delegate.call(this, x, y, z, args);
};
G__10599.cljs$lang$maxFixedArity = 3;
G__10599.cljs$lang$applyTo = (function (arglist__10600){
var x = cljs.core.first(arglist__10600);
var y = cljs.core.first(cljs.core.next(arglist__10600));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10600)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10600)));
return G__10599__delegate.call(this, x, y, z, args);
});
return G__10599;
})()
;
G__10592 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10592__10593.call(this);
case  1 :
return G__10592__10594.call(this,x);
case  2 :
return G__10592__10595.call(this,x,y);
case  3 :
return G__10592__10596.call(this,x,y,z);
default:
return G__10592__10597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10592.cljs$lang$maxFixedArity = 3;
G__10592.cljs$lang$applyTo = G__10592__10597.cljs$lang$applyTo;
return G__10592;
})()
});
var comp__10579 = (function() { 
var G__10601__delegate = function (f1,f2,f3,fs){
var fs__10570 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10602__delegate = function (args){
var ret__10572 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10570),args);
var fs__10573 = cljs.core.next.call(null,fs__10570);

while(true){
if(cljs.core.truth_(fs__10573))
{{
var G__10603 = cljs.core.first.call(null,fs__10573).call(null,ret__10572);
var G__10604 = cljs.core.next.call(null,fs__10573);
ret__10572 = G__10603;
fs__10573 = G__10604;
continue;
}
} else
{return ret__10572;
}
break;
}
};
var G__10602 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10602__delegate.call(this, args);
};
G__10602.cljs$lang$maxFixedArity = 0;
G__10602.cljs$lang$applyTo = (function (arglist__10605){
var args = cljs.core.seq( arglist__10605 );;
return G__10602__delegate.call(this, args);
});
return G__10602;
})()
;
};
var G__10601 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10601__delegate.call(this, f1, f2, f3, fs);
};
G__10601.cljs$lang$maxFixedArity = 3;
G__10601.cljs$lang$applyTo = (function (arglist__10606){
var f1 = cljs.core.first(arglist__10606);
var f2 = cljs.core.first(cljs.core.next(arglist__10606));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10606)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10606)));
return G__10601__delegate.call(this, f1, f2, f3, fs);
});
return G__10601;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10575.call(this);
case  1 :
return comp__10576.call(this,f1);
case  2 :
return comp__10577.call(this,f1,f2);
case  3 :
return comp__10578.call(this,f1,f2,f3);
default:
return comp__10579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10579.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__10615 = (function (f,arg1){
return (function() { 
var G__10620__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10620 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10620__delegate.call(this, args);
};
G__10620.cljs$lang$maxFixedArity = 0;
G__10620.cljs$lang$applyTo = (function (arglist__10621){
var args = cljs.core.seq( arglist__10621 );;
return G__10620__delegate.call(this, args);
});
return G__10620;
})()
;
});
var partial__10616 = (function (f,arg1,arg2){
return (function() { 
var G__10622__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10622 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10622__delegate.call(this, args);
};
G__10622.cljs$lang$maxFixedArity = 0;
G__10622.cljs$lang$applyTo = (function (arglist__10623){
var args = cljs.core.seq( arglist__10623 );;
return G__10622__delegate.call(this, args);
});
return G__10622;
})()
;
});
var partial__10617 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10624__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10624 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10624__delegate.call(this, args);
};
G__10624.cljs$lang$maxFixedArity = 0;
G__10624.cljs$lang$applyTo = (function (arglist__10625){
var args = cljs.core.seq( arglist__10625 );;
return G__10624__delegate.call(this, args);
});
return G__10624;
})()
;
});
var partial__10618 = (function() { 
var G__10626__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10627__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10627 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10627__delegate.call(this, args);
};
G__10627.cljs$lang$maxFixedArity = 0;
G__10627.cljs$lang$applyTo = (function (arglist__10628){
var args = cljs.core.seq( arglist__10628 );;
return G__10627__delegate.call(this, args);
});
return G__10627;
})()
;
};
var G__10626 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10626__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10626.cljs$lang$maxFixedArity = 4;
G__10626.cljs$lang$applyTo = (function (arglist__10629){
var f = cljs.core.first(arglist__10629);
var arg1 = cljs.core.first(cljs.core.next(arglist__10629));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10629)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10629))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10629))));
return G__10626__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10626;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10615.call(this,f,arg1);
case  3 :
return partial__10616.call(this,f,arg1,arg2);
case  4 :
return partial__10617.call(this,f,arg1,arg2,arg3);
default:
return partial__10618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10618.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__10781 = (function (f,x){
return (function() {
var G__10790 = null;
var G__10790__10792 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10790__10793 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10790__10794 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10790__10795 = (function() { 
var G__10815__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10815 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10815__delegate.call(this, a, b, c, ds);
};
G__10815.cljs$lang$maxFixedArity = 3;
G__10815.cljs$lang$applyTo = (function (arglist__10817){
var a = cljs.core.first(arglist__10817);
var b = cljs.core.first(cljs.core.next(arglist__10817));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10817)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10817)));
return G__10815__delegate.call(this, a, b, c, ds);
});
return G__10815;
})()
;
G__10790 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10790__10792.call(this,a);
case  2 :
return G__10790__10793.call(this,a,b);
case  3 :
return G__10790__10794.call(this,a,b,c);
default:
return G__10790__10795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = G__10790__10795.cljs$lang$applyTo;
return G__10790;
})()
});
var fnil__10782 = (function (f,x,y){
return (function() {
var G__10823 = null;
var G__10823__10827 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10823__10830 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10823__10832 = (function() { 
var G__10842__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10842 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10842__delegate.call(this, a, b, c, ds);
};
G__10842.cljs$lang$maxFixedArity = 3;
G__10842.cljs$lang$applyTo = (function (arglist__10908){
var a = cljs.core.first(arglist__10908);
var b = cljs.core.first(cljs.core.next(arglist__10908));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10908)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10908)));
return G__10842__delegate.call(this, a, b, c, ds);
});
return G__10842;
})()
;
G__10823 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10823__10827.call(this,a,b);
case  3 :
return G__10823__10830.call(this,a,b,c);
default:
return G__10823__10832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10823.cljs$lang$maxFixedArity = 3;
G__10823.cljs$lang$applyTo = G__10823__10832.cljs$lang$applyTo;
return G__10823;
})()
});
var fnil__10784 = (function (f,x,y,z){
return (function() {
var G__10911 = null;
var G__10911__10912 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10911__10913 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10911__10914 = (function() { 
var G__10924__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10924 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10924__delegate.call(this, a, b, c, ds);
};
G__10924.cljs$lang$maxFixedArity = 3;
G__10924.cljs$lang$applyTo = (function (arglist__10926){
var a = cljs.core.first(arglist__10926);
var b = cljs.core.first(cljs.core.next(arglist__10926));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10926)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10926)));
return G__10924__delegate.call(this, a, b, c, ds);
});
return G__10924;
})()
;
G__10911 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10911__10912.call(this,a,b);
case  3 :
return G__10911__10913.call(this,a,b,c);
default:
return G__10911__10914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10911.cljs$lang$maxFixedArity = 3;
G__10911.cljs$lang$applyTo = G__10911__10914.cljs$lang$applyTo;
return G__10911;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10781.call(this,f,x);
case  3 :
return fnil__10782.call(this,f,x,y);
case  4 :
return fnil__10784.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__10946 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10940 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10940))
{var s__10942 = temp__3698__auto____10940;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10942)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10942)));
} else
{return null;
}
})));
});

return mapi__10946.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10964 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10964))
{var s__10965 = temp__3698__auto____10964;

var x__10967 = f.call(null,cljs.core.first.call(null,s__10965));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10967)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10965));
} else
{return cljs.core.cons.call(null,x__10967,keep.call(null,f,cljs.core.rest.call(null,s__10965)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__11007 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10990 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10990))
{var s__10993 = temp__3698__auto____10990;

var x__10995 = f.call(null,idx,cljs.core.first.call(null,s__10993));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10995)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10993));
} else
{return cljs.core.cons.call(null,x__10995,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10993)));
}
} else
{return null;
}
})));
});

return keepi__11007.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__11277 = (function (p){
return (function() {
var ep1 = null;
var ep1__11361 = (function (){
return true;
});
var ep1__11362 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11363 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11082 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11082))
{return p.call(null,y);
} else
{return and__3546__auto____11082;
}
})());
});
var ep1__11364 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11086 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11086))
{var and__3546__auto____11088 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11088))
{return p.call(null,z);
} else
{return and__3546__auto____11088;
}
} else
{return and__3546__auto____11086;
}
})());
});
var ep1__11365 = (function() { 
var G__11378__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11091 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11091))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11091;
}
})());
};
var G__11378 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11378__delegate.call(this, x, y, z, args);
};
G__11378.cljs$lang$maxFixedArity = 3;
G__11378.cljs$lang$applyTo = (function (arglist__11380){
var x = cljs.core.first(arglist__11380);
var y = cljs.core.first(cljs.core.next(arglist__11380));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11380)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11380)));
return G__11378__delegate.call(this, x, y, z, args);
});
return G__11378;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11361.call(this);
case  1 :
return ep1__11362.call(this,x);
case  2 :
return ep1__11363.call(this,x,y);
case  3 :
return ep1__11364.call(this,x,y,z);
default:
return ep1__11365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11365.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11278 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11382 = (function (){
return true;
});
var ep2__11383 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11095 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11095))
{return p2.call(null,x);
} else
{return and__3546__auto____11095;
}
})());
});
var ep2__11384 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11097 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11097))
{var and__3546__auto____11099 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11099))
{var and__3546__auto____11101 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11101))
{return p2.call(null,y);
} else
{return and__3546__auto____11101;
}
} else
{return and__3546__auto____11099;
}
} else
{return and__3546__auto____11097;
}
})());
});
var ep2__11385 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11103 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11103))
{var and__3546__auto____11105 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11105))
{var and__3546__auto____11106 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11106))
{var and__3546__auto____11107 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11107))
{var and__3546__auto____11109 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11109))
{return p2.call(null,z);
} else
{return and__3546__auto____11109;
}
} else
{return and__3546__auto____11107;
}
} else
{return and__3546__auto____11106;
}
} else
{return and__3546__auto____11105;
}
} else
{return and__3546__auto____11103;
}
})());
});
var ep2__11386 = (function() { 
var G__11394__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11112 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11112))
{return cljs.core.every_QMARK_.call(null,(function (p1__10977_SHARP_){
var and__3546__auto____11113 = p1.call(null,p1__10977_SHARP_);

if(cljs.core.truth_(and__3546__auto____11113))
{return p2.call(null,p1__10977_SHARP_);
} else
{return and__3546__auto____11113;
}
}),args);
} else
{return and__3546__auto____11112;
}
})());
};
var G__11394 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11394__delegate.call(this, x, y, z, args);
};
G__11394.cljs$lang$maxFixedArity = 3;
G__11394.cljs$lang$applyTo = (function (arglist__11423){
var x = cljs.core.first(arglist__11423);
var y = cljs.core.first(cljs.core.next(arglist__11423));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11423)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11423)));
return G__11394__delegate.call(this, x, y, z, args);
});
return G__11394;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11382.call(this);
case  1 :
return ep2__11383.call(this,x);
case  2 :
return ep2__11384.call(this,x,y);
case  3 :
return ep2__11385.call(this,x,y,z);
default:
return ep2__11386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11386.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11279 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11432 = (function (){
return true;
});
var ep3__11434 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11115 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11115))
{var and__3546__auto____11116 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11116))
{return p3.call(null,x);
} else
{return and__3546__auto____11116;
}
} else
{return and__3546__auto____11115;
}
})());
});
var ep3__11435 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11119 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11119))
{var and__3546__auto____11120 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11120))
{var and__3546__auto____11122 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11122))
{var and__3546__auto____11124 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11124))
{var and__3546__auto____11126 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11126))
{return p3.call(null,y);
} else
{return and__3546__auto____11126;
}
} else
{return and__3546__auto____11124;
}
} else
{return and__3546__auto____11122;
}
} else
{return and__3546__auto____11120;
}
} else
{return and__3546__auto____11119;
}
})());
});
var ep3__11436 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11128 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11128))
{var and__3546__auto____11130 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11130))
{var and__3546__auto____11131 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11131))
{var and__3546__auto____11132 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11132))
{var and__3546__auto____11134 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11134))
{var and__3546__auto____11140 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11140))
{var and__3546__auto____11146 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11146))
{var and__3546__auto____11147 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11147))
{return p3.call(null,z);
} else
{return and__3546__auto____11147;
}
} else
{return and__3546__auto____11146;
}
} else
{return and__3546__auto____11140;
}
} else
{return and__3546__auto____11134;
}
} else
{return and__3546__auto____11132;
}
} else
{return and__3546__auto____11131;
}
} else
{return and__3546__auto____11130;
}
} else
{return and__3546__auto____11128;
}
})());
});
var ep3__11437 = (function() { 
var G__11458__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11154 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11154))
{return cljs.core.every_QMARK_.call(null,(function (p1__10979_SHARP_){
var and__3546__auto____11155 = p1.call(null,p1__10979_SHARP_);

if(cljs.core.truth_(and__3546__auto____11155))
{var and__3546__auto____11157 = p2.call(null,p1__10979_SHARP_);

if(cljs.core.truth_(and__3546__auto____11157))
{return p3.call(null,p1__10979_SHARP_);
} else
{return and__3546__auto____11157;
}
} else
{return and__3546__auto____11155;
}
}),args);
} else
{return and__3546__auto____11154;
}
})());
};
var G__11458 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11458__delegate.call(this, x, y, z, args);
};
G__11458.cljs$lang$maxFixedArity = 3;
G__11458.cljs$lang$applyTo = (function (arglist__11465){
var x = cljs.core.first(arglist__11465);
var y = cljs.core.first(cljs.core.next(arglist__11465));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11465)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11465)));
return G__11458__delegate.call(this, x, y, z, args);
});
return G__11458;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11432.call(this);
case  1 :
return ep3__11434.call(this,x);
case  2 :
return ep3__11435.call(this,x,y);
case  3 :
return ep3__11436.call(this,x,y,z);
default:
return ep3__11437.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11437.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11280 = (function() { 
var G__11468__delegate = function (p1,p2,p3,ps){
var ps__11159 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11470 = (function (){
return true;
});
var epn__11471 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10980_SHARP_){
return p1__10980_SHARP_.call(null,x);
}),ps__11159);
});
var epn__11472 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10982_SHARP_){
var and__3546__auto____11166 = p1__10982_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11166))
{return p1__10982_SHARP_.call(null,y);
} else
{return and__3546__auto____11166;
}
}),ps__11159);
});
var epn__11474 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10983_SHARP_){
var and__3546__auto____11167 = p1__10983_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11167))
{var and__3546__auto____11168 = p1__10983_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11168))
{return p1__10983_SHARP_.call(null,z);
} else
{return and__3546__auto____11168;
}
} else
{return and__3546__auto____11167;
}
}),ps__11159);
});
var epn__11475 = (function() { 
var G__11481__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11169 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11169))
{return cljs.core.every_QMARK_.call(null,(function (p1__10984_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10984_SHARP_,args);
}),ps__11159);
} else
{return and__3546__auto____11169;
}
})());
};
var G__11481 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11481__delegate.call(this, x, y, z, args);
};
G__11481.cljs$lang$maxFixedArity = 3;
G__11481.cljs$lang$applyTo = (function (arglist__11483){
var x = cljs.core.first(arglist__11483);
var y = cljs.core.first(cljs.core.next(arglist__11483));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11483)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11483)));
return G__11481__delegate.call(this, x, y, z, args);
});
return G__11481;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11470.call(this);
case  1 :
return epn__11471.call(this,x);
case  2 :
return epn__11472.call(this,x,y);
case  3 :
return epn__11474.call(this,x,y,z);
default:
return epn__11475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11475.cljs$lang$applyTo;
return epn;
})()
};
var G__11468 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11468__delegate.call(this, p1, p2, p3, ps);
};
G__11468.cljs$lang$maxFixedArity = 3;
G__11468.cljs$lang$applyTo = (function (arglist__11486){
var p1 = cljs.core.first(arglist__11486);
var p2 = cljs.core.first(cljs.core.next(arglist__11486));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11486)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11486)));
return G__11468__delegate.call(this, p1, p2, p3, ps);
});
return G__11468;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11277.call(this,p1);
case  2 :
return every_pred__11278.call(this,p1,p2);
case  3 :
return every_pred__11279.call(this,p1,p2,p3);
default:
return every_pred__11280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11280.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__11671 = (function (p){
return (function() {
var sp1 = null;
var sp1__11677 = (function (){
return null;
});
var sp1__11678 = (function (x){
return p.call(null,x);
});
var sp1__11679 = (function (x,y){
var or__3548__auto____11500 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11500))
{return or__3548__auto____11500;
} else
{return p.call(null,y);
}
});
var sp1__11680 = (function (x,y,z){
var or__3548__auto____11501 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11501))
{return or__3548__auto____11501;
} else
{var or__3548__auto____11502 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11502))
{return or__3548__auto____11502;
} else
{return p.call(null,z);
}
}
});
var sp1__11681 = (function() { 
var G__11683__delegate = function (x,y,z,args){
var or__3548__auto____11505 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11505))
{return or__3548__auto____11505;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11683 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11683__delegate.call(this, x, y, z, args);
};
G__11683.cljs$lang$maxFixedArity = 3;
G__11683.cljs$lang$applyTo = (function (arglist__11684){
var x = cljs.core.first(arglist__11684);
var y = cljs.core.first(cljs.core.next(arglist__11684));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11684)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11684)));
return G__11683__delegate.call(this, x, y, z, args);
});
return G__11683;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11677.call(this);
case  1 :
return sp1__11678.call(this,x);
case  2 :
return sp1__11679.call(this,x,y);
case  3 :
return sp1__11680.call(this,x,y,z);
default:
return sp1__11681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11681.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11672 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11685 = (function (){
return null;
});
var sp2__11686 = (function (x){
var or__3548__auto____11507 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11507))
{return or__3548__auto____11507;
} else
{return p2.call(null,x);
}
});
var sp2__11687 = (function (x,y){
var or__3548__auto____11510 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11510))
{return or__3548__auto____11510;
} else
{var or__3548__auto____11512 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{var or__3548__auto____11513 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11513))
{return or__3548__auto____11513;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11688 = (function (x,y,z){
var or__3548__auto____11516 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11516))
{return or__3548__auto____11516;
} else
{var or__3548__auto____11523 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11523))
{return or__3548__auto____11523;
} else
{var or__3548__auto____11524 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11524))
{return or__3548__auto____11524;
} else
{var or__3548__auto____11525 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11525))
{return or__3548__auto____11525;
} else
{var or__3548__auto____11526 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11526))
{return or__3548__auto____11526;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11689 = (function() { 
var G__11693__delegate = function (x,y,z,args){
var or__3548__auto____11527 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11527))
{return or__3548__auto____11527;
} else
{return cljs.core.some.call(null,(function (p1__11071_SHARP_){
var or__3548__auto____11528 = p1.call(null,p1__11071_SHARP_);

if(cljs.core.truth_(or__3548__auto____11528))
{return or__3548__auto____11528;
} else
{return p2.call(null,p1__11071_SHARP_);
}
}),args);
}
};
var G__11693 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11693__delegate.call(this, x, y, z, args);
};
G__11693.cljs$lang$maxFixedArity = 3;
G__11693.cljs$lang$applyTo = (function (arglist__11699){
var x = cljs.core.first(arglist__11699);
var y = cljs.core.first(cljs.core.next(arglist__11699));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11699)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11699)));
return G__11693__delegate.call(this, x, y, z, args);
});
return G__11693;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11685.call(this);
case  1 :
return sp2__11686.call(this,x);
case  2 :
return sp2__11687.call(this,x,y);
case  3 :
return sp2__11688.call(this,x,y,z);
default:
return sp2__11689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11689.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11673 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11700 = (function (){
return null;
});
var sp3__11701 = (function (x){
var or__3548__auto____11544 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11544))
{return or__3548__auto____11544;
} else
{var or__3548__auto____11549 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11549))
{return or__3548__auto____11549;
} else
{return p3.call(null,x);
}
}
});
var sp3__11702 = (function (x,y){
var or__3548__auto____11552 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11552))
{return or__3548__auto____11552;
} else
{var or__3548__auto____11553 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11553))
{return or__3548__auto____11553;
} else
{var or__3548__auto____11565 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11565))
{return or__3548__auto____11565;
} else
{var or__3548__auto____11567 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11567))
{return or__3548__auto____11567;
} else
{var or__3548__auto____11568 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11568))
{return or__3548__auto____11568;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11703 = (function (x,y,z){
var or__3548__auto____11572 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11572))
{return or__3548__auto____11572;
} else
{var or__3548__auto____11573 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11573))
{return or__3548__auto____11573;
} else
{var or__3548__auto____11574 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11574))
{return or__3548__auto____11574;
} else
{var or__3548__auto____11576 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11576))
{return or__3548__auto____11576;
} else
{var or__3548__auto____11578 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11578))
{return or__3548__auto____11578;
} else
{var or__3548__auto____11579 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11579))
{return or__3548__auto____11579;
} else
{var or__3548__auto____11581 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11581))
{return or__3548__auto____11581;
} else
{var or__3548__auto____11583 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11583))
{return or__3548__auto____11583;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__11704 = (function() { 
var G__11708__delegate = function (x,y,z,args){
var or__3548__auto____11650 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11650))
{return or__3548__auto____11650;
} else
{return cljs.core.some.call(null,(function (p1__11072_SHARP_){
var or__3548__auto____11654 = p1.call(null,p1__11072_SHARP_);

if(cljs.core.truth_(or__3548__auto____11654))
{return or__3548__auto____11654;
} else
{var or__3548__auto____11655 = p2.call(null,p1__11072_SHARP_);

if(cljs.core.truth_(or__3548__auto____11655))
{return or__3548__auto____11655;
} else
{return p3.call(null,p1__11072_SHARP_);
}
}
}),args);
}
};
var G__11708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11708__delegate.call(this, x, y, z, args);
};
G__11708.cljs$lang$maxFixedArity = 3;
G__11708.cljs$lang$applyTo = (function (arglist__11720){
var x = cljs.core.first(arglist__11720);
var y = cljs.core.first(cljs.core.next(arglist__11720));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11720)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11720)));
return G__11708__delegate.call(this, x, y, z, args);
});
return G__11708;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11700.call(this);
case  1 :
return sp3__11701.call(this,x);
case  2 :
return sp3__11702.call(this,x,y);
case  3 :
return sp3__11703.call(this,x,y,z);
default:
return sp3__11704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11704.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11674 = (function() { 
var G__11721__delegate = function (p1,p2,p3,ps){
var ps__11656 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11722 = (function (){
return null;
});
var spn__11723 = (function (x){
return cljs.core.some.call(null,(function (p1__11074_SHARP_){
return p1__11074_SHARP_.call(null,x);
}),ps__11656);
});
var spn__11724 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11075_SHARP_){
var or__3548__auto____11664 = p1__11075_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11664))
{return or__3548__auto____11664;
} else
{return p1__11075_SHARP_.call(null,y);
}
}),ps__11656);
});
var spn__11725 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11076_SHARP_){
var or__3548__auto____11665 = p1__11076_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11665))
{return or__3548__auto____11665;
} else
{var or__3548__auto____11668 = p1__11076_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11668))
{return or__3548__auto____11668;
} else
{return p1__11076_SHARP_.call(null,z);
}
}
}),ps__11656);
});
var spn__11726 = (function() { 
var G__11744__delegate = function (x,y,z,args){
var or__3548__auto____11669 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11669))
{return or__3548__auto____11669;
} else
{return cljs.core.some.call(null,(function (p1__11077_SHARP_){
return cljs.core.some.call(null,p1__11077_SHARP_,args);
}),ps__11656);
}
};
var G__11744 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11744__delegate.call(this, x, y, z, args);
};
G__11744.cljs$lang$maxFixedArity = 3;
G__11744.cljs$lang$applyTo = (function (arglist__11746){
var x = cljs.core.first(arglist__11746);
var y = cljs.core.first(cljs.core.next(arglist__11746));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11746)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11746)));
return G__11744__delegate.call(this, x, y, z, args);
});
return G__11744;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11722.call(this);
case  1 :
return spn__11723.call(this,x);
case  2 :
return spn__11724.call(this,x,y);
case  3 :
return spn__11725.call(this,x,y,z);
default:
return spn__11726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11726.cljs$lang$applyTo;
return spn;
})()
};
var G__11721 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11721__delegate.call(this, p1, p2, p3, ps);
};
G__11721.cljs$lang$maxFixedArity = 3;
G__11721.cljs$lang$applyTo = (function (arglist__11748){
var p1 = cljs.core.first(arglist__11748);
var p2 = cljs.core.first(cljs.core.next(arglist__11748));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11748)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11748)));
return G__11721__delegate.call(this, p1, p2, p3, ps);
});
return G__11721;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11671.call(this,p1);
case  2 :
return some_fn__11672.call(this,p1,p2);
case  3 :
return some_fn__11673.call(this,p1,p2,p3);
default:
return some_fn__11674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11674.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__11818 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11802))
{var s__11803 = temp__3698__auto____11802;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11803)),map.call(null,f,cljs.core.rest.call(null,s__11803)));
} else
{return null;
}
})));
});
var map__11821 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11804 = cljs.core.seq.call(null,c1);
var s2__11805 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11806 = s1__11804;

if(cljs.core.truth_(and__3546__auto____11806))
{return s2__11805;
} else
{return and__3546__auto____11806;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11804),cljs.core.first.call(null,s2__11805)),map.call(null,f,cljs.core.rest.call(null,s1__11804),cljs.core.rest.call(null,s2__11805)));
} else
{return null;
}
})));
});
var map__11822 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11808 = cljs.core.seq.call(null,c1);
var s2__11809 = cljs.core.seq.call(null,c2);
var s3__11810 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11811 = s1__11808;

if(cljs.core.truth_(and__3546__auto____11811))
{var and__3546__auto____11812 = s2__11809;

if(cljs.core.truth_(and__3546__auto____11812))
{return s3__11810;
} else
{return and__3546__auto____11812;
}
} else
{return and__3546__auto____11811;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11808),cljs.core.first.call(null,s2__11809),cljs.core.first.call(null,s3__11810)),map.call(null,f,cljs.core.rest.call(null,s1__11808),cljs.core.rest.call(null,s2__11809),cljs.core.rest.call(null,s3__11810)));
} else
{return null;
}
})));
});
var map__11825 = (function() { 
var G__11850__delegate = function (f,c1,c2,c3,colls){
var step__11817 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11815 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11815)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11815),step.call(null,map.call(null,cljs.core.rest,ss__11815)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11488_SHARP_){
return cljs.core.apply.call(null,f,p1__11488_SHARP_);
}),step__11817.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11850 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11850__delegate.call(this, f, c1, c2, c3, colls);
};
G__11850.cljs$lang$maxFixedArity = 4;
G__11850.cljs$lang$applyTo = (function (arglist__11856){
var f = cljs.core.first(arglist__11856);
var c1 = cljs.core.first(cljs.core.next(arglist__11856));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11856)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11856))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11856))));
return G__11850__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11850;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11818.call(this,f,c1);
case  3 :
return map__11821.call(this,f,c1,c2);
case  4 :
return map__11822.call(this,f,c1,c2,c3);
default:
return map__11825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11825.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____11874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11874))
{var s__11875 = temp__3698__auto____11874;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11875),take.call(null,(n - 1),cljs.core.rest.call(null,s__11875)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__11917 = (function (n,coll){
while(true){
var s__11878 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11916 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11916))
{return s__11878;
} else
{return and__3546__auto____11916;
}
})()))
{{
var G__11920 = (n - 1);
var G__11921 = cljs.core.rest.call(null,s__11878);
n = G__11920;
coll = G__11921;
continue;
}
} else
{return s__11878;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11917.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11925 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11927 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11925.call(this,n);
case  2 :
return drop_last__11927.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__11931 = cljs.core.seq.call(null,coll);
var lead__11932 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11932))
{{
var G__11933 = cljs.core.next.call(null,s__11931);
var G__11934 = cljs.core.next.call(null,lead__11932);
s__11931 = G__11933;
lead__11932 = G__11934;
continue;
}
} else
{return s__11931;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11937 = (function (pred,coll){
while(true){
var s__11935 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11936 = s__11935;

if(cljs.core.truth_(and__3546__auto____11936))
{return pred.call(null,cljs.core.first.call(null,s__11935));
} else
{return and__3546__auto____11936;
}
})()))
{{
var G__11938 = pred;
var G__11939 = cljs.core.rest.call(null,s__11935);
pred = G__11938;
coll = G__11939;
continue;
}
} else
{return s__11935;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11937.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11940 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11940))
{var s__11941 = temp__3698__auto____11940;

return cljs.core.concat.call(null,s__11941,cycle.call(null,s__11941));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__11945 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11946 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11945.call(this,n);
case  2 :
return repeat__11946.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__11952 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11953 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11952.call(this,n);
case  2 :
return repeatedly__11953.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__12035 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12028 = cljs.core.seq.call(null,c1);
var s2__12029 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12033 = s1__12028;

if(cljs.core.truth_(and__3546__auto____12033))
{return s2__12029;
} else
{return and__3546__auto____12033;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12028),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12029),interleave.call(null,cljs.core.rest.call(null,s1__12028),cljs.core.rest.call(null,s2__12029))));
} else
{return null;
}
})));
});
var interleave__12036 = (function() { 
var G__12039__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12034 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12034)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12034),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12034)));
} else
{return null;
}
})));
};
var G__12039 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12039__delegate.call(this, c1, c2, colls);
};
G__12039.cljs$lang$maxFixedArity = 2;
G__12039.cljs$lang$applyTo = (function (arglist__12041){
var c1 = cljs.core.first(arglist__12041);
var c2 = cljs.core.first(cljs.core.next(arglist__12041));
var colls = cljs.core.rest(cljs.core.next(arglist__12041));
return G__12039__delegate.call(this, c1, c2, colls);
});
return G__12039;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12035.call(this,c1,c2);
default:
return interleave__12036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12036.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__12047 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12045))
{var coll__12046 = temp__3695__auto____12045;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12046),cat.call(null,cljs.core.rest.call(null,coll__12046),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12047.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12060 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12062 = (function() { 
var G__12070__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12070 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12070__delegate.call(this, f, coll, colls);
};
G__12070.cljs$lang$maxFixedArity = 2;
G__12070.cljs$lang$applyTo = (function (arglist__12071){
var f = cljs.core.first(arglist__12071);
var coll = cljs.core.first(cljs.core.next(arglist__12071));
var colls = cljs.core.rest(cljs.core.next(arglist__12071));
return G__12070__delegate.call(this, f, coll, colls);
});
return G__12070;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12060.call(this,f,coll);
default:
return mapcat__12062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12062.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12073 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12073))
{var s__12074 = temp__3698__auto____12073;

var f__12076 = cljs.core.first.call(null,s__12074);
var r__12077 = cljs.core.rest.call(null,s__12074);

if(cljs.core.truth_(pred.call(null,f__12076)))
{return cljs.core.cons.call(null,f__12076,filter.call(null,pred,r__12077));
} else
{return filter.call(null,pred,r__12077);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__12079 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12079.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12078_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12078_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__12128 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12129 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12115 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12115))
{var s__12116 = temp__3698__auto____12115;

var p__12117 = cljs.core.take.call(null,n,s__12116);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12117))))
{return cljs.core.cons.call(null,p__12117,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12116)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12130 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12122))
{var s__12123 = temp__3698__auto____12122;

var p__12124 = cljs.core.take.call(null,n,s__12123);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12124))))
{return cljs.core.cons.call(null,p__12124,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12123)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12124,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12128.call(this,n,step);
case  3 :
return partition__12129.call(this,n,step,pad);
case  4 :
return partition__12130.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__12144 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12145 = (function (m,ks,not_found){
var sentinel__12140 = cljs.core.lookup_sentinel;
var m__12141 = m;
var ks__12142 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12142))
{var m__12143 = cljs.core.get.call(null,m__12141,cljs.core.first.call(null,ks__12142),sentinel__12140);

if(cljs.core.truth_((sentinel__12140 === m__12143)))
{return not_found;
} else
{{
var G__12154 = sentinel__12140;
var G__12156 = m__12143;
var G__12157 = cljs.core.next.call(null,ks__12142);
sentinel__12140 = G__12154;
m__12141 = G__12156;
ks__12142 = G__12157;
continue;
}
}
} else
{return m__12141;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12144.call(this,m,ks);
case  3 :
return get_in__12145.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__12164,v){
var vec__12166__12167 = p__12164;
var k__12169 = cljs.core.nth.call(null,vec__12166__12167,0,null);
var ks__12172 = cljs.core.nthnext.call(null,vec__12166__12167,1);

if(cljs.core.truth_(ks__12172))
{return cljs.core.assoc.call(null,m,k__12169,assoc_in.call(null,cljs.core.get.call(null,m,k__12169),ks__12172,v));
} else
{return cljs.core.assoc.call(null,m,k__12169,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__12175,f,args){
var vec__12176__12177 = p__12175;
var k__12178 = cljs.core.nth.call(null,vec__12176__12177,0,null);
var ks__12179 = cljs.core.nthnext.call(null,vec__12176__12177,1);

if(cljs.core.truth_(ks__12179))
{return cljs.core.assoc.call(null,m,k__12178,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12178),ks__12179,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12178,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12178),args));
}
};
var update_in = function (m,p__12175,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12175, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12181){
var m = cljs.core.first(arglist__12181);
var p__12175 = cljs.core.first(cljs.core.next(arglist__12181));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12181)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12181)));
return update_in__delegate.call(this, m, p__12175, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12389 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12440 = null;
var G__12440__12441 = (function (coll,k){
var this__12391 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12440__12442 = (function (coll,k,not_found){
var this__12392 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12440 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12440__12441.call(this,coll,k);
case  3 :
return G__12440__12442.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12440;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12394 = this;
var new_array__12395 = cljs.core.aclone.call(null,this__12394.array);

(new_array__12395[k] = v);
return (new cljs.core.Vector(this__12394.meta,new_array__12395));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12448 = null;
var G__12448__12449 = (function (coll,k){
var this__12397 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12448__12450 = (function (coll,k,not_found){
var this__12399 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12448 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12448__12449.call(this,coll,k);
case  3 :
return G__12448__12450.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12448;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12401 = this;
var new_array__12402 = cljs.core.aclone.call(null,this__12401.array);

new_array__12402.push(o);
return (new cljs.core.Vector(this__12401.meta,new_array__12402));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12452 = null;
var G__12452__12453 = (function (v,f){
var this__12403 = this;
return cljs.core.ci_reduce.call(null,this__12403.array,f);
});
var G__12452__12454 = (function (v,f,start){
var this__12405 = this;
return cljs.core.ci_reduce.call(null,this__12405.array,f,start);
});
G__12452 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12452__12453.call(this,v,f);
case  3 :
return G__12452__12454.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12452;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12407 = this;
if(cljs.core.truth_((this__12407.array.length > 0)))
{var vector_seq__12410 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12407.array.length)))
{return cljs.core.cons.call(null,(this__12407.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12410.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12412 = this;
return this__12412.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12414 = this;
var count__12415 = this__12414.array.length;

if(cljs.core.truth_((count__12415 > 0)))
{return (this__12414.array[(count__12415 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12417 = this;
if(cljs.core.truth_((this__12417.array.length > 0)))
{var new_array__12419 = cljs.core.aclone.call(null,this__12417.array);

new_array__12419.pop();
return (new cljs.core.Vector(this__12417.meta,new_array__12419));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12422 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12424 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12425 = this;
return (new cljs.core.Vector(meta,this__12425.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12426 = this;
return this__12426.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12464 = null;
var G__12464__12465 = (function (coll,n){
var this__12427 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12432 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12432))
{return (n < this__12427.array.length);
} else
{return and__3546__auto____12432;
}
})()))
{return (this__12427.array[n]);
} else
{return null;
}
});
var G__12464__12466 = (function (coll,n,not_found){
var this__12433 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12434 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12434))
{return (n < this__12433.array.length);
} else
{return and__3546__auto____12434;
}
})()))
{return (this__12433.array[n]);
} else
{return not_found;
}
});
G__12464 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12464__12465.call(this,coll,n);
case  3 :
return G__12464__12466.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12464;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12435 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12435.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__12479){
var args = cljs.core.seq( arglist__12479 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12497 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12535 = null;
var G__12535__12538 = (function (coll,k){
var this__12500 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12535__12539 = (function (coll,k,not_found){
var this__12501 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12535 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12535__12538.call(this,coll,k);
case  3 :
return G__12535__12539.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12535;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12502 = this;
var v_pos__12507 = (this__12502.start + key);

return (new cljs.core.Subvec(this__12502.meta,cljs.core._assoc.call(null,this__12502.v,v_pos__12507,val),this__12502.start,((this__12502.end > (v_pos__12507 + 1)) ? this__12502.end : (v_pos__12507 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12575 = null;
var G__12575__12576 = (function (coll,k){
var this__12508 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12575__12577 = (function (coll,k,not_found){
var this__12509 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12575 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12575__12576.call(this,coll,k);
case  3 :
return G__12575__12577.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12575;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12510 = this;
return (new cljs.core.Subvec(this__12510.meta,cljs.core._assoc_n.call(null,this__12510.v,this__12510.end,o),this__12510.start,(this__12510.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12638 = null;
var G__12638__12639 = (function (coll,f){
var this__12511 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12638__12640 = (function (coll,f,start){
var this__12513 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12638 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12638__12639.call(this,coll,f);
case  3 :
return G__12638__12640.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12638;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12518 = this;
var subvec_seq__12519 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12518.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12518.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12519.call(null,this__12518.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12520 = this;
return (this__12520.end - this__12520.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12521 = this;
return cljs.core._nth.call(null,this__12521.v,(this__12521.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12522 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12522.start,this__12522.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12522.meta,this__12522.v,this__12522.start,(this__12522.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12524 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12526 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12527 = this;
return (new cljs.core.Subvec(meta,this__12527.v,this__12527.start,this__12527.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12528 = this;
return this__12528.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12665 = null;
var G__12665__12666 = (function (coll,n){
var this__12529 = this;
return cljs.core._nth.call(null,this__12529.v,(this__12529.start + n));
});
var G__12665__12667 = (function (coll,n,not_found){
var this__12530 = this;
return cljs.core._nth.call(null,this__12530.v,(this__12530.start + n),not_found);
});
G__12665 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12665__12666.call(this,coll,n);
case  3 :
return G__12665__12667.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12665;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12531 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12531.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__12677 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12678 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12677.call(this,v,start);
case  3 :
return subvec__12678.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12697 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12698 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12699 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12701 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12701.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12704 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12705 = this;
return cljs.core._first.call(null,this__12705.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12708 = this;
var temp__3695__auto____12709 = cljs.core.next.call(null,this__12708.front);

if(cljs.core.truth_(temp__3695__auto____12709))
{var f1__12710 = temp__3695__auto____12709;

return (new cljs.core.PersistentQueueSeq(this__12708.meta,f1__12710,this__12708.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12708.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12708.meta,this__12708.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12714 = this;
return this__12714.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12716 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12716.front,this__12716.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12791 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12793 = this;
if(cljs.core.truth_(this__12793.front))
{return (new cljs.core.PersistentQueue(this__12793.meta,(this__12793.count + 1),this__12793.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12802 = this__12793.rear;

if(cljs.core.truth_(or__3548__auto____12802))
{return or__3548__auto____12802;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12793.meta,(this__12793.count + 1),cljs.core.conj.call(null,this__12793.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12804 = this;
var rear__12805 = cljs.core.seq.call(null,this__12804.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12806 = this__12804.front;

if(cljs.core.truth_(or__3548__auto____12806))
{return or__3548__auto____12806;
} else
{return rear__12805;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12804.front,cljs.core.seq.call(null,rear__12805)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12807 = this;
return this__12807.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12808 = this;
return cljs.core._first.call(null,this__12808.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12813 = this;
if(cljs.core.truth_(this__12813.front))
{var temp__3695__auto____12814 = cljs.core.next.call(null,this__12813.front);

if(cljs.core.truth_(temp__3695__auto____12814))
{var f1__12815 = temp__3695__auto____12814;

return (new cljs.core.PersistentQueue(this__12813.meta,(this__12813.count - 1),f1__12815,this__12813.rear));
} else
{return (new cljs.core.PersistentQueue(this__12813.meta,(this__12813.count - 1),cljs.core.seq.call(null,this__12813.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12818 = this;
return cljs.core.first.call(null,this__12818.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12819 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12820 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12821 = this;
return (new cljs.core.PersistentQueue(meta,this__12821.count,this__12821.front,this__12821.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12822 = this;
return this__12822.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12827 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__12840 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__12871 = array.length;

var i__12872 = 0;

while(true){
if(cljs.core.truth_((i__12872 < len__12871)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12872]))))
{return i__12872;
} else
{{
var G__12881 = (i__12872 + incr);
i__12872 = G__12881;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___12892 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12910 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12889 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12889))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12889;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___12892.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12910.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12962 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13022 = null;
var G__13022__13024 = (function (coll,k){
var this__12964 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13022__13025 = (function (coll,k,not_found){
var this__12966 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12966.strobj,(this__12966.strobj[k]),not_found);
});
G__13022 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13022__13024.call(this,coll,k);
case  3 :
return G__13022__13025.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13022;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12969 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12973 = goog.object.clone.call(null,this__12969.strobj);
var overwrite_QMARK___12974 = new_strobj__12973.hasOwnProperty(k);

(new_strobj__12973[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12974))
{return (new cljs.core.ObjMap(this__12969.meta,this__12969.keys,new_strobj__12973));
} else
{var new_keys__12978 = cljs.core.aclone.call(null,this__12969.keys);

new_keys__12978.push(k);
return (new cljs.core.ObjMap(this__12969.meta,new_keys__12978,new_strobj__12973));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12969.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12983 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12983.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13041 = null;
var G__13041__13042 = (function (coll,k){
var this__12989 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13041__13045 = (function (coll,k,not_found){
var this__12991 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13041 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13041__13042.call(this,coll,k);
case  3 :
return G__13041__13045.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13041;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12993 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12995 = this;
if(cljs.core.truth_((this__12995.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12920_SHARP_){
return cljs.core.vector.call(null,p1__12920_SHARP_,(this__12995.strobj[p1__12920_SHARP_]));
}),this__12995.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12999 = this;
return this__12999.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13002 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13003 = this;
return (new cljs.core.ObjMap(meta,this__13003.keys,this__13003.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13005 = this;
return this__13005.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13008 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13008.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13010 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13012 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13012))
{return this__13010.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13012;
}
})()))
{var new_keys__13016 = cljs.core.aclone.call(null,this__13010.keys);
var new_strobj__13017 = goog.object.clone.call(null,this__13010.strobj);

new_keys__13016.splice(cljs.core.scan_array.call(null,1,k,new_keys__13016),1);
cljs.core.js_delete.call(null,new_strobj__13017,k);
return (new cljs.core.ObjMap(this__13010.meta,new_keys__13016,new_strobj__13017));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13099 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13162 = null;
var G__13162__13163 = (function (coll,k){
var this__13100 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13162__13164 = (function (coll,k,not_found){
var this__13101 = this;
var bucket__13105 = (this__13101.hashobj[cljs.core.hash.call(null,k)]);
var i__13106 = (cljs.core.truth_(bucket__13105)?cljs.core.scan_array.call(null,2,k,bucket__13105):null);

if(cljs.core.truth_(i__13106))
{return (bucket__13105[(i__13106 + 1)]);
} else
{return not_found;
}
});
G__13162 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13162__13163.call(this,coll,k);
case  3 :
return G__13162__13164.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13162;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13107 = this;
var h__13110 = cljs.core.hash.call(null,k);
var bucket__13111 = (this__13107.hashobj[h__13110]);

if(cljs.core.truth_(bucket__13111))
{var new_bucket__13112 = cljs.core.aclone.call(null,bucket__13111);
var new_hashobj__13113 = goog.object.clone.call(null,this__13107.hashobj);

(new_hashobj__13113[h__13110] = new_bucket__13112);
var temp__3695__auto____13114 = cljs.core.scan_array.call(null,2,k,new_bucket__13112);

if(cljs.core.truth_(temp__3695__auto____13114))
{var i__13115 = temp__3695__auto____13114;

(new_bucket__13112[(i__13115 + 1)] = v);
return (new cljs.core.HashMap(this__13107.meta,this__13107.count,new_hashobj__13113));
} else
{new_bucket__13112.push(k,v);
return (new cljs.core.HashMap(this__13107.meta,(this__13107.count + 1),new_hashobj__13113));
}
} else
{var new_hashobj__13118 = goog.object.clone.call(null,this__13107.hashobj);

(new_hashobj__13118[h__13110] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13107.meta,(this__13107.count + 1),new_hashobj__13118));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13119 = this;
var bucket__13122 = (this__13119.hashobj[cljs.core.hash.call(null,k)]);
var i__13123 = (cljs.core.truth_(bucket__13122)?cljs.core.scan_array.call(null,2,k,bucket__13122):null);

if(cljs.core.truth_(i__13123))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13178 = null;
var G__13178__13179 = (function (coll,k){
var this__13125 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13178__13180 = (function (coll,k,not_found){
var this__13127 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13178 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13178__13179.call(this,coll,k);
case  3 :
return G__13178__13180.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13178;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13131 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13134 = this;
if(cljs.core.truth_((this__13134.count > 0)))
{var hashes__13135 = cljs.core.js_keys.call(null,this__13134.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13080_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13134.hashobj[p1__13080_SHARP_])));
}),hashes__13135);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13136 = this;
return this__13136.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13137 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13139 = this;
return (new cljs.core.HashMap(meta,this__13139.count,this__13139.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13141 = this;
return this__13141.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13144 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13144.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13146 = this;
var h__13149 = cljs.core.hash.call(null,k);
var bucket__13150 = (this__13146.hashobj[h__13149]);
var i__13154 = (cljs.core.truth_(bucket__13150)?cljs.core.scan_array.call(null,2,k,bucket__13150):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13154)))
{return coll;
} else
{var new_hashobj__13155 = goog.object.clone.call(null,this__13146.hashobj);

if(cljs.core.truth_((3 > bucket__13150.length)))
{cljs.core.js_delete.call(null,new_hashobj__13155,h__13149);
} else
{var new_bucket__13156 = cljs.core.aclone.call(null,bucket__13150);

new_bucket__13156.splice(i__13154,2);
(new_hashobj__13155[h__13149] = new_bucket__13156);
}
return (new cljs.core.HashMap(this__13146.meta,(this__13146.count - 1),new_hashobj__13155));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13279 = ks.length;

var i__13280 = 0;
var out__13281 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13280 < len__13279)))
{{
var G__13288 = (i__13280 + 1);
var G__13289 = cljs.core.assoc.call(null,out__13281,(ks[i__13280]),(vs[i__13280]));
i__13280 = G__13288;
out__13281 = G__13289;
continue;
}
} else
{return out__13281;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__13292 = cljs.core.seq.call(null,keyvals);
var out__13293 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13292))
{{
var G__13302 = cljs.core.nnext.call(null,in$__13292);
var G__13303 = cljs.core.assoc.call(null,out__13293,cljs.core.first.call(null,in$__13292),cljs.core.second.call(null,in$__13292));
in$__13292 = G__13302;
out__13293 = G__13303;
continue;
}
} else
{return out__13293;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__13304){
var keyvals = cljs.core.seq( arglist__13304 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__13310_SHARP_,p2__13311_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13327 = p1__13310_SHARP_;

if(cljs.core.truth_(or__3548__auto____13327))
{return or__3548__auto____13327;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13311_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__13343){
var maps = cljs.core.seq( arglist__13343 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__13353 = (function (m,e){
var k__13348 = cljs.core.first.call(null,e);
var v__13351 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13348)))
{return cljs.core.assoc.call(null,m,k__13348,f.call(null,cljs.core.get.call(null,m,k__13348),v__13351));
} else
{return cljs.core.assoc.call(null,m,k__13348,v__13351);
}
});
var merge2__13357 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13353,(function (){var or__3548__auto____13355 = m1;

if(cljs.core.truth_(or__3548__auto____13355))
{return or__3548__auto____13355;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13357,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__13375){
var f = cljs.core.first(arglist__13375);
var maps = cljs.core.rest(arglist__13375);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13386 = cljs.core.ObjMap.fromObject([],{});
var keys__13387 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13387))
{var key__13389 = cljs.core.first.call(null,keys__13387);
var entry__13390 = cljs.core.get.call(null,map,key__13389,"﷐'user/not-found");

{
var G__13395 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13390,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13386,key__13389,entry__13390):ret__13386);
var G__13396 = cljs.core.next.call(null,keys__13387);
ret__13386 = G__13395;
keys__13387 = G__13396;
continue;
}
} else
{return ret__13386;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13436 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13550 = null;
var G__13550__13551 = (function (coll,v){
var this__13439 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13550__13552 = (function (coll,v,not_found){
var this__13441 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13441.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13550 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13550__13551.call(this,coll,v);
case  3 :
return G__13550__13552.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13550;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13555 = null;
var G__13555__13556 = (function (coll,k){
var this__13444 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13555__13557 = (function (coll,k,not_found){
var this__13445 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13555 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13555__13556.call(this,coll,k);
case  3 :
return G__13555__13557.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13555;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13536 = this;
return (new cljs.core.Set(this__13536.meta,cljs.core.assoc.call(null,this__13536.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13537 = this;
return cljs.core.keys.call(null,this__13537.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13539 = this;
return (new cljs.core.Set(this__13539.meta,cljs.core.dissoc.call(null,this__13539.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13541 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13543 = this;
var and__3546__auto____13544 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13544))
{var and__3546__auto____13545 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13545))
{return cljs.core.every_QMARK_.call(null,(function (p1__13380_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13380_SHARP_);
}),other);
} else
{return and__3546__auto____13545;
}
} else
{return and__3546__auto____13544;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13546 = this;
return (new cljs.core.Set(meta,this__13546.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13547 = this;
return this__13547.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13548 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13548.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13581 = cljs.core.seq.call(null,coll);
var out__13582 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13581))))
{{
var G__13590 = cljs.core.rest.call(null,in$__13581);
var G__13591 = cljs.core.conj.call(null,out__13582,cljs.core.first.call(null,in$__13581));
in$__13581 = G__13590;
out__13582 = G__13591;
continue;
}
} else
{return out__13582;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__13594 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13597 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13597))
{var e__13598 = temp__3695__auto____13597;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13598));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13594,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13579_SHARP_){
var temp__3695__auto____13601 = cljs.core.find.call(null,smap,p1__13579_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13601))
{var e__13603 = temp__3695__auto____13601;

return cljs.core.second.call(null,e__13603);
} else
{return p1__13579_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13656 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13617,seen){
while(true){
var vec__13618__13619 = p__13617;
var f__13621 = cljs.core.nth.call(null,vec__13618__13619,0,null);
var xs__13623 = vec__13618__13619;

var temp__3698__auto____13626 = cljs.core.seq.call(null,xs__13623);

if(cljs.core.truth_(temp__3698__auto____13626))
{var s__13653 = temp__3698__auto____13626;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13621)))
{{
var G__13669 = cljs.core.rest.call(null,s__13653);
var G__13670 = seen;
p__13617 = G__13669;
seen = G__13670;
continue;
}
} else
{return cljs.core.cons.call(null,f__13621,step.call(null,cljs.core.rest.call(null,s__13653),cljs.core.conj.call(null,seen,f__13621)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13656.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13676 = cljs.core.Vector.fromArray([]);
var s__13677 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13677)))
{{
var G__13688 = cljs.core.conj.call(null,ret__13676,cljs.core.first.call(null,s__13677));
var G__13689 = cljs.core.next.call(null,s__13677);
ret__13676 = G__13688;
s__13677 = G__13689;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13676);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____13695 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13695))
{return or__3548__auto____13695;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13696 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13696 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13696 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____13707 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13707))
{return or__3548__auto____13707;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13709 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13709 > -1)))
{return cljs.core.subs.call(null,x,2,i__13709);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__13717 = cljs.core.ObjMap.fromObject([],{});
var ks__13720 = cljs.core.seq.call(null,keys);
var vs__13721 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13722 = ks__13720;

if(cljs.core.truth_(and__3546__auto____13722))
{return vs__13721;
} else
{return and__3546__auto____13722;
}
})()))
{{
var G__13730 = cljs.core.assoc.call(null,map__13717,cljs.core.first.call(null,ks__13720),cljs.core.first.call(null,vs__13721));
var G__13731 = cljs.core.next.call(null,ks__13720);
var G__13732 = cljs.core.next.call(null,vs__13721);
map__13717 = G__13730;
ks__13720 = G__13731;
vs__13721 = G__13732;
continue;
}
} else
{return map__13717;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__13749 = (function (k,x){
return x;
});
var max_key__13750 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13751 = (function() { 
var G__13757__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13714_SHARP_,p2__13715_SHARP_){
return max_key.call(null,k,p1__13714_SHARP_,p2__13715_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13757 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13757__delegate.call(this, k, x, y, more);
};
G__13757.cljs$lang$maxFixedArity = 3;
G__13757.cljs$lang$applyTo = (function (arglist__13762){
var k = cljs.core.first(arglist__13762);
var x = cljs.core.first(cljs.core.next(arglist__13762));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13762)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13762)));
return G__13757__delegate.call(this, k, x, y, more);
});
return G__13757;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13749.call(this,k,x);
case  3 :
return max_key__13750.call(this,k,x,y);
default:
return max_key__13751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13751.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13774 = (function (k,x){
return x;
});
var min_key__13775 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13777 = (function() { 
var G__13780__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13738_SHARP_,p2__13739_SHARP_){
return min_key.call(null,k,p1__13738_SHARP_,p2__13739_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13780 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13780__delegate.call(this, k, x, y, more);
};
G__13780.cljs$lang$maxFixedArity = 3;
G__13780.cljs$lang$applyTo = (function (arglist__13782){
var k = cljs.core.first(arglist__13782);
var x = cljs.core.first(cljs.core.next(arglist__13782));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13782)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13782)));
return G__13780__delegate.call(this, k, x, y, more);
});
return G__13780;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13774.call(this,k,x);
case  3 :
return min_key__13775.call(this,k,x,y);
default:
return min_key__13777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13777.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13796 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13797 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13794 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13794))
{var s__13795 = temp__3698__auto____13794;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13795),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13795)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13796.call(this,n,step);
case  3 :
return partition_all__13797.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13815 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13815))
{var s__13818 = temp__3698__auto____13815;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13818))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13818),take_while.call(null,pred,cljs.core.rest.call(null,s__13818)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__13838 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13839 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13914 = null;
var G__13914__13915 = (function (rng,f){
var this__13840 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13914__13916 = (function (rng,f,s){
var this__13842 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13914 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13914__13915.call(this,rng,f);
case  3 :
return G__13914__13916.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13914;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13843 = this;
var comp__13844 = (cljs.core.truth_((this__13843.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13844.call(null,this__13843.start,this__13843.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13845 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13845.end - this__13845.start) / this__13845.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13847 = this;
return this__13847.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13851 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13851.meta,(this__13851.start + this__13851.step),this__13851.end,this__13851.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13855 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13862 = this;
return (new cljs.core.Range(meta,this__13862.start,this__13862.end,this__13862.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13868 = this;
return this__13868.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13925 = null;
var G__13925__13926 = (function (rng,n){
var this__13871 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13871.start + (n * this__13871.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13875 = (this__13871.start > this__13871.end);

if(cljs.core.truth_(and__3546__auto____13875))
{return cljs.core._EQ_.call(null,this__13871.step,0);
} else
{return and__3546__auto____13875;
}
})()))
{return this__13871.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13925__13927 = (function (rng,n,not_found){
var this__13877 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13877.start + (n * this__13877.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13879 = (this__13877.start > this__13877.end);

if(cljs.core.truth_(and__3546__auto____13879))
{return cljs.core._EQ_.call(null,this__13877.step,0);
} else
{return and__3546__auto____13879;
}
})()))
{return this__13877.start;
} else
{return not_found;
}
}
});
G__13925 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13925__13926.call(this,rng,n);
case  3 :
return G__13925__13927.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13925;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13881 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13881.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13990 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13992 = (function (end){
return range.call(null,0,end,1);
});
var range__13993 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13995 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13990.call(this);
case  1 :
return range__13992.call(this,start);
case  2 :
return range__13993.call(this,start,end);
case  3 :
return range__13995.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14027 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14027))
{var s__14028 = temp__3698__auto____14027;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14028),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14028)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14051 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14051))
{var s__14053 = temp__3698__auto____14051;

var fst__14055 = cljs.core.first.call(null,s__14053);
var fv__14056 = f.call(null,fst__14055);
var run__14058 = cljs.core.cons.call(null,fst__14055,cljs.core.take_while.call(null,(function (p1__14032_SHARP_){
return cljs.core._EQ_.call(null,fv__14056,f.call(null,p1__14032_SHARP_));
}),cljs.core.next.call(null,s__14053)));

return cljs.core.cons.call(null,run__14058,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14058),s__14053))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__14100 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14093 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14093))
{var s__14094 = temp__3695__auto____14093;

return reductions.call(null,f,cljs.core.first.call(null,s__14094),cljs.core.rest.call(null,s__14094));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14101 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14095 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14095))
{var s__14096 = temp__3698__auto____14095;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14096)),cljs.core.rest.call(null,s__14096));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14100.call(this,f,init);
case  3 :
return reductions__14101.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__14156 = (function (f){
return (function() {
var G__14161 = null;
var G__14161__14162 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14161__14163 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14161__14164 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14161__14165 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14161__14166 = (function() { 
var G__14175__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14175 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14175__delegate.call(this, x, y, z, args);
};
G__14175.cljs$lang$maxFixedArity = 3;
G__14175.cljs$lang$applyTo = (function (arglist__14177){
var x = cljs.core.first(arglist__14177);
var y = cljs.core.first(cljs.core.next(arglist__14177));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14177)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14177)));
return G__14175__delegate.call(this, x, y, z, args);
});
return G__14175;
})()
;
G__14161 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14161__14162.call(this);
case  1 :
return G__14161__14163.call(this,x);
case  2 :
return G__14161__14164.call(this,x,y);
case  3 :
return G__14161__14165.call(this,x,y,z);
default:
return G__14161__14166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14161.cljs$lang$maxFixedArity = 3;
G__14161.cljs$lang$applyTo = G__14161__14166.cljs$lang$applyTo;
return G__14161;
})()
});
var juxt__14157 = (function (f,g){
return (function() {
var G__14180 = null;
var G__14180__14181 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14180__14182 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14180__14183 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14180__14184 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14180__14185 = (function() { 
var G__14196__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14196 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14196__delegate.call(this, x, y, z, args);
};
G__14196.cljs$lang$maxFixedArity = 3;
G__14196.cljs$lang$applyTo = (function (arglist__14197){
var x = cljs.core.first(arglist__14197);
var y = cljs.core.first(cljs.core.next(arglist__14197));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14197)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14197)));
return G__14196__delegate.call(this, x, y, z, args);
});
return G__14196;
})()
;
G__14180 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14180__14181.call(this);
case  1 :
return G__14180__14182.call(this,x);
case  2 :
return G__14180__14183.call(this,x,y);
case  3 :
return G__14180__14184.call(this,x,y,z);
default:
return G__14180__14185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14180.cljs$lang$maxFixedArity = 3;
G__14180.cljs$lang$applyTo = G__14180__14185.cljs$lang$applyTo;
return G__14180;
})()
});
var juxt__14158 = (function (f,g,h){
return (function() {
var G__14199 = null;
var G__14199__14202 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14199__14203 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14199__14204 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14199__14205 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14199__14206 = (function() { 
var G__14209__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14209 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14209__delegate.call(this, x, y, z, args);
};
G__14209.cljs$lang$maxFixedArity = 3;
G__14209.cljs$lang$applyTo = (function (arglist__14210){
var x = cljs.core.first(arglist__14210);
var y = cljs.core.first(cljs.core.next(arglist__14210));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14210)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14210)));
return G__14209__delegate.call(this, x, y, z, args);
});
return G__14209;
})()
;
G__14199 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14199__14202.call(this);
case  1 :
return G__14199__14203.call(this,x);
case  2 :
return G__14199__14204.call(this,x,y);
case  3 :
return G__14199__14205.call(this,x,y,z);
default:
return G__14199__14206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14199.cljs$lang$maxFixedArity = 3;
G__14199.cljs$lang$applyTo = G__14199__14206.cljs$lang$applyTo;
return G__14199;
})()
});
var juxt__14159 = (function() { 
var G__14215__delegate = function (f,g,h,fs){
var fs__14139 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14217 = null;
var G__14217__14218 = (function (){
return cljs.core.reduce.call(null,(function (p1__14074_SHARP_,p2__14075_SHARP_){
return cljs.core.conj.call(null,p1__14074_SHARP_,p2__14075_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14139);
});
var G__14217__14219 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14077_SHARP_,p2__14078_SHARP_){
return cljs.core.conj.call(null,p1__14077_SHARP_,p2__14078_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14139);
});
var G__14217__14220 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14079_SHARP_,p2__14080_SHARP_){
return cljs.core.conj.call(null,p1__14079_SHARP_,p2__14080_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14139);
});
var G__14217__14221 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14081_SHARP_,p2__14082_SHARP_){
return cljs.core.conj.call(null,p1__14081_SHARP_,p2__14082_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14139);
});
var G__14217__14222 = (function() { 
var G__14235__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14083_SHARP_,p2__14084_SHARP_){
return cljs.core.conj.call(null,p1__14083_SHARP_,cljs.core.apply.call(null,p2__14084_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14139);
};
var G__14235 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14235__delegate.call(this, x, y, z, args);
};
G__14235.cljs$lang$maxFixedArity = 3;
G__14235.cljs$lang$applyTo = (function (arglist__14239){
var x = cljs.core.first(arglist__14239);
var y = cljs.core.first(cljs.core.next(arglist__14239));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14239)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14239)));
return G__14235__delegate.call(this, x, y, z, args);
});
return G__14235;
})()
;
G__14217 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14217__14218.call(this);
case  1 :
return G__14217__14219.call(this,x);
case  2 :
return G__14217__14220.call(this,x,y);
case  3 :
return G__14217__14221.call(this,x,y,z);
default:
return G__14217__14222.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14217.cljs$lang$maxFixedArity = 3;
G__14217.cljs$lang$applyTo = G__14217__14222.cljs$lang$applyTo;
return G__14217;
})()
};
var G__14215 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14215__delegate.call(this, f, g, h, fs);
};
G__14215.cljs$lang$maxFixedArity = 3;
G__14215.cljs$lang$applyTo = (function (arglist__14245){
var f = cljs.core.first(arglist__14245);
var g = cljs.core.first(cljs.core.next(arglist__14245));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14245)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14245)));
return G__14215__delegate.call(this, f, g, h, fs);
});
return G__14215;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14156.call(this,f);
case  2 :
return juxt__14157.call(this,f,g);
case  3 :
return juxt__14158.call(this,f,g,h);
default:
return juxt__14159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14159.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__14398 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14403 = cljs.core.next.call(null,coll);
coll = G__14403;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14399 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14393 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14393))
{return (n > 0);
} else
{return and__3546__auto____14393;
}
})()))
{{
var G__14406 = (n - 1);
var G__14407 = cljs.core.next.call(null,coll);
n = G__14406;
coll = G__14407;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__14398.call(this,n);
case  2 :
return dorun__14399.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__14412 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14413 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14412.call(this,n);
case  2 :
return doall__14413.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__14424 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14424),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14424),1)))
{return cljs.core.first.call(null,matches__14424);
} else
{return cljs.core.vec.call(null,matches__14424);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__14433 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14433)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14433),1)))
{return cljs.core.first.call(null,matches__14433);
} else
{return cljs.core.vec.call(null,matches__14433);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14440 = cljs.core.re_find.call(null,re,s);
var match_idx__14441 = s.search(re);
var match_str__14442 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14440))?cljs.core.first.call(null,match_data__14440):match_data__14440);
var post_match__14443 = cljs.core.subs.call(null,s,(match_idx__14441 + cljs.core.count.call(null,match_str__14442)));

if(cljs.core.truth_(match_data__14440))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14440,re_seq.call(null,re,post_match__14443));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14450_SHARP_){
return print_one.call(null,p1__14450_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14465 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14465))
{var and__3546__auto____14472 = (function (){var x__445__auto____14466 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14468 = x__445__auto____14466;

if(cljs.core.truth_(and__3546__auto____14468))
{var and__3546__auto____14470 = x__445__auto____14466.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14470))
{return cljs.core.not.call(null,x__445__auto____14466.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14470;
}
} else
{return and__3546__auto____14468;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14466);
}
})();

if(cljs.core.truth_(and__3546__auto____14472))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14472;
}
} else
{return and__3546__auto____14465;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14473 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14474 = x__445__auto____14473;

if(cljs.core.truth_(and__3546__auto____14474))
{var and__3546__auto____14475 = x__445__auto____14473.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14475))
{return cljs.core.not.call(null,x__445__auto____14473.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14475;
}
} else
{return and__3546__auto____14474;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14473);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__14482 = cljs.core.first.call(null,objs);
var sb__14483 = (new goog.string.StringBuffer());

var G__14484__14487 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14484__14487))
{var obj__14488 = cljs.core.first.call(null,G__14484__14487);
var G__14484__14489 = G__14484__14487;

while(true){
if(cljs.core.truth_((obj__14488 === first_obj__14482)))
{} else
{sb__14483.append(" ");
}
var G__14490__14491 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14488,opts));

if(cljs.core.truth_(G__14490__14491))
{var string__14492 = cljs.core.first.call(null,G__14490__14491);
var G__14490__14493 = G__14490__14491;

while(true){
sb__14483.append(string__14492);
var temp__3698__auto____14495 = cljs.core.next.call(null,G__14490__14493);

if(cljs.core.truth_(temp__3698__auto____14495))
{var G__14490__14496 = temp__3698__auto____14495;

{
var G__14503 = cljs.core.first.call(null,G__14490__14496);
var G__14504 = G__14490__14496;
string__14492 = G__14503;
G__14490__14493 = G__14504;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14497 = cljs.core.next.call(null,G__14484__14489);

if(cljs.core.truth_(temp__3698__auto____14497))
{var G__14484__14499 = temp__3698__auto____14497;

{
var G__14507 = cljs.core.first.call(null,G__14484__14499);
var G__14508 = G__14484__14499;
obj__14488 = G__14507;
G__14484__14489 = G__14508;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14483);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14510 = cljs.core.first.call(null,objs);

var G__14511__14512 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14511__14512))
{var obj__14513 = cljs.core.first.call(null,G__14511__14512);
var G__14511__14514 = G__14511__14512;

while(true){
if(cljs.core.truth_((obj__14513 === first_obj__14510)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14515__14517 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14513,opts));

if(cljs.core.truth_(G__14515__14517))
{var string__14518 = cljs.core.first.call(null,G__14515__14517);
var G__14515__14519 = G__14515__14517;

while(true){
cljs.core.string_print.call(null,string__14518);
var temp__3698__auto____14520 = cljs.core.next.call(null,G__14515__14519);

if(cljs.core.truth_(temp__3698__auto____14520))
{var G__14515__14521 = temp__3698__auto____14520;

{
var G__14525 = cljs.core.first.call(null,G__14515__14521);
var G__14526 = G__14515__14521;
string__14518 = G__14525;
G__14515__14519 = G__14526;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14522 = cljs.core.next.call(null,G__14511__14514);

if(cljs.core.truth_(temp__3698__auto____14522))
{var G__14511__14523 = temp__3698__auto____14522;

{
var G__14528 = cljs.core.first.call(null,G__14511__14523);
var G__14529 = G__14511__14523;
obj__14513 = G__14528;
G__14511__14514 = G__14529;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__14560){
var objs = cljs.core.seq( arglist__14560 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__14580){
var objs = cljs.core.seq( arglist__14580 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__14586){
var objs = cljs.core.seq( arglist__14586 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__14598){
var objs = cljs.core.seq( arglist__14598 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__14606){
var objs = cljs.core.seq( arglist__14606 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14609 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14609,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14633 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14633))
{var nspc__14634 = temp__3698__auto____14633;

return cljs.core.str.call(null,nspc__14634,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14638 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14638))
{var nspc__14639 = temp__3698__auto____14638;

return cljs.core.str.call(null,nspc__14639,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14687 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14687,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__14711 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14712 = this;
var G__14713__14714 = cljs.core.seq.call(null,this__14712.watches);

if(cljs.core.truth_(G__14713__14714))
{var G__14716__14721 = cljs.core.first.call(null,G__14713__14714);
var vec__14718__14722 = G__14716__14721;
var key__14723 = cljs.core.nth.call(null,vec__14718__14722,0,null);
var f__14725 = cljs.core.nth.call(null,vec__14718__14722,1,null);
var G__14713__14726 = G__14713__14714;

var G__14716__14727 = G__14716__14721;
var G__14713__14728 = G__14713__14726;

while(true){
var vec__14729__14730 = G__14716__14727;
var key__14731 = cljs.core.nth.call(null,vec__14729__14730,0,null);
var f__14732 = cljs.core.nth.call(null,vec__14729__14730,1,null);
var G__14713__14733 = G__14713__14728;

f__14732.call(null,key__14731,this$,oldval,newval);
var temp__3698__auto____14734 = cljs.core.next.call(null,G__14713__14733);

if(cljs.core.truth_(temp__3698__auto____14734))
{var G__14713__14736 = temp__3698__auto____14734;

{
var G__14757 = cljs.core.first.call(null,G__14713__14736);
var G__14758 = G__14713__14736;
G__14716__14727 = G__14757;
G__14713__14728 = G__14758;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__14740 = this;
return this$.watches = cljs.core.assoc.call(null,this__14740.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14742 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14742.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14745 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14745.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14750 = this;
return this__14750.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14752 = this;
return this__14752.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14753 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__14774 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14775 = (function() { 
var G__14777__delegate = function (x,p__14766){
var map__14767__14769 = p__14766;
var map__14767__14770 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14767__14769))?cljs.core.apply.call(null,cljs.core.hash_map,map__14767__14769):map__14767__14769);
var validator__14771 = cljs.core.get.call(null,map__14767__14770,"﷐'validator");
var meta__14773 = cljs.core.get.call(null,map__14767__14770,"﷐'meta");

return (new cljs.core.Atom(x,meta__14773,validator__14771,null));
};
var G__14777 = function (x,var_args){
var p__14766 = null;
if (goog.isDef(var_args)) {
  p__14766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14777__delegate.call(this, x, p__14766);
};
G__14777.cljs$lang$maxFixedArity = 1;
G__14777.cljs$lang$applyTo = (function (arglist__14779){
var x = cljs.core.first(arglist__14779);
var p__14766 = cljs.core.rest(arglist__14779);
return G__14777__delegate.call(this, x, p__14766);
});
return G__14777;
})()
;
atom = function(x,var_args){
var p__14766 = var_args;
switch(arguments.length){
case  1 :
return atom__14774.call(this,x);
default:
return atom__14775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14775.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14785 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14785))
{var validate__14786 = temp__3698__auto____14785;

if(cljs.core.truth_(validate__14786.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14789 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14789,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___14796 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14798 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14799 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14800 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14801 = (function() { 
var G__14807__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14807 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14807__delegate.call(this, a, f, x, y, z, more);
};
G__14807.cljs$lang$maxFixedArity = 5;
G__14807.cljs$lang$applyTo = (function (arglist__14810){
var a = cljs.core.first(arglist__14810);
var f = cljs.core.first(cljs.core.next(arglist__14810));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14810)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14810))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14810)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14810)))));
return G__14807__delegate.call(this, a, f, x, y, z, more);
});
return G__14807;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14796.call(this,a,f);
case  3 :
return swap_BANG___14798.call(this,a,f,x);
case  4 :
return swap_BANG___14799.call(this,a,f,x,y);
case  5 :
return swap_BANG___14800.call(this,a,f,x,y,z);
default:
return swap_BANG___14801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14801.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14899){
var iref = cljs.core.first(arglist__14899);
var f = cljs.core.first(cljs.core.next(arglist__14899));
var args = cljs.core.rest(cljs.core.next(arglist__14899));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__14904 = (function (){
return gensym.call(null,"G__");
});
var gensym__14905 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14904.call(this);
case  1 :
return gensym__14905.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__14939 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14939.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14940 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14940.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14940.state,this__14940.f);
}
return cljs.core.deref.call(null,this__14940.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__14980){
var body = cljs.core.seq( arglist__14980 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__14990__14992 = options;
var map__14990__14994 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14990__14992))?cljs.core.apply.call(null,cljs.core.hash_map,map__14990__14992):map__14990__14992);
var keywordize_keys__14995 = cljs.core.get.call(null,map__14990__14994,"﷐'keywordize-keys");
var keyfn__14996 = (cljs.core.truth_(keywordize_keys__14995)?cljs.core.keyword:cljs.core.str);
var f__15013 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15011 = (function iter__15000(s__15001){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15001__15007 = s__15001;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15001__15007)))
{var k__15009 = cljs.core.first.call(null,s__15001__15007);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14996.call(null,k__15009),thisfn.call(null,(x[k__15009]))]),iter__15000.call(null,cljs.core.rest.call(null,s__15001__15007)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15011.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__15013.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15035){
var x = cljs.core.first(arglist__15035);
var options = cljs.core.rest(arglist__15035);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__15040 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15047__delegate = function (args){
var temp__3695__auto____15041 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15040),args);

if(cljs.core.truth_(temp__3695__auto____15041))
{var v__15042 = temp__3695__auto____15041;

return v__15042;
} else
{var ret__15043 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15040,cljs.core.assoc,args,ret__15043);
return ret__15043;
}
};
var G__15047 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15047__delegate.call(this, args);
};
G__15047.cljs$lang$maxFixedArity = 0;
G__15047.cljs$lang$applyTo = (function (arglist__15048){
var args = cljs.core.seq( arglist__15048 );;
return G__15047__delegate.call(this, args);
});
return G__15047;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__15059 = (function (f){
while(true){
var ret__15052 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15052)))
{{
var G__15064 = ret__15052;
f = G__15064;
continue;
}
} else
{return ret__15052;
}
break;
}
});
var trampoline__15061 = (function() { 
var G__15066__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15066 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15066__delegate.call(this, f, args);
};
G__15066.cljs$lang$maxFixedArity = 1;
G__15066.cljs$lang$applyTo = (function (arglist__15067){
var f = cljs.core.first(arglist__15067);
var args = cljs.core.rest(arglist__15067);
return G__15066__delegate.call(this, f, args);
});
return G__15066;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15059.call(this,f);
default:
return trampoline__15061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15061.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15073 = (function (){
return rand.call(null,1);
});
var rand__15074 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15073.call(this);
case  1 :
return rand__15074.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__15096 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15096,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15096,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___15126 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15127 = (function (h,child,parent){
var or__3548__auto____15101 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15101))
{return or__3548__auto____15101;
} else
{var or__3548__auto____15104 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15104))
{return or__3548__auto____15104;
} else
{var and__3546__auto____15109 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15109))
{var and__3546__auto____15110 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15110))
{var and__3546__auto____15117 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15117))
{var ret__15120 = true;
var i__15121 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15122 = cljs.core.not.call(null,ret__15120);

if(cljs.core.truth_(or__3548__auto____15122))
{return or__3548__auto____15122;
} else
{return cljs.core._EQ_.call(null,i__15121,cljs.core.count.call(null,parent));
}
})()))
{return ret__15120;
} else
{{
var G__15134 = isa_QMARK_.call(null,h,child.call(null,i__15121),parent.call(null,i__15121));
var G__15135 = (i__15121 + 1);
ret__15120 = G__15134;
i__15121 = G__15135;
continue;
}
}
break;
}
} else
{return and__3546__auto____15117;
}
} else
{return and__3546__auto____15110;
}
} else
{return and__3546__auto____15109;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15126.call(this,h,child);
case  3 :
return isa_QMARK___15127.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__15136 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15137 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15136.call(this,h);
case  2 :
return parents__15137.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__15146 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15147 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15146.call(this,h);
case  2 :
return ancestors__15147.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__15156 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15157 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15156.call(this,h);
case  2 :
return descendants__15157.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__15219 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15220 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15203 = "﷐'parents".call(null,h);
var td__15204 = "﷐'descendants".call(null,h);
var ta__15205 = "﷐'ancestors".call(null,h);
var tf__15211 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15214 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15203.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15205.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15205.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15203,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15211.call(null,"﷐'ancestors".call(null,h),tag,td__15204,parent,ta__15205),"﷐'descendants":tf__15211.call(null,"﷐'descendants".call(null,h),parent,ta__15205,tag,td__15204)});
})());

if(cljs.core.truth_(or__3548__auto____15214))
{return or__3548__auto____15214;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15219.call(this,h,tag);
case  3 :
return derive__15220.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__15245 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15246 = (function (h,tag,parent){
var parentMap__15237 = "﷐'parents".call(null,h);
var childsParents__15238 = (cljs.core.truth_(parentMap__15237.call(null,tag))?cljs.core.disj.call(null,parentMap__15237.call(null,tag),parent):cljs.core.set([]));
var newParents__15240 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15238))?cljs.core.assoc.call(null,parentMap__15237,tag,childsParents__15238):cljs.core.dissoc.call(null,parentMap__15237,tag));
var deriv_seq__15242 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15160_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15160_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15160_SHARP_),cljs.core.second.call(null,p1__15160_SHARP_)));
}),cljs.core.seq.call(null,newParents__15240)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15237.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15161_SHARP_,p2__15162_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15161_SHARP_,p2__15162_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15242));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15245.call(this,h,tag);
case  3 :
return underive__15246.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__15261 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15266 = (cljs.core.truth_((function (){var and__3546__auto____15264 = xprefs__15261;

if(cljs.core.truth_(and__3546__auto____15264))
{return xprefs__15261.call(null,y);
} else
{return and__3546__auto____15264;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15266))
{return or__3548__auto____15266;
} else
{var or__3548__auto____15270 = (function (){var ps__15267 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15267) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15267),prefer_table)))
{} else
{}
{
var G__15279 = cljs.core.rest.call(null,ps__15267);
ps__15267 = G__15279;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15270))
{return or__3548__auto____15270;
} else
{var or__3548__auto____15274 = (function (){var ps__15273 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15273) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15273),y,prefer_table)))
{} else
{}
{
var G__15282 = cljs.core.rest.call(null,ps__15273);
ps__15273 = G__15282;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15274))
{return or__3548__auto____15274;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15351 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15351))
{return or__3548__auto____15351;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15366 = cljs.core.reduce.call(null,(function (be,p__15355){
var vec__15356__15358 = p__15355;
var k__15359 = cljs.core.nth.call(null,vec__15356__15358,0,null);
var ___15360 = cljs.core.nth.call(null,vec__15356__15358,1,null);
var e__15361 = vec__15356__15358;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15359)))
{var be2__15365 = (cljs.core.truth_((function (){var or__3548__auto____15363 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15363))
{return or__3548__auto____15363;
} else
{return cljs.core.dominates.call(null,k__15359,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15361:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15365),k__15359,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15359," and ",cljs.core.first.call(null,be2__15365),", and neither is preferred")));
}
return be2__15365;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15366))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15366));
return cljs.core.second.call(null,best_entry__15366);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15376 = mf;

if(cljs.core.truth_(and__3546__auto____15376))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15376;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15378 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15378))
{return or__3548__auto____15378;
} else
{var or__3548__auto____15380 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15380))
{return or__3548__auto____15380;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15382 = mf;

if(cljs.core.truth_(and__3546__auto____15382))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15382;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15385 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15385))
{return or__3548__auto____15385;
} else
{var or__3548__auto____15387 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15387))
{return or__3548__auto____15387;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15388 = mf;

if(cljs.core.truth_(and__3546__auto____15388))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15388;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15389 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15389))
{return or__3548__auto____15389;
} else
{var or__3548__auto____15390 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15390))
{return or__3548__auto____15390;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15391 = mf;

if(cljs.core.truth_(and__3546__auto____15391))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15391;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15392 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15392))
{return or__3548__auto____15392;
} else
{var or__3548__auto____15393 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15393))
{return or__3548__auto____15393;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15394 = mf;

if(cljs.core.truth_(and__3546__auto____15394))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15394;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15395 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15395))
{return or__3548__auto____15395;
} else
{var or__3548__auto____15396 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15396))
{return or__3548__auto____15396;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15397 = mf;

if(cljs.core.truth_(and__3546__auto____15397))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15397;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15398 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15398))
{return or__3548__auto____15398;
} else
{var or__3548__auto____15399 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15399))
{return or__3548__auto____15399;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15400 = mf;

if(cljs.core.truth_(and__3546__auto____15400))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15400;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15401 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{var or__3548__auto____15402 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15402))
{return or__3548__auto____15402;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15403 = mf;

if(cljs.core.truth_(and__3546__auto____15403))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15403;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15404 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15404))
{return or__3548__auto____15404;
} else
{var or__3548__auto____15405 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15405))
{return or__3548__auto____15405;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15458 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15459 = cljs.core._get_method.call(null,mf,dispatch_val__15458);

if(cljs.core.truth_(target_fn__15459))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15458)));
}
return cljs.core.apply.call(null,target_fn__15459,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__15507 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15509 = this;
cljs.core.swap_BANG_.call(null,this__15509.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15509.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15509.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15509.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15511 = this;
cljs.core.swap_BANG_.call(null,this__15511.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15511.method_cache,this__15511.method_table,this__15511.cached_hierarchy,this__15511.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15581 = this;
cljs.core.swap_BANG_.call(null,this__15581.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15581.method_cache,this__15581.method_table,this__15581.cached_hierarchy,this__15581.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15582 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15582.cached_hierarchy),cljs.core.deref.call(null,this__15582.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15582.method_cache,this__15582.method_table,this__15582.cached_hierarchy,this__15582.hierarchy);
}
var temp__3695__auto____15585 = cljs.core.deref.call(null,this__15582.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15585))
{var target_fn__15586 = temp__3695__auto____15585;

return target_fn__15586;
} else
{var temp__3695__auto____15587 = cljs.core.find_and_cache_best_method.call(null,this__15582.name,dispatch_val,this__15582.hierarchy,this__15582.method_table,this__15582.prefer_table,this__15582.method_cache,this__15582.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15587))
{var target_fn__15588 = temp__3695__auto____15587;

return target_fn__15588;
} else
{return cljs.core.deref.call(null,this__15582.method_table).call(null,this__15582.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15592 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15592.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15592.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15592.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15592.method_cache,this__15592.method_table,this__15592.cached_hierarchy,this__15592.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15595 = this;
return cljs.core.deref.call(null,this__15595.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15597 = this;
return cljs.core.deref.call(null,this__15597.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15598 = this;
return cljs.core.do_dispatch.call(null,mf,this__15598.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15618__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15618 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15618__delegate.call(this, _, args);
};
G__15618.cljs$lang$maxFixedArity = 1;
G__15618.cljs$lang$applyTo = (function (arglist__15620){
var _ = cljs.core.first(arglist__15620);
var args = cljs.core.rest(arglist__15620);
return G__15618__delegate.call(this, _, args);
});
return G__15618;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

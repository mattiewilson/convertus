(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_", frames: [[862,0,111,48],[730,0,130,62],[862,50,88,50],[0,0,728,90],[730,102,142,29],[730,64,105,22],[0,92,728,90]]}
];


// symbols:



(lib._2016ChevroletCruze = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2016NissanRogue = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2016ToyotaCorolla = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CTARectangle = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.MyersAutomotiveGroupLogoColor = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Rectangle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqdDIQgRAAgLgMQgMgLAAgRIAAlnIWLAAIAAFnQAAARgMALQgLAMgRAAg");
	mask.setTransform(71,20);

	// Layer_1
	this.instance = new lib.Rectangle();
	this.instance.parent = this;
	this.instance.setTransform(-582,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rectangle_1, new cjs.Rectangle(0,0,142,40), null);


(lib.MyersAutomotiveGroupLogoColor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.MyersAutomotiveGroupLogoColor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.MyersAutomotiveGroupLogoColor_1, new cjs.Rectangle(0,0,105,22), null);


(lib.CTARectangle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CTA Rectangle
	this.instance = new lib.CTARectangle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTARectangle_1, new cjs.Rectangle(0,0,142,29), null);


(lib.Background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background_1, new cjs.Rectangle(0,0,728,90), null);


(lib._2016ToyotaCorolla_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2016ToyotaCorolla();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2016ToyotaCorolla_1, new cjs.Rectangle(0,0,88,50), null);


(lib._2016NissanRogue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2016NissanRogue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2016NissanRogue_1, new cjs.Rectangle(0,0,130,62), null);


(lib._2016ChevroletCruze_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2016ChevroletCruze();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2016ChevroletCruze_1, new cjs.Rectangle(0,0,111,48), null);


(lib._2016Vehicles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// 2016 Nissan Rogue
	this.instance = new lib._2016NissanRogue_1();
	this.instance.parent = this;
	this.instance.setTransform(263,36,1,1,0,0,0,65,31);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:183,y:56,alpha:1},18,cjs.Ease.quadOut).wait(1));

	// 2016 Chevrolet Cruze
	this.instance_1 = new lib._2016ChevroletCruze_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(185.5,26,1,1,0,0,0,55.5,24);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:105.5,y:46,alpha:1},18,cjs.Ease.quadOut).wait(11));

	// 2016 Toyota Corolla
	this.instance_2 = new lib._2016ToyotaCorolla_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193,30,1,1,0,0,0,44,25);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:273,y:50,alpha:1},18,cjs.Ease.quadOut).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,5,88,50);


// stage content:
(lib._17_10_MyersAutoGroup_AdWords_Used_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_449 = function() {
		if (!this.loop) this.loop = 1;
		if (this.loop++ == 2) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(449).call(this.frame_449).wait(1));

	// 52-Point Inspection
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D41F38").s().p("AALA2IgahLIAABLIgTAAIAAhqIAZAAIAYBIIABAAIAAhIIAUAAIAABqg");
	this.shape.setTransform(478.1,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_1.setTransform(469.7,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_2.setTransform(463.6,51.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D41F38").s().p("AgKA2IAAhZIgXAAIAAgRIBDAAIAAARIgXAAIAABZg");
	this.shape_3.setTransform(458.1,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D41F38").s().p("AgRAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQALAAAIADQAGAEAEAGQACAGABAGIABANIgVAAQgBgMgCgFQgDgGgHAAQgDAAgDADQgCACgCAFIgCAMIAAATIAAATIACAMQACAEADACIAFABIAFgBQADgBACgDQACgDABgFIAAgOIAWAAIgBAQQgCAIgDAGQgEAGgGADQgHADgLAAQgLAAgHgEg");
	this.shape_4.setTransform(450.5,51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D41F38").s().p("AgeA2IAAhqIA7AAIAAARIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_5.setTransform(443,51.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D41F38").s().p("AghA2IAAhqIAlAAQAJgBAFADQAGADADAFQADAEACAGIACALQAAAJgDAGQgCAGgEADQgFAEgHACQgGABgHABIgLAAIAAArgAgLgEIAKAAQAFAAAEgEQAEgEAAgIQAAgJgDgDQgEgEgHAAIgJAAg");
	this.shape_6.setTransform(435.6,51.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D41F38").s().p("AgbAvQgIgIABgOIAAgFIAVAAIAAADIAAAHQABADACACQABADADABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgFgDQgGgDgDgCQgEgEgBgFQgCgFAAgHQAAgQAJgIQAIgHAQAAQAGAAAGABQAHACADADQAFAEADAFQACAGAAAHIAAADIgUAAQAAgHgDgEQgDgFgGAAIgFABIgEADIgCAEIgBAFQAAAFACADQADAEAGACIAQAIQAGACAEACIAGAHIADAHIACAJQAAARgLAIQgJAHgRAAQgSAAgIgIg");
	this.shape_7.setTransform(427.6,51);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D41F38").s().p("AALA2IgZhLIAABLIgUAAIAAhqIAYAAIAZBIIABAAIAAhIIATAAIAABqg");
	this.shape_8.setTransform(419.4,51.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_9.setTransform(413.2,51.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D41F38").s().p("AgKA2IAAhZIgXAAIAAgRIBDAAIAAARIgXAAIAABZg");
	this.shape_10.setTransform(404.1,51.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D41F38").s().p("AALA2IgahLIAABLIgUAAIAAhqIAaAAIAZBIIAAAAIAAhIIATAAIAABqg");
	this.shape_11.setTransform(396.2,51.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_12.setTransform(389.9,51.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_13.setTransform(383.9,51);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D41F38").s().p("AghA2IAAhqIAlAAQAJgBAFADQAGADAEAFQADAEABAGIACALQAAAJgDAGQgCAGgEADQgFAEgHACQgGABgHABIgLAAIAAArgAgLgEIAKAAQAFAAAEgEQAEgEAAgIQAAgJgDgDQgEgEgHAAIgJAAg");
	this.shape_14.setTransform(376.1,51.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D41F38").s().p("AgUAJIAAgRIApAAIAAARg");
	this.shape_15.setTransform(369.2,52.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D41F38").s().p("AggA1QAAgHACgGQABgHADgFQADgGAFgFIAKgKIAIgIIAFgGIAEgFIABgGIABgHQAAgNgLAAQgDAAgCABQgDACgBADQgBADAAADIgBAIIgVAAIAAgDQAAgQAIgHQAIgIAQAAQARAAAHAHQAIAIAAAOIgBAKIgDAIQgBAEgEACIgHAIIgMAMQgEAEgDAEIgDAHIAnAAIAAARg");
	this.shape_16.setTransform(362.7,51.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D41F38").s().p("AgQAyQgHgCgDgFQgDgEgBgGIgCgJIAAgDIAVAAIAAAGIACAFIADAFQACABAEAAQAFAAADgFQADgFAAgKIAAgLQgBgFgBgCQgCgCgCgBIgFgBQgFAAgCADQgDABAAAFIgUAAIAEg5IA2AAIAAARIgmAAIgCAYQADgEAFgCQAEgCAHAAQAIAAAFADQAFADADAFIAEAKIABAMQAAAJgCAHQgBAHgEAFQgEAGgGACQgHADgJAAQgKAAgGgDg");
	this.shape_17.setTransform(355.5,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},75).wait(375));

	// Carproof Report
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D41F38").s().p("AgKA2IAAhZIgXAAIAAgRIBDAAIAAARIgXAAIAABZg");
	this.shape_18.setTransform(463,51.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_19.setTransform(455.7,51.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_20.setTransform(447.2,51);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D41F38").s().p("AghA2IAAhqIAlAAQAJgBAFADQAGADAEAFQADAEABAGIABALQAAAJgCAGQgDAGgEADQgEAEgHACQgGABgHABIgLAAIAAArgAgLgEIAJAAQAGAAAEgEQAEgEAAgIQAAgJgDgDQgEgEgHAAIgJAAg");
	this.shape_21.setTransform(439.4,51.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D41F38").s().p("AgeA2IAAhqIA7AAIAAARIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_22.setTransform(431.9,51.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_23.setTransform(424.2,51.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D41F38").s().p("AgdA2IAAhqIA7AAIAAARIgmAAIAAAaIAjAAIAAAQIgjAAIAAAvg");
	this.shape_24.setTransform(413.1,51.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_25.setTransform(405.2,51);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_26.setTransform(396.9,51);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_27.setTransform(388.8,51.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D41F38").s().p("AghA2IAAhqIAmAAQAHgBAGADQAGADADAFQADAEACAGIACALQgBAJgCAGQgCAGgEADQgFAEgGACQgGABgIABIgLAAIAAArgAgLgEIAKAAQAFAAAEgEQAEgEAAgIQAAgJgDgDQgEgEgHAAIgJAAg");
	this.shape_28.setTransform(380.8,51.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_29.setTransform(372.7,51.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_30.setTransform(364.2,51.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D41F38").s().p("AgRAzQgHgDgEgIQgEgHgBgKIgBgXIABgVQABgLAEgHQAEgHAHgEQAHgEALAAQALAAAIADQAGAEAEAGQACAGABAGIABANIgWAAQAAgMgCgFQgDgGgHAAQgDAAgDADQgDACgBAFIgCAMIgBATIABATIACAMQADAEACACIAFABIAFgBQADgBACgDQACgDAAgFIABgOIAWAAIgBAQQgBAIgEAGQgEAGgGADQgHADgLAAQgLAAgHgEg");
	this.shape_31.setTransform(356.1,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},75).to({state:[]},75).wait(300));

	// Exchange Policy
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D41F38").s().p("AgKA2IAAgqIgbhAIAYAAIANApIAPgpIAYAAIgcBAIAAAqg");
	this.shape_32.setTransform(562.3,51.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D41F38").s().p("AgRAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQALAAAIADQAGAEAEAGQACAGABAGIABANIgVAAQgBgMgCgFQgDgGgHAAQgDAAgDADQgCACgCAFIgCAMIgBATIABATIACAMQACAEADACIAFABIAFgBQADgBACgDQACgDABgFIABgOIAVAAIgBAQQgCAIgDAGQgEAGgGADQgHADgLAAQgLAAgHgEg");
	this.shape_33.setTransform(554.4,51);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_34.setTransform(548.4,51.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D41F38").s().p("AgdA2IAAhqIAWAAIAABYIAlAAIAAASg");
	this.shape_35.setTransform(543.4,51.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_36.setTransform(535.5,51);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D41F38").s().p("AggA2IAAhqIAlAAQAHgBAGADQAGADADAFQAEAEABAGIACALQgBAJgCAGQgDAGgEADQgEAEgGACQgHABgHABIgLAAIAAArgAgLgEIAJAAQAGAAAEgEQAEgEAAgIQAAgJgEgDQgDgEgHAAIgJAAg");
	this.shape_37.setTransform(527.7,51.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D41F38").s().p("AgeA2IAAhqIA7AAIAAARIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_38.setTransform(516.6,51.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D41F38").s().p("AgTA0QgGgEgDgHQgEgHgBgKIgBgYQAAgOABgKQACgKAEgHQAFgHAGgDQAHgDAKAAQARAAAIAIQAIAJAAAQIgVAAIAAgGIgDgFIgDgFQgDgCgDAAQgHAAgDAJQgEAJAAAUIABAQQAAAIACAGQACAFADADQACADAEAAIAEgBIAFgDIADgGQACgDAAgEIAAgLIgPAAIAAgPIAjAAIAAA5IgQAAIAAgKIAAAAQgEAGgFADQgGACgHAAQgJAAgHgDg");
	this.shape_39.setTransform(508.6,51);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D41F38").s().p("AALA2IgZhLIAABLIgUAAIAAhqIAZAAIAYBIIABAAIAAhIIAUAAIAABqg");
	this.shape_40.setTransform(500.2,51.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_41.setTransform(491.7,51.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D41F38").s().p("AANA2IAAgwIgZAAIAAAwIgVAAIAAhqIAVAAIAAAoIAZAAIAAgoIAVAAIAABqg");
	this.shape_42.setTransform(483.4,51.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D41F38").s().p("AgRAzQgHgDgEgIQgEgHgBgKIgBgXIABgVQABgLAEgHQAEgHAHgEQAHgEALAAQAMAAAGADQAHAEADAGQAEAGABAGIABANIgXAAQAAgMgCgFQgDgGgHAAQgDAAgDADQgCACgCAFIgCAMIAAATIAAATIADAMQACAEACACIAFABIAGgBQACgBABgDQACgDABgFIACgOIAVAAIgBAQQgCAIgDAGQgEAGgHADQgGADgLAAQgLAAgHgEg");
	this.shape_43.setTransform(475.3,51);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D41F38").s().p("AAPA2IgPglIgPAlIgXAAIAag2IgYg0IAYAAIAMAiIAOgiIAYAAIgZA0IAaA2g");
	this.shape_44.setTransform(467.2,51.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D41F38").s().p("AgeA2IAAhqIA7AAIAAARIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_45.setTransform(459.8,51.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D41F38").s().p("AAcA2IAAhVIgBAAIgSBVIgRAAIgShVIAABVIgUAAIAAhqIAfAAIAPBKIAQhKIAfAAIAABqg");
	this.shape_46.setTransform(446.8,51.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D41F38").s().p("AAOA2IgWgsIgHALIAAAhIgWAAIAAhqIAWAAIAAArIAAAAIAagrIAXAAIgdAuIAhA8g");
	this.shape_47.setTransform(437.8,51.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D41F38").s().p("AgPAzQgHgCgDgGQgEgGgCgKQgBgKgBgOIABgVQABgKAEgIQADgIAHgEQAGgFALAAQAKAAAGADQAGADAFAGQADAGABAKQACAKABAOIgCAUQAAAKgEAIQgDAIgGAEQgHAFgMAAQgIAAgHgDgAgFglIgDAGIgCALIAAARIAAAKIAAARIACAKQABAEACABQACABADAAQAEAAACgBIAEgGIABgLIAAgRIAAgLIAAgQIgBgKQgCgEgDgBQgBgCgEAAQgCAAgDACg");
	this.shape_48.setTransform(429.6,51.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D41F38").s().p("AgPAzQgHgCgDgGQgEgGgCgKQgBgKgBgOIABgVQABgKAEgIQADgIAHgEQAGgFALAAQAKAAAGADQAGADAFAGQADAGABAKQACAKABAOIgCAUQAAAKgDAIQgEAIgGAEQgHAFgMAAQgIAAgHgDgAgFglIgDAGIgCALIAAARIAAAKIAAARIACAKQABAEACABQACABADAAQAEAAACgBIAEgGIABgLIAAgRIAAgLIAAgQIgBgKQgCgEgDgBQgBgCgEAAQgCAAgDACg");
	this.shape_49.setTransform(422.4,51.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D41F38").s().p("AgQAyQgHgCgDgFQgDgEgBgGIgCgJIAAgDIAVAAIAAAGIACAFIADAFQACABAEAAQAFAAADgFQADgFAAgKIAAgLQgBgFgBgCQgCgCgCgBIgFgBQgFAAgCADQgDABAAAFIgUAAIAEg5IA2AAIAAARIgmAAIgCAYQADgEAFgCQAEgCAHAAQAIAAAFADQAFADADAFIAEAKIABAMQAAAJgCAHQgBAHgEAFQgEAGgGACQgHADgJAAQgKAAgGgDg");
	this.shape_50.setTransform(415.1,51.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D41F38").s().p("AgJANQAEgBACgDQACgEAAgDIAAgCIgIAAIAAgXIATAAIAAATIgBAKIgDAJQgCADgEADQgDACgGABg");
	this.shape_51.setTransform(409.8,56.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D41F38").s().p("AggA1QAAgHACgGQABgHADgFQADgGAFgFIAKgKIAIgIIAFgGIAEgFIABgGIABgHQAAgNgLAAQgDAAgCABQgDACgBADQgBADAAADIgBAIIgVAAIAAgDQAAgQAIgHQAIgIAQAAQARAAAHAHQAIAIAAAOIgBAKIgDAIQgBAEgEACIgHAIIgMAMQgEAEgDAEIgDAHIAnAAIAAARg");
	this.shape_52.setTransform(404.3,51.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D41F38").s().p("AgYA3IAhhtIAQAAIggBtg");
	this.shape_53.setTransform(398.4,51);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D41F38").s().p("AgKA2IAAgqIgchAIAZAAIANApIAPgpIAYAAIgcBAIAAAqg");
	this.shape_54.setTransform(392,51.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_55.setTransform(384.7,51.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D41F38").s().p("AgjA2IAAhqIAjAAQALgBAHAEQAHAEAEAGQADAIACAJQACAJgBANQAAANgBAKQgCALgFAGQgDAHgIADQgHAEgKAAgAgNAmIAKAAQAFAAADgCQADgCACgFQACgFABgGIABgSIgBgQQgBgHgCgEQgBgFgEgCQgEgCgEAAIgKAAg");
	this.shape_56.setTransform(376.4,51.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D41F38").s().p("AgUAJIAAgRIApAAIAAARg");
	this.shape_57.setTransform(369.2,52.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D41F38").s().p("AgPAzQgGgCgEgGQgEgGgCgKQgCgKABgOIAAgVQABgKADgIQAEgIAHgEQAGgFALAAQAKAAAGADQAGADAFAGQADAGABAKQACAKAAAOIgBAUQAAAKgDAIQgEAIgGAEQgHAFgMAAQgJAAgGgDgAgFglIgDAGIgCALIgBARIAAAKIABARIACAKQABAEADABQACABACAAQADAAADgBIAEgGIABgLIABgRIAAgLIgBgQIgBgKQgCgEgDgBQgCgCgDAAQgCAAgDACg");
	this.shape_58.setTransform(362.8,51.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D41F38").s().p("AgYAuQgIgJAAgPIAAgBIAUAAQABAJACAFQACAFAHAAQAEAAABgBQADgBACgDIABgFIABgHIgBgHIgCgFIgFgFIgGgBIgHAAIAAgNIAHAAQADAAACgCQADgBABgCIACgGIABgGQAAgIgDgDQgDgDgEAAIgFABIgEAEIgCAGIAAAGIgUAAQAAgPAIgIQAIgIAPAAQAOAAAIAHQAJAGgBAOQAAAKgEAGQgFAGgHACIAAAAQAKACAFAFQAEAHAAAKIgCALQgBAGgDAFQgFAEgHADQgGADgKAAQgQAAgHgIg");
	this.shape_59.setTransform(355.6,51.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},150).to({state:[]},75).wait(225));

	// Roadside Assistance
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D41F38").s().p("AgeA2IAAhqIA7AAIAAARIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_60.setTransform(521.6,51.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D41F38").s().p("AgRAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQALAAAIADQAGAEAEAGQACAGABAGIABANIgVAAQgBgMgCgFQgDgGgHAAQgDAAgDADQgCACgCAFIgCAMIAAATIAAATIACAMQACAEADACIAFABIAFgBQADgBABgDQADgDABgFIABgOIAVAAIgBAQQgBAIgEAGQgEAGgHADQgGADgLAAQgLAAgHgEg");
	this.shape_61.setTransform(513.8,51);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D41F38").s().p("AALA2IgZhLIAABLIgUAAIAAhqIAYAAIAZBIIABAAIAAhIIAUAAIAABqg");
	this.shape_62.setTransform(505.5,51.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_63.setTransform(497,51.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D41F38").s().p("AgKA2IAAhZIgXAAIAAgRIBDAAIAAARIgXAAIAABZg");
	this.shape_64.setTransform(490.1,51.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D41F38").s().p("AgbAvQgIgIAAgOIAAgFIAWAAIAAADIABAHQAAADACACQACADACABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgGgDQgFgDgEgCQgDgEgBgFQgCgFAAgHQAAgQAIgIQAKgHAPAAQAGAAAGABQAGACAFADQAEAEADAFQACAGAAAHIAAADIgUAAQgBgHgDgEQgCgFgGAAIgFABIgEADIgCAEIAAAFQAAAFABADQADAEAGACIAQAIQAGACAEACIAHAHIACAHIABAJQABARgLAIQgJAHgRAAQgSAAgIgIg");
	this.shape_65.setTransform(482.7,51);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_66.setTransform(476.8,51.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D41F38").s().p("AgbAvQgIgIAAgOIAAgFIAWAAIAAADIABAHQAAADACACQACADACABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgGgDQgFgDgEgCQgDgEgBgFQgCgFAAgHQAAgQAJgIQAIgHAQAAQAGAAAGABQAHACAEADQAEAEADAFQACAGAAAHIAAADIgUAAQAAgHgEgEQgCgFgGAAIgFABIgEADIgCAEIgBAFQABAFABADQADAEAGACIAQAIQAGACAEACIAHAHIACAHIABAJQAAARgKAIQgJAHgRAAQgSAAgIgIg");
	this.shape_67.setTransform(471.1,51);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D41F38").s().p("AgbAvQgIgIAAgOIAAgFIAWAAIAAADIABAHQAAADACACQACADACABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgGgDQgFgDgEgCQgDgEgBgFQgCgFAAgHQAAgQAIgIQAJgHAQAAQAGAAAGABQAGACAFADQAEAEADAFQACAGAAAHIAAADIgUAAQgBgHgDgEQgCgFgGAAIgFABIgEADIgCAEIAAAFQAAAFABADQADAEAGACIAQAIQAGACAEACIAHAHIACAHIABAJQABARgLAIQgJAHgRAAQgSAAgIgIg");
	this.shape_68.setTransform(463.3,51);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_69.setTransform(455.3,51.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D41F38").s().p("AgeA2IAAhqIA7AAIAAARIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_70.setTransform(444.1,51.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D41F38").s().p("AgjA2IAAhqIAjAAQALgBAHAEQAHAEAEAGQADAIACAJQABAJAAANQABANgCAKQgCALgFAGQgEAHgGADQgIAEgJAAgAgNAmIAKAAQAFAAADgCQADgCACgFQACgFABgGIABgSIgBgQQgBgHgCgEQgBgFgEgCQgDgCgFAAIgKAAg");
	this.shape_71.setTransform(436.1,51.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_72.setTransform(429.8,51.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D41F38").s().p("AgbAvQgIgIABgOIAAgFIAVAAIAAADIAAAHQABADACACQABADADABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgFgDQgGgDgDgCQgEgEgCgFQgBgFAAgHQAAgQAJgIQAIgHAQAAQAGAAAGABQAHACADADQAFAEADAFQACAGAAAHIAAADIgUAAQAAgHgDgEQgDgFgGAAIgFABIgEADIgCAEIgBAFQAAAFACADQADAEAGACIAQAIQAHACADACIAGAHIADAHIACAJQAAARgLAIQgJAHgRAAQgSAAgIgIg");
	this.shape_73.setTransform(424,51);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D41F38").s().p("AgiA2IAAhqIAiAAQALgBAHAEQAHAEAEAGQAEAIABAJQACAJAAANQgBANgCAKQgBALgEAGQgFAHgHADQgGAEgLAAgAgNAmIAKAAQAEAAAEgCQAEgCACgFQABgFABgGIAAgSIAAgQQgBgHgBgEQgCgFgEgCQgEgCgFAAIgJAAg");
	this.shape_74.setTransform(415.9,51.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_75.setTransform(407.4,51.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_76.setTransform(399.1,51);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_77.setTransform(391,51.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_78.setTransform(379.1,51.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D41F38").s().p("AANA2IAAgwIgZAAIAAAwIgVAAIAAhqIAVAAIAAAoIAZAAIAAgoIAVAAIAABqg");
	this.shape_79.setTransform(370.6,51.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D41F38").s().p("AAEA1IAAgWIglAAIAAgSIAjhBIAVAAIAABCIALAAIAAARIgLAAIAAAWgAgQAOIAUAAIAAgnIgBAAg");
	this.shape_80.setTransform(362.8,51.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D41F38").s().p("AggA1QAAgHACgGQABgHADgFQADgGAFgFIAKgKIAIgIIAFgGIAEgFIABgGIABgHQAAgNgLAAQgDAAgCABQgDACgBADQgBADAAADIgBAIIgVAAIAAgDQAAgQAIgHQAIgIAQAAQARAAAHAHQAIAIAAAOIgBAKIgDAIQgBAEgEACIgHAIIgMAMQgEAEgDAEIgDAHIAnAAIAAARg");
	this.shape_81.setTransform(355.5,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},225).to({state:[]},75).wait(150));

	// Warranty
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D41F38").s().p("AgeA1IAAhqIA7AAIAAASIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAnAAIAAARg");
	this.shape_82.setTransform(524.8,68.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D41F38").s().p("AgdA1IAAhqIAVAAIAABZIAmAAIAAARg");
	this.shape_83.setTransform(517.9,68.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D41F38").s().p("AgRAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAGADQAHAEAEAGQADAGABAGIAAANIgVAAQAAgMgDgFQgDgGgHAAQgDAAgDADQgCACgCAFIgCAMIAAATIAAATIACAMQACAEADACIAFABIAGgBQACgBABgDQACgDACgFIABgOIAVAAIgBAQQgCAIgDAGQgEAGgHADQgGADgLAAQgLAAgHgEg");
	this.shape_84.setTransform(510.1,68.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D41F38").s().p("AgKA1IAAhqIAVAAIAABqg");
	this.shape_85.setTransform(504.1,68.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D41F38").s().p("AANA1IAAgvIgZAAIAAAvIgVAAIAAhqIAVAAIAAApIAZAAIAAgpIAVAAIAABqg");
	this.shape_86.setTransform(498.1,68.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D41F38").s().p("AgeA1IAAhqIA7AAIAAASIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAnAAIAAARg");
	this.shape_87.setTransform(490.5,68.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D41F38").s().p("AgNA1IgZhqIAYAAIAOBOIAAAAIAQhOIAXAAIgZBqg");
	this.shape_88.setTransform(482.9,68.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D41F38").s().p("AgeA1IAAhqIA7AAIAAASIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAnAAIAAARg");
	this.shape_89.setTransform(472,68.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D41F38").s().p("AANA1IAAgvIgZAAIAAAvIgVAAIAAhqIAVAAIAAApIAZAAIAAgpIAVAAIAABqg");
	this.shape_90.setTransform(464,68.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D41F38").s().p("AgKA1IAAhYIgXAAIAAgSIBDAAIAAASIgXAAIAABYg");
	this.shape_91.setTransform(456.3,68.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D41F38").s().p("AgdA1IAAhqIA7AAIAAASIgmAAIAAAZIAjAAIAAARIgjAAIAAAug");
	this.shape_92.setTransform(445.9,68.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_93.setTransform(438,68.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D41F38").s().p("AgeA1IAAhqIA7AAIAAASIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAnAAIAAARg");
	this.shape_94.setTransform(426.9,68.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D41F38").s().p("AgdA1IAAhqIA7AAIAAASIgmAAIAAAZIAjAAIAAARIgjAAIAAAug");
	this.shape_95.setTransform(419.9,68.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D41F38").s().p("AgKA1IAAhqIAVAAIAABqg");
	this.shape_96.setTransform(414.2,68.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D41F38").s().p("AgdA1IAAhqIAWAAIAABZIAlAAIAAARg");
	this.shape_97.setTransform(409.2,68.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D41F38").s().p("AgeA1IAAhqIA7AAIAAASIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAnAAIAAARg");
	this.shape_98.setTransform(398.4,68.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D41F38").s().p("AANA1IAAgvIgZAAIAAAvIgVAAIAAhqIAVAAIAAApIAZAAIAAgpIAVAAIAABqg");
	this.shape_99.setTransform(390.5,68.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D41F38").s().p("AgKA1IAAhYIgXAAIAAgSIBDAAIAAASIgXAAIAABYg");
	this.shape_100.setTransform(382.7,68.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D41F38").s().p("AANA1IgCgEIgBgHIAAgUQgBgHgDgDQgCgEgGAAIgMAAIAAAtIgVAAIAAhqIAnAAQANAAAIAHQAHAHAAAOQAAALgEAGQgFAIgJAAQAIACAEAEQAEAEABAJIAAAGIABAIIAAAOQABAEADABIAAABgAgOgGIAJAAQAHAAAEgEQAFgDAAgJQAAgPgOAAIgLAAg");
	this.shape_101.setTransform(371.6,68.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_102.setTransform(363.1,68.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D41F38").s().p("AgdA1IAAhqIA7AAIAAASIgmAAIAAAZIAjAAIAAARIgjAAIAAAug");
	this.shape_103.setTransform(355.8,68.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D41F38").s().p("AgKA2IAAgqIgbhAIAYAAIANApIAPgpIAXAAIgbBAIAAAqg");
	this.shape_104.setTransform(559.7,51.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D41F38").s().p("AgKA2IAAhZIgXAAIAAgRIBDAAIAAARIgXAAIAABZg");
	this.shape_105.setTransform(552.2,51.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D41F38").s().p("AALA2IgZhLIAABLIgUAAIAAhqIAZAAIAYBIIABAAIAAhIIAUAAIAABqg");
	this.shape_106.setTransform(544.3,51.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_107.setTransform(535.8,51.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_108.setTransform(527.7,51.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_109.setTransform(519.4,51.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_110.setTransform(510.9,51.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D41F38").s().p("AAMA2IgMhNIgLBNIgZAAIgThqIAVAAIAMBOIANhOIATAAIANBOIABAAIALhOIAVAAIgUBqg");
	this.shape_111.setTransform(501.4,51.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D41F38").s().p("AALA2IgahLIAABLIgUAAIAAhqIAaAAIAZBIIAAAAIAAhIIAUAAIAABqg");
	this.shape_112.setTransform(487.8,51.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D41F38").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_113.setTransform(479.3,51);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_114.setTransform(473.2,51.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D41F38").s().p("AgbAvQgIgIAAgOIAAgFIAWAAIAAADIABAHQAAADACACQACADACABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgGgDQgFgDgEgCQgDgEgBgFQgCgFAAgHQAAgQAJgIQAIgHAQAAQAGAAAGABQAHACAEADQAEAEADAFQACAGAAAHIAAADIgUAAQAAgHgEgEQgCgFgGAAIgFABIgEADIgCAEIgBAFQAAAFACADQADAEAGACIAQAIQAGACAEACIAHAHIACAHIABAJQAAARgKAIQgJAHgRAAQgSAAgIgIg");
	this.shape_115.setTransform(467.5,51);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D41F38").s().p("AgbAvQgIgIAAgOIAAgFIAWAAIAAADIABAHQAAADACACQACADACABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgGgDQgFgDgEgCQgDgEgBgFQgCgFAAgHQAAgQAIgIQAKgHAPAAQAGAAAGABQAGACAFADQAEAEADAFQACAGAAAHIAAADIgUAAQgBgHgDgEQgCgFgGAAIgFABIgEADIgCAEIAAAFQAAAFABADQADAEAGACIAQAIQAGACAEACIAHAHIACAHIABAJQABARgLAIQgJAHgRAAQgSAAgIgIg");
	this.shape_116.setTransform(459.7,51);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_117.setTransform(453.9,51.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D41F38").s().p("AAcA2IAAhVIAAAAIgUBVIgPAAIgUhVIAABVIgUAAIAAhqIAhAAIAOBKIAPhKIAhAAIAABqg");
	this.shape_118.setTransform(446.4,51.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D41F38").s().p("AgbAvQgHgIgBgOIAAgFIAWAAIAAADIABAHQAAADACACQACADACABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgIgCgFgDQgFgDgEgCQgDgEgCgFQgBgFAAgHQAAgQAIgIQAKgHAPAAQAGAAAGABQAGACAFADQAEAEACAFQADAGAAAHIAAADIgVAAQAAgHgCgEQgDgFgGAAIgGABIgDADIgCAEIAAAFQAAAFACADQABAEAIACIAPAIQAHACADACIAHAHIADAHIAAAJQABARgKAIQgKAHgQAAQgTAAgIgIg");
	this.shape_119.setTransform(437,51);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D41F38").s().p("AALA2IgahLIAABLIgUAAIAAhqIAaAAIAZBIIAAAAIAAhIIAUAAIAABqg");
	this.shape_120.setTransform(428.8,51.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D41F38").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhqIAZAAIAdBqgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_121.setTransform(420.4,51.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D41F38").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhqIAnAAQANAAAIAGQAHAHAAAOQAAALgEAHQgFAGgJACQAIABAEAEQAEAEABAJIAAAHIABAHIAAAOQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_122.setTransform(412.3,51.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D41F38").s().p("AgKA2IAAhZIgXAAIAAgRIBDAAIAAARIgXAAIAABZg");
	this.shape_123.setTransform(404.3,51.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D41F38").s().p("AgYA3IAghtIARAAIggBtg");
	this.shape_124.setTransform(398.3,51);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D41F38").s().p("AgeA2IAAhqIA7AAIAAARIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_125.setTransform(392.4,51.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D41F38").s().p("AALA2IgahLIAABLIgUAAIAAhqIAaAAIAZBIIAAAAIAAhIIAUAAIAABqg");
	this.shape_126.setTransform(384.3,51.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_127.setTransform(378,51.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D41F38").s().p("AgTA0QgGgEgDgHQgEgHgBgKIgBgYQAAgOABgKQACgKAEgHQAFgHAGgDQAHgDAKAAQARAAAIAIQAIAJAAAQIgVAAIAAgGIgDgFIgDgFQgDgCgDAAQgHAAgDAJQgEAJAAAUIABAQQAAAIACAGQACAFADADQACADAEAAIAEgBIAFgDIADgGQACgDAAgEIAAgLIgPAAIAAgPIAjAAIAAA5IgQAAIAAgKIAAAAQgEAGgFADQgGACgHAAQgJAAgHgDg");
	this.shape_128.setTransform(372,51);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D41F38").s().p("AALA2IgZhLIAABLIgVAAIAAhqIAZAAIAZBIIABAAIAAhIIATAAIAABqg");
	this.shape_129.setTransform(363.5,51.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D41F38").s().p("AgeA2IAAhqIA7AAIAAARIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_130.setTransform(355.8,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},300).to({state:[]},75).wait(75));

	// Myers Approved
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D41F38").s().p("AgfAzIgFgLIgDgIIgEgGQgIgQgLgHQAOgKAKAAQAGAAAFAFQAEAEADAOQAUgmAKgPQALgNAGgEQAHgEAMAAQAIAAAJACQgVAOgYAeQgXAegWApg");
	this.shape_131.setTransform(339.5,51.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#201F20").s().p("AgJAnIAAgXIATAAIAAAXgAgJgPIAAgXIATAAIAAAXg");
	this.shape_132.setTransform(570.9,27.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#201F20").s().p("AgeA2IAAhrIA7AAIAAASIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_133.setTransform(565.8,26.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#201F20").s().p("AgNA2IgZhrIAXAAIAPBPIAAAAIAQhPIAWAAIgYBrg");
	this.shape_134.setTransform(558.2,26.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#201F20").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhrIAZAAIAdBrgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_135.setTransform(550.6,26.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#201F20").s().p("AANA2IAAgwIgZAAIAAAwIgVAAIAAhrIAVAAIAAAqIAZAAIAAgqIAVAAIAABrg");
	this.shape_136.setTransform(542.4,26.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#201F20").s().p("AgbAvQgHgIgBgOIAAgFIAWAAIAAADIAAAHQABADACACQABADADABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgIgCgEgDQgGgDgDgCQgEgEgCgFQgBgFAAgHQAAgQAIgIQAKgHAPAAQAGAAAGABQAGACAEADQAFAEACAFQADAGAAAHIAAADIgVAAQAAgHgCgEQgDgFgGAAIgGABIgDADIgCAEIAAAFQAAAFACADQABAEAIACIAPAIQAHACADACIAGAHIAEAHIABAJQAAARgKAIQgKAHgQAAQgTAAgIgIg");
	this.shape_137.setTransform(531,26);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#201F20").s().p("AgeA2IAAhrIA7AAIAAASIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_138.setTransform(523.8,26.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#201F20").s().p("AgdA2IAAhrIAWAAIAABZIAlAAIAAASg");
	this.shape_139.setTransform(516.9,26.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#201F20").s().p("AgRAzQgHgDgEgIQgEgHgBgKIgBgXIABgVQABgLAEgHQAEgHAHgEQAHgEALAAQALAAAIADQAGAEADAGQADAGACAGIABANIgXAAQABgMgDgFQgDgGgHAAQgDAAgDADQgDACgBAFIgCAMIgBATIABATIADAMQABAEADACIAFABIAFgBQADgBACgDQABgDABgFIABgOIAWAAIgBAQQgBAIgEAGQgEAGgGADQgHADgLAAQgLAAgHgEg");
	this.shape_140.setTransform(509.3,26);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#201F20").s().p("AgKA2IAAhrIAVAAIAABrg");
	this.shape_141.setTransform(503.4,26.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#201F20").s().p("AANA2IAAgwIgZAAIAAAwIgVAAIAAhrIAVAAIAAAqIAZAAIAAgqIAVAAIAABrg");
	this.shape_142.setTransform(497.4,26.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#201F20").s().p("AgeA2IAAhrIA7AAIAAASIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_143.setTransform(490,26.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#201F20").s().p("AgNA2IgZhrIAYAAIAOBPIAAAAIAQhPIAXAAIgZBrg");
	this.shape_144.setTransform(482.4,26.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#201F20").s().p("AgiA2IAAhrIAiAAQALABAHADQAHADAEAIQAEAGABAKQACAKAAAMQAAAMgDALQgBAKgEAHQgFAHgGADQgIADgJABgAgNAlIAKAAQAEAAAEgBQAEgCACgFQACgFAAgGIAAgSIAAgQQAAgHgCgEQgCgFgEgCQgEgCgFAAIgJAAg");
	this.shape_145.setTransform(470.9,26.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#201F20").s().p("AgeA2IAAhrIA7AAIAAASIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_146.setTransform(463.2,26.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#201F20").s().p("AgbAvQgIgIAAgOIAAgFIAWAAIAAADIABAHQAAADACACQACADACABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgGgDQgFgDgEgCQgDgEgBgFQgCgFAAgHQAAgQAIgIQAKgHAPAAQAGAAAGABQAGACAFADQAEAEADAFQACAGAAAHIAAADIgUAAQgBgHgDgEQgCgFgGAAIgFABIgEADIgCAEIAAAFQAAAFABADQADAEAGACIAQAIQAGACAEACIAHAHIACAHIABAJQABARgLAIQgJAHgRAAQgSAAgIgIg");
	this.shape_147.setTransform(455.7,26);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#201F20").s().p("AgMA1QgGgBgFgEQgEgDgDgHQgDgHAAgLIAAhJIAWAAIAABJIAAAIIACAGIAEAEIAFABIAGgBIAEgEIACgGIABgIIAAhJIAVAAIAABJQAAALgDAGQgCAHgFAEQgFAEgGABIgNABIgMgBg");
	this.shape_148.setTransform(447.8,26.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#201F20").s().p("AgjA2IAAhrIAjAAQALABAHADQAHADAEAIQADAGACAKQACAKgBAMQAAAMgBALQgCAKgFAHQgDAHgHADQgIADgKABgAgNAlIAKAAQAFAAADgBQADgCACgFQACgFABgGIABgSIgBgQQgBgHgCgEQgBgFgEgCQgEgCgEAAIgKAAg");
	this.shape_149.setTransform(436.2,26.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#201F20").s().p("AgeA2IAAhrIA7AAIAAASIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_150.setTransform(428.5,26.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#201F20").s().p("AgNA2IgZhrIAXAAIAPBPIAAAAIAQhPIAWAAIgYBrg");
	this.shape_151.setTransform(421,26.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#201F20").s().p("AgSAzQgIgDgDgIQgEgHgBgKIgBgXIABgVQABgLAEgHQADgHAIgEQAHgEALAAQAMAAAHAEQAIAEADAHQAEAHABALIABAVIgBAXQgBAKgEAHQgDAIgIADQgHAEgMAAQgLAAgHgEgAgHgkQgDACgBAFIgCAMIgBARIABATIACAMQABAFADACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_152.setTransform(413,26);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#201F20").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhrIAnAAQANABAIAGQAHAHAAAOQAAALgEAGQgFAIgJABQAIABAEAEQAEAEABAJIAAAHIABAIIAAAMQABAFADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_153.setTransform(405,26.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#201F20").s().p("AghA2IAAhrIAlAAQAJABAFACQAGADAEAEQADAFABAFIABANQAAAIgCAGQgDAGgEADQgEAEgHACQgGACgHgBIgLAAIAAAsgAgLgEIAJAAQAGAAAEgEQAEgEAAgIQAAgIgDgFQgEgDgHAAIgJAAg");
	this.shape_154.setTransform(397.1,26.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#201F20").s().p("AggA2IAAhrIAkAAQAJABAFACQAGADAEAEQADAFABAFIABANQAAAIgCAGQgDAGgEADQgEAEgHACQgGACgHgBIgLAAIAAAsgAgLgEIAJAAQAGAAAEgEQAEgEAAgIQAAgIgDgFQgEgDgHAAIgJAAg");
	this.shape_155.setTransform(389.5,26.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#201F20").s().p("AATA2IgFgXIgbAAIgFAXIgXAAIAdhrIAZAAIAdBrgAAKANIgKgvIAAAAIgKAvIAUAAg");
	this.shape_156.setTransform(381.3,26.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#201F20").s().p("AgbAvQgIgIABgOIAAgFIAVAAIAAADIAAAHQABADACACQACADACABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEQgHgCgGgDQgFgDgEgCQgDgEgBgFQgCgFAAgHQAAgQAJgIQAIgHAQAAQAGAAAGABQAHACADADQAFAEADAFQACAGAAAHIAAADIgUAAQAAgHgEgEQgCgFgGAAIgFABIgEADIgCAEIgBAFQAAAFACADQACAEAHACIAQAIQAGACAEACIAGAHIADAHIABAJQAAARgKAIQgJAHgRAAQgSAAgIgIg");
	this.shape_157.setTransform(369.9,26);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#201F20").s().p("AANA2IgCgGIgBgGIAAgVQgBgFgDgEQgCgEgGAAIgMAAIAAAuIgVAAIAAhrIAnAAQANABAIAGQAHAHAAAOQAAALgEAGQgFAIgJABQAIABAEAEQAEAEABAJIAAAHIABAIIAAAMQABAFADACIAAABgAgOgGIAJAAQAHAAAEgDQAFgEAAgJQAAgOgOAAIgLAAg");
	this.shape_158.setTransform(362.2,26.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#201F20").s().p("AgeA2IAAhrIA7AAIAAASIglAAIAAAaIAjAAIAAAQIgjAAIAAAdIAnAAIAAASg");
	this.shape_159.setTransform(354.5,26.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#201F20").s().p("AgKA2IAAgrIgbhAIAYAAIANAqIAPgqIAXAAIgbBAIAAArg");
	this.shape_160.setTransform(346.9,26.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#201F20").s().p("AAcA2IAAhVIgBAAIgTBVIgQAAIgThVIAABVIgTAAIAAhrIAfAAIAPBLIAQhLIAfAAIAABrg");
	this.shape_161.setTransform(337.6,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]}).to({state:[]},375).wait(75));

	// Subtitle
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D41F38").s().p("AgOBLIAAgbIAcAAIAAAbgAgJAhIgFg6IAAgxIAcAAIAAAxIgEA6g");
	this.shape_162.setTransform(564.6,57.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D41F38").s().p("AgqBLIAAiVIBTAAIAAAZIg1AAIAAAjIAyAAIAAAYIgyAAIAAAoIA3AAIAAAZg");
	this.shape_163.setTransform(556.8,57.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D41F38").s().p("AgpBLIAAiVIAeAAIAAB8IA1AAIAAAZg");
	this.shape_164.setTransform(547,57.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D41F38").s().p("AgYBIQgLgFgFgLQgFgKgCgOQgBgOAAgSQAAgQABgOQACgPAFgKQAFgKALgGQAKgGAQAAQAQAAAJAGQAJAFAFAIQAFAIABAJIABASIgeAAQAAgQgEgIQgEgHgKAAQgFAAgEADQgDADgCAHQgCAGgBALIgBAaQAAARABALQABAKADAGQACAGAEACQADACAEAAIAIgBQADgCADgEQACgEACgHQABgIAAgMIAeAAQAAAMgCALQgCALgFAIQgFAIgJAFQgJAFgPAAQgQAAgKgGg");
	this.shape_165.setTransform(536.1,57.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D41F38").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_166.setTransform(527.8,57.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D41F38").s().p("AASBLIAAhDIgjAAIAABDIgeAAIAAiVIAeAAIAAA6IAjAAIAAg6IAeAAIAACVg");
	this.shape_167.setTransform(519.2,57.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D41F38").s().p("AgqBLIAAiVIBTAAIAAAZIg1AAIAAAjIAxAAIAAAYIgxAAIAAAoIA3AAIAAAZg");
	this.shape_168.setTransform(508.7,57.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#D41F38").s().p("AgSBLIgjiVIAgAAIAVBuIABAAIAVhuIAgAAIgiCVg");
	this.shape_169.setTransform(497.9,57.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#D41F38").s().p("AgwBLIAAiVIAwAAQAQAAAKAFQAJAGAGAJQAFAKABANQACAOABAQQAAASgDAPQgCAPgGAKQgGAJgKAEQgKAFgOAAgAgSA0IANAAQAHAAAFgCQAFgDADgGQACgHABgKIABgYIgBgWQgBgKgCgHQgDgGgEgDQgGgDgIAAIgMAAg");
	this.shape_170.setTransform(481.6,57.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D41F38").s().p("AgqBLIAAiVIBTAAIAAAZIg1AAIAAAjIAxAAIAAAYIgxAAIAAAoIA3AAIAAAZg");
	this.shape_171.setTransform(470.7,57.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D41F38").s().p("AgmBCQgLgLAAgUIAAgHIAeAAIAAAFIABAJQABAFADADQACADADABQAFACAFAAQAGAAAGgFQAGgEAAgKQAAgFgCgDQgBgEgDgDQgDgDgGgCIgLgFIgSgIQgHgEgFgEQgFgFgDgHQgCgHAAgKQABgWAMgLQAMgLAVAAQAJAAAJADQAIACAHAFQAGAFADAHQAEAIAAALIAAAEIgdAAQAAgLgDgGQgEgFgJAAQgFAAgDABIgFAEIgDAGIAAAGQAAAHADAFQACAEAKAEIAXALQAIADAFADQAGAEADAFQADAFACAGQABAFAAAHQAAAYgOALQgNALgYAAQgaAAgLgMg");
	this.shape_172.setTransform(459.9,57.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D41F38").s().p("AgRBKQgIgBgHgFQgHgGgEgJQgEgJAAgQIAAhnIAfAAIAABnIAAALQABAFACADQACADAEACQADACAEAAQAGAAADgCQADgCACgDQACgDABgFIABgLIAAhnIAeAAIAABnQAAAPgEAJQgEAJgHAGQgHAFgIACQgJACgJAAQgIAAgJgCg");
	this.shape_173.setTransform(448.9,57.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D41F38").s().p("AAbBLIgHggIgnAAIgHAgIggAAIAoiVIAlAAIAnCVgAAPATIgPhDIAAAAIgOBDIAdAAg");
	this.shape_174.setTransform(432.4,57.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D41F38").s().p("AgaBJQgJgFgFgKQgFgKgCgPQgCgPAAgSQAAgTADgPQACgOAHgJQAFgKAKgFQAJgFAOAAQAYAAALANQAMAMgBAXIgcAAIgBgJIgDgIQgDgEgDgCQgDgCgFAAQgJAAgGAMQgEAMAAAcIABAYIACASQADAIAEAEQAEAEAFAAIAHgCIAFgEQAEgDACgEQABgFAAgGIAAgPIgUAAIAAgWIAxAAIAABQIgWAAIAAgOIAAAAQgGAJgIAEQgHAEgKAAQgOAAgIgFg");
	this.shape_175.setTransform(415.8,57.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D41F38").s().p("AAPBLIgkhoIAAAAIAABoIgcAAIAAiVIAjAAIAkBmIAAAAIAAhmIAcAAIAACVg");
	this.shape_176.setTransform(403.9,57.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D41F38").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_177.setTransform(395.2,57.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D41F38").s().p("AgOBLIAAg7IgnhaIAiAAIATA6IABAAIAVg6IAgAAIgnBaIAAA7g");
	this.shape_178.setTransform(387,57.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D41F38").s().p("AgRBKQgIgBgHgFQgHgGgEgJQgEgJAAgQIAAhnIAfAAIAABnIAAALQABAFACADQACADAEACQADACAEAAQAGAAADgCQADgCACgDQACgDABgFIABgLIAAhnIAeAAIAABnQAAAPgEAJQgEAJgHAGQgHAFgIACQgJACgJAAQgIAAgJgCg");
	this.shape_179.setTransform(376,57.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D41F38").s().p("AgwBLIAAiVIAyAAQAJAAAIACQAHACAGAEQAGAEADAIQAEAHAAALQgBAMgFAJQgGAIgMAEIAAAAQANACAHAIQAIAJAAAPQAAAJgCAIQgDAIgFAGQgGAGgJADQgJAEgNAAgAgSA0IAMAAQAKABAHgFQAGgFABgNQgBgHgCgEQgBgEgDgCQgDgDgFgCIgIgBIgNAAgAgSgNIAJAAQAMAAAFgEQAGgEAAgLQAAgLgFgFQgFgDgLAAIgLAAg");
	this.shape_180.setTransform(364.6,57.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D41F38").s().p("AgpBLIAAiVIBTAAIAAAZIg1AAIAAAjIAyAAIAAAYIgyAAIAABBg");
	this.shape_181.setTransform(349.2,57.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D41F38").s().p("AgaBIQgLgFgFgLQgFgKgCgOQgBgOAAgSQAAgQABgOQACgPAFgKQAFgKALgGQAKgGAQAAQARAAAKAGQAKAGAFAKQAGAKABAPQACAOAAAQQAAASgCAOQgBAOgGAKQgFALgKAFQgKAGgRAAQgQAAgKgGgAgKgzQgEADgCAGQgCAHgBALIgBAYIABAaQABALACAGQACAHAEADQAEADAGAAQAHAAAEgDQAEgDACgHQACgGABgLIAAgaIAAgYQgBgLgCgHQgCgGgEgDQgEgDgHAAQgGAAgEADg");
	this.shape_182.setTransform(338.2,57.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D41F38").s().p("AgNBEIAAhxIgdAAIAAgWIBVAAIAAAWIgdAAIAABxg");
	this.shape_183.setTransform(562.2,33.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D41F38").s().p("AgPBDQgIgBgGgFQgGgFgEgIQgDgJAAgNIAAheIAbAAIAABeIABAJQAAAEACAEQACADADABQADACAEAAQAFAAADgCQADgBACgDQACgEAAgEIABgJIAAheIAbAAIAABeQAAANgDAIQgEAJgGAEQgGAFgIACQgIACgIAAIgPgCg");
	this.shape_184.setTransform(552.5,33.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D41F38").s().p("AgXBBQgKgFgEgJQgFgJgCgNQgBgNAAgQQAAgOABgNQACgNAFgJQAEgKAKgFQAJgFAOAAQAPAAAKAFQAJAFAFAKQAEAJACANQABANAAAOQAAAQgBANQgCANgEAJQgFAJgJAFQgKAFgPAAQgOAAgJgFgAgJguQgDADgCAGQgCAGgBAJIgBAWIABAYQABAJACAGQACAGADADQAEADAFAAQAGAAAEgDQAEgDACgGQACgGAAgJIABgYIgBgWQAAgJgCgGQgCgGgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_185.setTransform(542.1,33.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D41F38").s().p("AARBEIgbg4IgKAPIAAApIgbAAIAAiHIAbAAIAAA2IAig2IAeAAIglA6IApBNg");
	this.shape_186.setTransform(527.9,33.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D41F38").s().p("AARBEIgDgHIgBgIIgBgaQAAgHgEgFQgDgFgIAAIgPAAIAAA6IgbAAIAAiHIAyAAQAQAAAKAJQAKAIAAASQAAAOgGAIQgGAJgLABIAAABQAKABAFAGQAFAFABALIAAAIIABAKIABARQABAGAEACIAAABgAgSgIIALAAQAKAAAFgEQAFgFAAgLQAAgTgSAAIgNAAg");
	this.shape_187.setTransform(517.1,33.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D41F38").s().p("AgXBBQgKgFgEgJQgFgJgCgNQgBgNAAgQQAAgOABgNQACgNAFgJQAEgKAKgFQAJgFAOAAQAPAAAKAFQAJAFAFAKQAEAJACANQABANAAAOQAAAQgBANQgCANgEAJQgFAJgJAFQgKAFgPAAQgOAAgJgFgAgJguQgDADgCAGQgCAGgBAJIgBAWIABAYQABAJACAGQACAGADADQAEADAFAAQAGAAAEgDQAEgDACgGQACgGAAgJIABgYIgBgWQAAgJgCgGQgCgGgEgDQgEgDgGAAQgFAAgEADg");
	this.shape_188.setTransform(506.3,33.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D41F38").s().p("AAPBEIgPhiIAAAAIgOBiIgfAAIgZiHIAaAAIAQBjIAQhjIAZAAIAQBjIAPhjIAbAAIgZCHg");
	this.shape_189.setTransform(493.8,33.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D41F38").s().p("AgiA8QgKgKAAgTIAAgFIAbAAIAAAEIABAIQABAEACADQACADADABQAEACAEAAQAHAAAFgEQAFgEAAgJQAAgFgCgDQgBgDgDgDIgHgFIgLgEIgPgHQgHgDgEgEQgFgFgCgGQgCgHAAgIQAAgUALgKQALgKAUAAQAIAAAIACQAHACAGAEQAGAFADAHQADAHAAAJIAAAEIgaAAQAAgJgEgGQgDgFgIAAIgHABIgFAEIgCAFIgBAGQAAAGADAEQADAFAIADIAUAJQAIAEAFADQAFADADAFQADAEABAFIABALQAAAWgMAKQgNAJgVAAQgXAAgKgKg");
	this.shape_190.setTransform(481.7,33.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D41F38").s().p("AgiA8QgKgKAAgTIAAgFIAbAAIAAAEIABAIQABAEACADQACADADABQAEACAEAAQAHAAAFgEQAFgEAAgJQAAgFgCgDQgBgDgDgDIgHgFIgLgEIgPgHQgHgDgEgEQgFgFgCgGQgCgHAAgIQAAgUALgKQALgKAUAAQAIAAAIACQAHACAGAEQAGAFADAHQADAHAAAJIAAAEIgaAAQAAgJgEgGQgDgFgIAAIgHABIgFAEIgCAFIgBAGQAAAGADAEQADAFAIADIAUAJQAIAEAFADQAFADADAFQADAEABAFIABALQAAAWgMAKQgNAJgVAAQgXAAgKgKg");
	this.shape_191.setTransform(471.8,33.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#D41F38").s().p("AgmBEIAAiHIBLAAIAAAWIgvAAIAAAgIAsAAIAAAWIgsAAIAAAkIAxAAIAAAXg");
	this.shape_192.setTransform(462.6,33.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D41F38").s().p("AgPBDQgIgBgGgFQgGgFgEgIQgDgJAAgNIAAheIAbAAIAABeIABAJQAAAEACAEQACADADABQADACAEAAQAFAAADgCQADgBACgDQACgEAAgEIABgJIAAheIAbAAIAABeQAAANgDAIQgEAJgGAEQgGAFgIACQgIACgIAAIgPgCg");
	this.shape_193.setTransform(452.7,33.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D41F38").s().p("AgYBCQgIgEgEgKQgFgJgBgNQgCgNAAgRQAAgRADgNQACgNAFgJQAFgIAJgFQAJgEAMAAQAWAAAKALQAKALAAAVIgaAAIgBgIIgDgHQgCgEgDgCQgCgCgFAAQgIAAgFALQgEALAAAaIABAVQAAAJACAHQACAHAEAEQAEAEAFAAIAFgCQADgBACgDQADgCACgEQACgEAAgGIAAgOIgTAAIAAgTIAtAAIAABIIgUAAIAAgMIgBAAQgFAIgHADQgHADgIAAQgNAAgIgEg");
	this.shape_194.setTransform(442.3,33.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D41F38").s().p("AgmBEIAAiHIBLAAIAAAWIgvAAIAAAgIAsAAIAAAWIgsAAIAAAkIAxAAIAAAXg");
	this.shape_195.setTransform(428.2,33.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D41F38").s().p("AAQBEIAAg8IgfAAIAAA8IgbAAIAAiHIAbAAIAAA0IAfAAIAAg0IAbAAIAACHg");
	this.shape_196.setTransform(418.1,33.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D41F38").s().p("AgNBEIAAhxIgdAAIAAgWIBVAAIAAAWIgdAAIAABxg");
	this.shape_197.setTransform(408.3,33.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D41F38").s().p("AgmBEIAAiHIBLAAIAAAWIgvAAIAAAgIAsAAIAAAWIgsAAIAAAkIAxAAIAAAXg");
	this.shape_198.setTransform(394.9,33.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D41F38").s().p("AARBEIgbg4IgKAPIAAApIgbAAIAAiHIAbAAIAAA2IAig2IAeAAIglA6IApBNg");
	this.shape_199.setTransform(385.7,33.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D41F38").s().p("AAYBEIgGgdIgjAAIgGAdIgdAAIAkiHIAhAAIAkCHgAANARIgNg8IAAAAIgMA8IAZAAg");
	this.shape_200.setTransform(374.6,33.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D41F38").s().p("AgNBEIAAhxIgdAAIAAgWIBVAAIAAAWIgdAAIAABxg");
	this.shape_201.setTransform(365.9,33.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D41F38").s().p("AgmBEIAAiHIBLAAIAAAWIgvAAIAAAgIAsAAIAAAWIgsAAIAAAkIAxAAIAAAXg");
	this.shape_202.setTransform(352.5,33.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D41F38").s().p("AAPBEIgPhiIAAAAIgOBiIgfAAIgZiHIAaAAIAQBjIAQhjIAZAAIAQBjIAPhjIAbAAIgZCHg");
	this.shape_203.setTransform(340.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},375).wait(75));

	// Myers Automotive Group - Logo - Color
	this.instance = new lib.MyersAutomotiveGroupLogoColor_1();
	this.instance.parent = this;
	this.instance.setTransform(652.5,20,1,1,0,0,0,52.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// Rectangle
	this.instance_1 = new lib.Rectangle_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364,45,1,1,0,0,0,-218,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(450));

	// View Used Inventory
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#D3232A").s().p("AgKA2IAAgrIgbg/IAYAAIANApIAAAAIAPgpIAXAAIgbA/IAAArg");
	this.shape_204.setTransform(715.3,66.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D3232A").s().p("AAMA2IgBgGIgBgGIAAgVQgBgFgDgEQgDgEgFAAIgMAAIAAAuIgVAAIAAhqIAmAAQAOAAAHAGQAHAHAAAOQAAALgDAHQgFAGgJACQAIABAEAEQADAEABAJIABAHIAAAIIABAMQABAFADACIAAABgAgOgGIAJAAQAHAAAEgDQAEgEABgJQgBgOgOAAIgKAAg");
	this.shape_205.setTransform(708.1,66.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D3232A").s().p("AgSAzQgHgDgEgIQgEgHgBgKQgBgLAAgMQAAgLABgKQABgLAEgHQAEgHAHgEQAHgEALAAQAMAAAHAEQAHAEAEAHQAEAHABALIABAVIgBAXQgBAKgEAHQgEAIgHADQgHAEgMAAQgLAAgHgEgAgHgkQgCACgCAFIgCAMIgBARIABATIACAMQACAFACACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_206.setTransform(699.8,66.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D3232A").s().p("AgKA2IAAhZIgXAAIAAgRIBDAAIAAARIgXAAIAABZg");
	this.shape_207.setTransform(692.4,66.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#D3232A").s().p("AALA2IgZhLIgBAAIAABLIgTAAIAAhqIAYAAIAZBHIABAAIAAhHIATAAIAABqg");
	this.shape_208.setTransform(684.9,66.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D3232A").s().p("AgdA2IAAhqIA6AAIAAARIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_209.setTransform(677.6,66.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#D3232A").s().p("AgMA2IgZhqIAXAAIAOBOIAAAAIAQhOIAWAAIgYBqg");
	this.shape_210.setTransform(670.2,66.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D3232A").s().p("AALA2IgZhLIgBAAIAABLIgTAAIAAhqIAYAAIAZBHIABAAIAAhHIATAAIAABqg");
	this.shape_211.setTransform(662.4,66.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#D3232A").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_212.setTransform(656.5,66.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D3232A").s().p("AgiA2IAAhqIAiAAQALAAAHADQAHAEAEAGQAEAIABAJIABAWQAAANgCAKQgBAKgFAHQgDAHgIADQgGADgLABgAgMAmIAJAAQAFgBADgBQADgCADgFQABgFABgGIABgSIgBgQQgBgHgBgEQgCgFgEgCQgEgCgEAAIgJAAg");
	this.shape_213.setTransform(647.5,66.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#D3232A").s().p("AgdA2IAAhqIA6AAIAAARIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_214.setTransform(640,66.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D3232A").s().p("AgbAvQgHgIAAgOIAAgFIAVAAIAAADIABAHIACAFQABADADABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEIgNgFIgIgFQgEgEgBgFQgCgFAAgHQAAgQAJgIQAJgHAPAAQAGAAAGABQAGACAEADQAFAEACAFQADAGAAAHIAAADIgVAAQAAgHgDgEQgCgFgGAAIgFABIgEADIgCAEIgBAFQAAAFACADQADAEAGACIAQAIIAKAEIAGAHIADAHIABAJQAAARgKAIQgJAHgRAAQgSAAgIgIg");
	this.shape_215.setTransform(632.7,66.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D3232A").s().p("AgLA1QgHgBgFgEQgEgDgDgHQgDgHAAgLIAAhJIAWAAIAABJIAAAIIACAGIAEAEIAFABIAGgBIAEgEIACgGIAAgIIAAhJIAWAAIAABJQAAALgDAGQgDAHgEAEQgGAEgGABIgMABIgLgBg");
	this.shape_216.setTransform(625.1,67);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D3232A").s().p("AAMA2IgMhNIgLBNIgYAAIgUhqIAVAAIAMBOIAMhOIAVAAIAMBOIAAAAIALhOIAWAAIgUBqg");
	this.shape_217.setTransform(612.5,66.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D3232A").s().p("AgdA2IAAhqIA6AAIAAARIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_218.setTransform(603.7,66.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#D3232A").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_219.setTransform(598.4,66.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#D3232A").s().p("AgNA2IgYhqIAXAAIAOBOIABAAIAPhOIAWAAIgYBqg");
	this.shape_220.setTransform(592.9,66.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]}).wait(450));

	// CTA Rectangle
	this.instance_2 = new lib.CTARectangle_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(653,66.5,1,1,0,0,0,71,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(450));

	// 2016 Vehicles
	this.instance_3 = new lib._2016Vehicles();
	this.instance_3.parent = this;
	this.instance_3.setTransform(273,50,1,1,0,0,0,273,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(450));

	// Background
	this.instance_4 = new lib.Background_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);
// library properties:
lib.properties = {
	id: '8404BA97C05A4D98839CEAC94F5D3D6D',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_.png", id:"17_10_MyersAutoGroup_AdWords_Used_728x90_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8404BA97C05A4D98839CEAC94F5D3D6D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
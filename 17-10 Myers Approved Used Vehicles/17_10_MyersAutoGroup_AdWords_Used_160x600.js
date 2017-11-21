(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_", frames: [[324,143,116,50],[324,0,160,77],[324,79,111,62],[0,0,160,600],[324,195,142,29],[324,226,105,22],[162,0,160,600]]}
];


// symbols:



(lib._2016ChevroletCruze = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2016NissanRogue = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2016ToyotaCorolla = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CTARectangle = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.MyersAutomotiveGroupLogoColor = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_"];
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
	mask.graphics.p("AqdCRQgRAAgLgMQgMgLAAgRIAAjRQAAgRAMgLQALgMARAAIU7AAQARAAALAMQAMALAAARIAADRQAAARgMALQgLAMgRAAg");
	mask.setTransform(71,14.5);

	// Layer_1
	this.instance = new lib.Rectangle();
	this.instance.parent = this;
	this.instance.setTransform(-9,-511);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rectangle_1, new cjs.Rectangle(0,0,142.1,29), null);


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

}).prototype = getMCSymbolPrototype(lib.Background_1, new cjs.Rectangle(0,0,160,600), null);


(lib._2016ToyotaCorolla_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2016ToyotaCorolla();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2016ToyotaCorolla_1, new cjs.Rectangle(0,0,111,62), null);


(lib._2016NissanRogue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2016NissanRogue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2016NissanRogue_1, new cjs.Rectangle(0,0,160,77), null);


(lib._2016ChevroletCruze_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2016ChevroletCruze();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2016ChevroletCruze_1, new cjs.Rectangle(0,0,116,50), null);


(lib._2016Vehicles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(421));

	// 2016 Nissan Rogue
	this.instance = new lib._2016NissanRogue_1();
	this.instance.parent = this;
	this.instance.setTransform(238,143.5,1,1,0,0,0,80,38.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:158,y:163.5,alpha:1},18,cjs.Ease.quadOut).wait(421));

	// 2016 Toyota Corolla
	this.instance_1 = new lib._2016ToyotaCorolla_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62.5,129,1,1,0,0,0,55.5,31);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:17.5,y:149,alpha:1},18,cjs.Ease.quadOut).wait(431));

	// 2016 Chevrolet Cruze
	this.instance_2 = new lib._2016ChevroletCruze_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(200,110,1,1,0,0,0,58,25);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:120,y:130,alpha:1},18,cjs.Ease.quadOut).wait(441));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142,85,116,50);


// stage content:
(lib._17_10_MyersAutoGroup_AdWords_Used_160x600 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#D41F38").s().p("AAOBIIgihjIAAAAIAABjIgbAAIAAiOIAhAAIAjBhIAAAAIAAhhIAbAAIAACOg");
	this.shape.setTransform(116.2,342.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D41F38").s().p("AgZBFQgKgFgEgKQgGgKgBgOQgBgNAAgRQAAgPABgOQABgNAGgKQAEgKAKgFQAKgGAPAAQARAAAJAGQAJAFAGAKQAFAKABANQABAOAAAPQAAARgBANQgBAOgFAKQgGAKgJAFQgJAFgRAAQgPAAgKgFgAgJgxQgEADgCAHQgDAGAAAKIAAAXIAAAZQAAAKADAGQACAHAEACQAEADAFAAQAGAAAEgDQAFgCACgHQACgGAAgKIABgZIgBgXQAAgKgCgGQgCgHgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_1.setTransform(104.9,342.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D41F38").s().p("AgNBIIAAiOIAbAAIAACOg");
	this.shape_2.setTransform(96.8,342.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D41F38").s().p("AgOBIIAAh3IgeAAIAAgXIBaAAIAAAXIggAAIAAB3g");
	this.shape_3.setTransform(89.4,342.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D41F38").s().p("AgXBFQgKgFgFgKQgFgKgBgOQgCgNAAgRQAAgPACgOQABgNAFgKQAFgKAKgFQAKgGAPAAQAPAAAJAFQAJAFAEAIQAEAIACAIIABARIgdAAQAAgPgEgIQgDgHgKAAQgEAAgEADQgDADgDAHQgBAGgBALIgBAYIABAbQABAKACAFQACAGAEABQADACAEAAIAHgBQADgBADgEQADgEABgHIABgTIAdAAQAAAMgCAKQgCALgEAHQgFAIgKAFQgIAEgOAAQgPAAgKgFg");
	this.shape_4.setTransform(79.3,342.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D41F38").s().p("AgoBIIAAiOIBPAAIAAAXIgyAAIAAAiIAvAAIAAAXIgvAAIAAAmIA0AAIAAAYg");
	this.shape_5.setTransform(69.4,342.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D41F38").s().p("AgsBIIAAiOIAyAAQALAAAHADQAIAEAEAGQAFAGACAIQACAIAAAIQAAAKgDAJQgEAIgGAEQgGAFgIADQgIACgKAAIgPAAIAAA6gAgPgFIANAAQAHgBAGgFQAFgFAAgLQAAgLgFgFQgEgGgKAAIgMAAg");
	this.shape_6.setTransform(59.4,342.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D41F38").s().p("AgkA/QgLgKAAgUIAAgGIAdAAIAAAEIABAJQABAFACACQACADAEACQADABAFAAQAHAAAFgEQAGgEAAgJQAAgFgCgEQgBgDgDgDQgDgDgFgCIgLgFQgKgDgHgEQgHgDgEgFQgFgFgCgGQgCgHAAgJQAAgVALgKQAMgLAVAAQAIAAAJACQAIACAFAFQAGAFADAHQAEAHAAALIAAAEIgcAAQAAgLgDgFQgEgGgIAAQgEAAgDACIgGADQgCADAAADIgBAGQAAAHADAEQADAFAJADIAVAKIANAGQAGAEADAFQADAEABAGQABAFAAAHQABAWgNALQgOAKgWAAQgZAAgKgLg");
	this.shape_7.setTransform(48.8,342.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D41F38").s().p("AAOBIIgihjIAAAAIAABjIgbAAIAAiOIAiAAIAiBhIAAAAIAAhhIAbAAIAACOg");
	this.shape_8.setTransform(37.9,342.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D41F38").s().p("AgNBIIAAiOIAbAAIAACOg");
	this.shape_9.setTransform(29.6,342.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D41F38").s().p("AgNBHIAAh2IggAAIAAgXIBaAAIAAAXIgeAAIAAB2g");
	this.shape_10.setTransform(96.5,319.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D41F38").s().p("AAOBHIgihjIAAAAIAABjIgbAAIAAiNIAiAAIAiBgIAAAAIAAhgIAbAAIAACNg");
	this.shape_11.setTransform(86,319.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D41F38").s().p("AgNBHIAAiNIAbAAIAACNg");
	this.shape_12.setTransform(77.6,319.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41F38").s().p("AgYBFQgKgFgGgKQgEgKgCgOQgCgNAAgRQAAgPACgOQACgNAEgKQAGgKAKgFQAJgGAPAAQAQAAAKAGQAKAFAEAKQAGAKABANQACAOgBAPQABARgCANQgBAOgGAKQgEAKgKAFQgKAFgQAAQgPAAgJgFgAgJgxQgEADgCAHQgDAGAAAKIAAAXIAAAZQAAAKADAGQACAHAEACQADADAGAAQAHAAAEgDQADgCADgHQABgGABgKIABgZIgBgXQgBgKgBgGQgDgHgDgDQgEgDgHAAQgGAAgDADg");
	this.shape_13.setTransform(69.5,319);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D41F38").s().p("AgsBHIAAiNIAyAAQALAAAHADQAIAEAEAGQAFAGACAIQACAIAAAHQAAAMgDAHQgEAJgGAEQgGAGgIACQgIACgKAAIgPAAIAAA5gAgPgFIANAAQAHgBAGgFQAFgFAAgLQAAgLgFgFQgEgGgKAAIgMAAg");
	this.shape_14.setTransform(59.1,319.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D41F38").s().p("AgbAMIAAgXIA3AAIAAAXg");
	this.shape_15.setTransform(49.9,320.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D41F38").s().p("AgrBHQAAgKACgIQACgIAEgHQAEgIAGgHQAGgHAIgHIALgKIAHgIIAEgHIACgIIABgJQAAgSgOAAQgEAAgEACQgDACgBAEQgCAEgBAFIAAALIgcAAIAAgGQAAgUALgKQALgLAVAAQAWAAAKAKQALAKAAATIgBAMIgEAMQgDAFgEAEIgKALIgQAPQgGAFgDAGQgEAFgBAEIA1AAIAAAXg");
	this.shape_16.setTransform(41.3,319.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D41F38").s().p("AgXBDQgIgEgEgGQgFgFgBgHIgCgNIAAgEIAcAAIAAAIIACAHQACADADADQACADAFAAQAIgBAEgGQAEgIAAgOIgBgOQgBgFgCgEQgCgCgDgCQgDgBgEgBQgGABgDADQgEACAAAHIgaAAIAFhNIBJAAIAAAXIgzAAIgDAgQAEgFAGgDQAGgDAJABQAKAAAHADQAHAFADAGQAEAHACAGQACAJAAAIQAAAMgCAJQgCAKgGAHQgFAHgIADQgJAEgNAAQgNAAgJgEg");
	this.shape_17.setTransform(31.7,319.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},75).wait(375));

	// Carproof Report
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D41F38").s().p("AgOBIIAAh3IgeAAIAAgXIBaAAIAAAXIggAAIAAB3g");
	this.shape_18.setTransform(84.7,342.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D41F38").s().p("AARBIQgCgEgBgDIgBgJIgBgbQAAgJgDgEQgFgFgIAAIgOAAIAAA9IgeAAIAAiOIA0AAQATAAAJAJQALAJAAATQAAAOgGAJQgGAJgMACIAAAAQAKACAGAFQAFAGABAMIAAAIIABALIABARQABAGAEADIAAABgAgSgIIALAAQAJAAAHgFQAFgFAAgMQAAgTgTAAIgNAAg");
	this.shape_19.setTransform(75,342.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D41F38").s().p("AgZBFQgJgFgFgKQgFgKgCgOQgCgNABgRQgBgPACgOQACgNAFgKQAFgKAJgFQAKgGAPAAQAQAAAKAGQAJAFAGAKQAFAKABANQACAOAAAPQAAARgCANQgBAOgFAKQgGAKgJAFQgKAFgQAAQgPAAgKgFgAgJgxQgEADgCAHQgCAGgBAKIgBAXIABAZQABAKACAGQACAHAEACQADADAGAAQAGAAAEgDQAFgCABgHQADgGAAgKIABgZIgBgXQAAgKgDgGQgBgHgFgDQgEgDgGAAQgGAAgDADg");
	this.shape_20.setTransform(63.6,342.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D41F38").s().p("AgsBIIAAiOIAyAAQALAAAHADQAIAEAEAGQAFAGACAIQACAIAAAIQAAAKgDAJQgEAIgGAEQgGAFgIADQgIACgKAAIgPAAIAAA6gAgPgFIANAAQAHgBAGgFQAFgFAAgLQAAgLgFgFQgEgGgKAAIgMAAg");
	this.shape_21.setTransform(53.2,342.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D41F38").s().p("AgoBIIAAiOIBPAAIAAAXIgyAAIAAAiIAvAAIAAAXIgvAAIAAAmIA0AAIAAAYg");
	this.shape_22.setTransform(43.2,342.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D41F38").s().p("AARBIQgCgEgBgDIAAgJIgBgbQAAgJgFgEQgDgFgJAAIgPAAIAAA9IgdAAIAAiOIA0AAQASAAAKAJQALAJgBATQABAOgGAJQgGAJgMACIAAAAQALACAEAFQAFAGACAMIAAAIIABALIABARQACAGAEADIAAABgAgTgIIANAAQAIAAAGgFQAGgFAAgMQAAgTgTAAIgOAAg");
	this.shape_23.setTransform(32.9,342.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D41F38").s().p("AgnBHIAAiNIBPAAIAAAXIgyAAIAAAiIAvAAIAAAXIgvAAIAAA9g");
	this.shape_24.setTransform(108.6,319.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D41F38").s().p("AgYBFQgLgFgEgKQgFgKgCgOQgBgNAAgRQAAgPABgOQACgNAFgKQAEgKALgFQAJgGAPAAQAQAAAKAGQAJAFAGAKQAEAKACANQABAOABAPQgBARgBANQgCAOgEAKQgGAKgJAFQgKAFgQAAQgPAAgJgFgAgJgxQgEADgCAHQgCAGgBAKIgBAXIABAZQABAKACAGQACAHAEACQADADAGAAQAGAAAFgDQADgCACgHQACgGABgKIABgZIgBgXQgBgKgCgGQgCgHgDgDQgFgDgGAAQgGAAgDADg");
	this.shape_25.setTransform(98,319);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D41F38").s().p("AgZBFQgKgFgEgKQgGgKgBgOQgBgNAAgRQAAgPABgOQABgNAGgKQAEgKAKgFQAKgGAPAAQARAAAJAGQAJAFAGAKQAFAKABANQABAOAAAPQAAARgBANQgBAOgFAKQgGAKgJAFQgJAFgRAAQgPAAgKgFgAgJgxQgEADgCAHQgDAGAAAKIAAAXIAAAZQAAAKADAGQACAHAEACQAEADAFAAQAGAAAEgDQAFgCACgHQACgGAAgKIABgZIgBgXQAAgKgCgGQgCgHgFgDQgEgDgGAAQgFAAgEADg");
	this.shape_26.setTransform(86.9,319);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D41F38").s().p("AARBHQgCgDAAgDIgBgIIgCgcQAAgIgEgFQgEgFgHAAIgPAAIAAA8IgdAAIAAiNIA0AAQARgBALAKQAJAJABATQgBAOgFAJQgGAJgMACIAAAAQAKACAGAFQAEAFACAMIABAJIAAAKIABASQABAGAEACIAAABgAgSgIIALAAQAKAAAFgFQAGgEAAgNQAAgTgTAAIgNAAg");
	this.shape_27.setTransform(76.1,319.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D41F38").s().p("AgsBHIAAiNIAyAAQALAAAHADQAIAEAEAGQAFAGACAIQACAIAAAHQAAAMgDAHQgEAJgGAEQgGAGgIACQgIACgKAAIgPAAIAAA5gAgPgFIANAAQAHgBAGgFQAFgFAAgLQAAgLgFgFQgEgGgKAAIgMAAg");
	this.shape_28.setTransform(65.4,319.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D41F38").s().p("AARBHQgCgDgBgDIgBgIIgBgcQAAgIgDgFQgFgFgIAAIgOAAIAAA8IgeAAIAAiNIA0AAQATgBAJAKQAKAJAAATQABAOgGAJQgGAJgMACIAAAAQAKACAGAFQAFAFABAMIAAAJIABAKIABASQACAGADACIAAABgAgSgIIAMAAQAIAAAHgFQAFgEAAgNQAAgTgTAAIgNAAg");
	this.shape_29.setTransform(54.7,319.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D41F38").s().p("AAaBHIgHgeIglAAIgHAeIgdAAIAliNIAjAAIAlCNgAAOARIgOg/IAAAAIgNA/IAbAAg");
	this.shape_30.setTransform(43.3,319.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D41F38").s().p("AgXBFQgKgFgFgKQgFgKgCgOQgBgNAAgRQAAgPABgOQACgNAFgKQAFgKAKgFQAJgGAQAAQAPAAAJAFQAJAFAEAIQAFAIAAAIIACARIgdAAQAAgPgDgIQgEgHgKAAQgEAAgEADQgDADgCAHQgCAGgBALIgBAYIABAbQABAKACAFQADAGADABQAEACADAAIAHgBQAEgBACgEQADgEABgHIABgTIAdAAQAAAMgCAKQgCALgEAHQgGAIgJAFQgIAEgOAAQgQAAgJgFg");
	this.shape_31.setTransform(32.4,319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},75).to({state:[]},75).wait(300));

	// Exchange Policy
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D41F38").s().p("AgNBHIAAg3IglhXIAgAAIASA4IAUg4IAfAAIglBXIAAA3g");
	this.shape_32.setTransform(78.8,389.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D41F38").s().p("AgXBFQgKgFgFgKQgFgKgBgOQgCgNAAgRQAAgPACgOQABgNAFgKQAFgKAKgFQAJgGAQAAQAPAAAJAFQAJAFAEAIQAFAIABAIIABARIgdAAQAAgPgEgIQgDgHgKAAQgEAAgEADQgEADgCAHQgCAGAAALIgBAYIABAbQABAKACAFQACAGAEABQAEACADAAIAIgBQADgBACgEQACgEACgHIABgTIAdAAQAAAMgCAKQgCALgFAHQgFAIgIAFQgJAEgOAAQgQAAgJgFg");
	this.shape_33.setTransform(68.3,389.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D41F38").s().p("AgNBHIAAiOIAbAAIAACOg");
	this.shape_34.setTransform(60.3,389.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D41F38").s().p("AgnBHIAAiOIAdAAIAAB3IAyAAIAAAXg");
	this.shape_35.setTransform(53.5,389.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D41F38").s().p("AgZBFQgJgFgFgKQgFgKgCgOQgCgNABgRQgBgPACgOQACgNAFgKQAFgKAJgFQAKgGAPAAQAQAAAKAGQAJAFAGAKQAFAKABANQACAOAAAPQAAARgCANQgBAOgFAKQgGAKgJAFQgKAFgQAAQgPAAgKgFgAgJgxQgEADgCAHQgCAGgBAKIAAAXIAAAZQABAKACAGQACAHAEACQADADAGAAQAGAAAEgDQAFgCABgHQADgGAAgKIABgZIgBgXQAAgKgDgGQgBgHgFgDQgEgDgGAAQgGAAgDADg");
	this.shape_36.setTransform(42.9,389.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D41F38").s().p("AgsBHIAAiOIAyAAQALAAAHAFQAIADAEAGQAFAGACAIQACAHAAAIQAAAMgDAHQgEAJgGAEQgGAGgIACQgIACgKABIgPAAIAAA4gAgPgGIANAAQAHABAGgGQAFgFAAgLQAAgLgFgGQgEgFgKAAIgMAAg");
	this.shape_37.setTransform(32.5,389.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D41F38").s().p("AgoBIIAAiOIBPAAIAAAYIgyAAIAAAhIAvAAIAAAWIgvAAIAAAnIA0AAIAAAYg");
	this.shape_38.setTransform(107.9,366.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D41F38").s().p("AgZBFQgJgEgEgKQgEgJgDgPQgBgOAAgRQAAgSADgOQACgNAFgKQAGgJAJgEQAJgFANAAQAYAAAKAMQALAMAAAVIgcAAIgBgIIgDgIQgCgDgDgCQgDgDgEAAQgKAAgFAMQgEAMAAAaIABAXIADARQABAIAFADQADAEAGAAIAFgBQAEgBACgDQADgDABgEQADgFAAgFIAAgPIgTAAIAAgUIAuAAIAABMIgVAAIAAgNIgBAAQgEAIgIADQgHAEgKAAQgMAAgJgFg");
	this.shape_39.setTransform(97.2,366.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D41F38").s().p("AAOBIIgihjIAAAAIAABjIgbAAIAAiOIAiAAIAiBhIAAAAIAAhhIAbAAIAACOg");
	this.shape_40.setTransform(86,366.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D41F38").s().p("AAaBIIgHgeIglAAIgHAeIgdAAIAmiOIAiAAIAlCOgAAOASIgOg/IAAAAIgNA/IAbAAg");
	this.shape_41.setTransform(74.7,366.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D41F38").s().p("AARBIIAAhAIggAAIAABAIgdAAIAAiOIAdAAIAAA2IAgAAIAAg2IAdAAIAACOg");
	this.shape_42.setTransform(63.6,366.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D41F38").s().p("AgXBFQgKgFgFgKQgFgKgCgOQgBgNAAgRQAAgPABgOQACgNAFgKQAFgKAKgFQAKgGAOAAQAQAAAJAFQAJAFAEAIQAEAIABAIIACARIgdAAQAAgPgDgIQgFgHgJAAQgFAAgDADQgDADgDAHQgCAGgBALIAAAYIABAbQABAKADAFQABAGAEABQADACAEAAIAIgBQADgBACgEQACgEACgHIABgTIAdAAQAAAMgCAKQgCALgFAHQgFAIgIAFQgJAEgPAAQgOAAgKgFg");
	this.shape_43.setTransform(52.7,366.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D41F38").s().p("AAVBIIgVgxIgUAxIgfAAIAkhIIgihGIAhAAIARAuIASguIAfAAIghBGIAjBIg");
	this.shape_44.setTransform(42,366.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D41F38").s().p("AgoBIIAAiOIBPAAIAAAYIgyAAIAAAhIAvAAIAAAWIgvAAIAAAnIA0AAIAAAYg");
	this.shape_45.setTransform(32.1,366.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D41F38").s().p("AAlBIIAAhyIAAAAIgaByIgVAAIgZhyIgBAAIAAByIgaAAIAAiOIAqAAIAUBkIAVhkIArAAIAACOg");
	this.shape_46.setTransform(88.3,342.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D41F38").s().p("AATBIIgdg7IgLAQIAAArIgdAAIAAiOIAdAAIAAA5IAkg5IAgAAIgnA9IAqBRg");
	this.shape_47.setTransform(76.3,342.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D41F38").s().p("AgUBFQgJgEgFgIQgFgIgDgNQgCgNAAgTIABgcQABgNAFgLQAFgKAIgHQAJgGAPAAQANAAAJAEQAIAEAFAIQAFAIADANQABANAAATIgBAbQgBAOgEAKQgEALgJAGQgJAGgQAAQgMAAgIgDgAgHgyQgDADgBAFIgDAPIgBAXIAAAOIABAWIADANQACAFACACQAEACADAAQAFAAADgDQADgCACgFIACgPIABgXIAAgOIgBgWIgCgOQgDgEgCgCQgDgCgFAAQgEAAgDACg");
	this.shape_48.setTransform(65.4,342.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D41F38").s().p("AgVBFQgIgEgFgIQgFgIgCgNQgCgNAAgTIABgcQAAgNAFgLQAEgKAKgHQAIgGAPAAQANAAAJAEQAIAEAFAIQAFAIACANQACANAAATIgBAbQAAAOgFAKQgEALgKAGQgIAGgQAAQgMAAgJgDgAgHgyQgDADgCAFIgCAPIAAAXIAAAOIAAAWIACANQACAFAEACQADACADAAQAFAAADgDQADgCACgFIACgPIAAgXIAAgOIAAgWIgCgOQgCgEgEgCQgDgCgEAAQgEAAgDACg");
	this.shape_49.setTransform(55.8,342.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D41F38").s().p("AgXBDQgIgDgEgHQgFgGgBgGIgCgNIAAgEIAcAAIAAAIIACAHQACAEADACQACACAFABQAIAAAEgIQAEgHAAgNIgBgPQgBgGgCgDQgCgDgDgBQgDgCgEAAQgGAAgDAEQgEACAAAHIgaAAIAFhNIBJAAIAAAXIgzAAIgDAgQAEgFAGgDQAGgCAJgBQAKAAAHAFQAHAEADAGQAEAHACAGQACAJAAAIQAAAMgCAKQgCAJgGAHQgFAGgIAEQgJADgNABQgNgBgJgDg");
	this.shape_50.setTransform(46.1,343);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D41F38").s().p("AgMASQAFgBACgFQADgFAAgFIAAgCIgKAAIAAgfIAZAAIAAAaIgBANQgBAHgDAFQgDAFgFADQgEADgIABg");
	this.shape_51.setTransform(39,349.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D41F38").s().p("AgrBHQAAgKACgIQACgIAEgHQAEgIAGgHQAGgHAIgHIALgKIAHgIIAEgHIACgIIABgJQAAgSgOAAQgEAAgEACQgDACgBAEQgCAEgBAFIAAALIgcAAIAAgGQAAgUALgKQALgLAVAAQAWAAAKAKQALAKAAATIgBAMIgEAMQgDAFgEAEIgKALIgQAPQgGAFgDAGQgEAFgBAEIA1AAIAAAXg");
	this.shape_52.setTransform(31.7,342.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D41F38").s().p("AghBKIAsiTIAXAAIgsCTg");
	this.shape_53.setTransform(88.8,319);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D41F38").s().p("AgNBHIAAg4IgmhVIAhAAIASA3IAUg3IAgAAIglBVIAAA4g");
	this.shape_54.setTransform(80.3,319.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D41F38").s().p("AAaBHIgHgeIglAAIgHAeIgdAAIAliNIAjAAIAlCNgAAOARIgNg/IgBAAIgNA/IAbAAg");
	this.shape_55.setTransform(70.6,319.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D41F38").s().p("AguBHIAAiNIAuAAQAPAAAJAEQAJAFAFAKQAFAIACANQACAOAAAPQAAASgCAOQgDAOgFAIQgGAKgJAEQgKAFgNgBgAgSAyIANAAQAHAAAEgCQAFgDADgGQACgGABgKIABgXIgBgWQAAgJgDgGQgCgGgFgDQgFgDgHAAIgNAAg");
	this.shape_56.setTransform(59.5,319.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D41F38").s().p("AgbAMIAAgXIA3AAIAAAXg");
	this.shape_57.setTransform(49.9,320.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D41F38").s().p("AgVBFQgIgEgFgIQgFgIgCgNQgCgNAAgTIABgcQAAgNAFgLQAEgKAKgHQAIgGAPAAQANAAAJAEQAIAEAFAIQAFAIACANQACANAAATIgBAbQAAAOgFAKQgEALgKAGQgIAGgQAAQgMAAgJgDgAgHgyQgDADgCAFIgCAPIAAAXIAAAOIAAAWIACANQACAFAEACQADACADAAQAFAAADgDQADgCACgFIACgPIAAgXIAAgOIAAgWIgCgOQgCgEgEgCQgDgCgEAAQgEAAgDACg");
	this.shape_58.setTransform(41.4,319.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D41F38").s().p("AghA9QgKgLAAgVIAAgBIAbAAQABANADAGQADAHAJAAQAEAAAEgCQADgCABgDIACgHIABgJIgBgJQAAgEgCgEQgCgDgEgCQgDgCgGAAIgJAAIAAgSIAJAAQAEAAADgCIAFgFIADgHIABgIQAAgLgDgEQgEgEgGAAQgEAAgDACQgDABgCADIgCAIIgBAJIgaAAQAAgVAKgLQALgKAUAAQATAAAKAJQALAJAAATQAAAMgFAIQgGAJgKACIAAAAQAOACAFAIQAGAJAAAOQAAAHgCAHQgBAIgGAGQgFAGgJAEQgJAEgOAAQgVAAgKgLg");
	this.shape_59.setTransform(31.8,319.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},150).to({state:[]},75).wait(225));

	// Roadside Assistance
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D41F38").s().p("AgoBIIAAiOIBPAAIAAAYIgyAAIAAAhIAvAAIAAAWIgvAAIAAAnIA0AAIAAAYg");
	this.shape_60.setTransform(121.2,366.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D41F38").s().p("AgXBFQgKgFgFgKQgFgKgCgOQgBgNAAgRQAAgPABgOQACgNAFgKQAFgKAKgFQAKgGAOAAQAQAAAJAFQAJAFAEAIQAEAIABAIIACARIgdAAQAAgPgDgIQgFgHgJAAQgFAAgDADQgDADgDAHQgCAGgBALIAAAYIABAbQABAKADAFQABAGAEABQADACAEAAIAIgBQADgBACgEQACgEACgHIABgTIAdAAQAAAMgCAKQgCALgFAHQgFAIgIAFQgJAEgPAAQgOAAgKgFg");
	this.shape_61.setTransform(110.8,366.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D41F38").s().p("AAOBIIgihjIAAAAIAABjIgbAAIAAiOIAhAAIAiBhIABAAIAAhhIAbAAIAACOg");
	this.shape_62.setTransform(99.7,366.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D41F38").s().p("AAaBIIgHgeIglAAIgHAeIgeAAIAmiOIAjAAIAlCOgAAOASIgOg/IAAAAIgNA/IAbAAg");
	this.shape_63.setTransform(88.4,366.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D41F38").s().p("AgNBIIAAh2IggAAIAAgYIBaAAIAAAYIgfAAIAAB2g");
	this.shape_64.setTransform(79.1,366.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D41F38").s().p("AgkA/QgLgKABgUIAAgGIAcAAIAAAEIABAJQABAFACACQACADAEACQAEABAEAAQAHAAAFgEQAFgEABgJQgBgFgBgEQgBgDgDgDQgDgDgFgCIgLgFQgKgDgHgEQgHgDgEgFQgFgFgDgGQgBgHAAgJQAAgVALgKQAMgLAVAAQAIAAAJACQAHACAGAFQAGAFADAHQAEAHAAALIAAAEIgcAAQAAgLgEgFQgDgGgIAAQgEAAgDACIgGADQgBADgBADIgBAGQAAAHADAEQADAFAJADIAVAKIAOAGQAFAEADAFQADAEABAGQACAFgBAHQABAWgNALQgOAKgWAAQgZAAgKgLg");
	this.shape_65.setTransform(69.2,366.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D41F38").s().p("AgNBIIAAiOIAbAAIAACOg");
	this.shape_66.setTransform(61.4,366.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D41F38").s().p("AgkA/QgLgKAAgUIAAgGIAdAAIAAAEIABAJQABAFACACQACADAEACQADABAFAAQAHAAAFgEQAGgEAAgJQAAgFgCgEQgBgDgDgDQgDgDgFgCIgLgFQgKgDgHgEQgHgDgEgFQgFgFgCgGQgCgHAAgJQgBgVAMgKQAMgLAUAAQAJAAAIACQAJACAGAFQAFAFADAHQAEAHAAALIAAAEIgcAAQAAgLgDgFQgEgGgIAAQgEAAgDACIgGADQgCADAAADIgBAGQAAAHADAEQADAFAJADIAVAKIANAGQAGAEADAFQADAEABAGQABAFABAHQgBAWgNALQgNAKgWAAQgYAAgLgLg");
	this.shape_67.setTransform(53.7,366.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D41F38").s().p("AgkA/QgLgKAAgUIAAgGIAdAAIAAAEIABAJQABAFACACQACADAEACQADABAFAAQAHAAAFgEQAGgEAAgJQAAgFgCgEQgBgDgDgDQgDgDgFgCIgLgFQgKgDgHgEQgHgDgEgFQgFgFgCgGQgCgHAAgJQgBgVAMgKQAMgLAUAAQAJAAAIACQAJACAFAFQAGAFAEAHQADAHAAALIAAAEIgcAAQAAgLgDgFQgEgGgIAAQgEAAgDACIgGADQgCADAAADIgBAGQAAAHADAEQADAFAJADIAVAKIANAGQAGAEADAFQADAEABAGQABAFABAHQgBAWgNALQgNAKgWAAQgYAAgLgLg");
	this.shape_68.setTransform(43.3,366.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D41F38").s().p("AAZBIIgGgeIglAAIgHAeIgdAAIAliOIAjAAIAlCOgAAOASIgOg/IAAAAIgNA/IAbAAg");
	this.shape_69.setTransform(32.6,366.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D41F38").s().p("AgoBIIAAiOIBPAAIAAAXIgyAAIAAAiIAvAAIAAAXIgvAAIAAAmIA0AAIAAAYg");
	this.shape_70.setTransform(103.8,342.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D41F38").s().p("AguBIIAAiOIAuAAQAPAAAJAEQAJAGAFAJQAFAJACAMQACANAAAQQAAASgCAOQgDAOgFAJQgGAIgJAFQgKAFgNAAgAgSAyIANAAQAHAAAEgDQAFgCADgGQACgGABgKIABgXIgBgWQAAgIgDgHQgCgGgFgDQgFgDgHAAIgNAAg");
	this.shape_71.setTransform(93.1,342.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D41F38").s().p("AgNBIIAAiOIAbAAIAACOg");
	this.shape_72.setTransform(84.7,342.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D41F38").s().p("AgkA/QgLgKAAgUIAAgGIAdAAIAAAEIABAJQABAFACACQACADAEACQAEABAEAAQAHAAAFgEQAGgEgBgJQAAgFgBgEQgBgDgDgDQgDgDgFgCIgLgFQgKgDgHgEQgHgDgFgFQgEgFgCgGQgCgHgBgJQAAgVAMgKQAMgLAUAAQAJAAAIACQAIACAHAFQAFAFAEAHQADAHAAALIAAAEIgcAAQAAgLgDgFQgEgGgIAAQgEAAgDACIgGADQgCADAAADIgBAGQAAAHADAEQADAFAJADIAVAKIANAGQAGAEADAFQADAEABAGQABAFABAHQgBAWgNALQgNAKgWAAQgYAAgLgLg");
	this.shape_73.setTransform(77,342.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D41F38").s().p("AguBIIAAiOIAuAAQAPAAAJAEQAJAGAFAJQAFAJACAMQACANAAAQQAAASgCAOQgDAOgFAJQgGAIgJAFQgKAFgNAAgAgSAyIANAAQAHAAAEgDQAFgCADgGQACgGABgKIABgXIgBgWQAAgIgDgHQgCgGgFgDQgFgDgHAAIgNAAg");
	this.shape_74.setTransform(66.2,342.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D41F38").s().p("AAaBIIgHgfIglAAIgGAfIgeAAIAmiOIAiAAIAlCOgAAOASIgNg/IgBAAIgNA/IAbAAg");
	this.shape_75.setTransform(54.8,342.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D41F38").s().p("AgYBFQgLgFgFgKQgEgKgCgOQgBgNgBgRQABgPABgOQACgNAEgKQAFgKALgFQAJgGAPAAQAQAAAKAGQAKAFAFAKQAEAKACANQABAOABAPQgBARgBANQgCAOgEAKQgFAKgKAFQgKAFgQAAQgPAAgJgFgAgJgxQgEADgCAHQgCAGgBAKIgBAXIABAZQABAKACAGQACAHAEACQAEADAFAAQAGAAAFgDQADgCACgHQACgGABgKIABgZIgBgXQgBgKgCgGQgCgHgDgDQgFgDgGAAQgFAAgEADg");
	this.shape_76.setTransform(43.7,342.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D41F38").s().p("AARBIQgCgEgBgDIAAgJIgBgbQAAgJgFgEQgDgFgJAAIgPAAIAAA9IgdAAIAAiOIA0AAQASAAAKAJQALAJgBATQABAOgGAJQgGAJgMACIAAAAQALACAEAFQAFAGACAMIAAAIIABALIABARQACAGAEADIAAABgAgTgIIANAAQAIAAAGgFQAGgFAAgMQAAgTgTAAIgOAAg");
	this.shape_77.setTransform(32.9,342.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D41F38").s().p("AARBHQgCgDAAgDIgBgIIgBgcQgBgIgEgFQgEgFgHAAIgPAAIAAA8IgdAAIAAiNIA0AAQARgBALAKQAKAJAAATQgBAOgFAJQgGAJgMACIAAAAQALACAEAFQAFAFACAMIABAJIAAAKIABASQACAGAEACIAAABgAgSgIIALAAQAKAAAFgFQAGgEAAgNQAAgTgTAAIgNAAg");
	this.shape_78.setTransform(63.2,319.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D41F38").s().p("AARBHIAAg/IggAAIAAA/IgeAAIAAiNIAeAAIAAA3IAgAAIAAg3IAdAAIAACNg");
	this.shape_79.setTransform(51.8,319.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D41F38").s().p("AAFBHIAAgeIgxAAIAAgXIAuhYIAdAAIAABZIAOAAIAAAWIgOAAIAAAegAgWATIAbAAIAAg1g");
	this.shape_80.setTransform(41.4,319.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D41F38").s().p("AgrBHQAAgKACgIQACgIAEgHQAEgIAGgHQAGgHAIgHIALgKIAHgIIAEgHIACgIIABgJQAAgSgOAAQgEAAgEACQgDACgBAEQgCAEgBAFIAAALIgcAAIAAgGQAAgUALgKQALgLAVAAQAWAAAKAKQALAKAAATIgBAMIgEAMQgDAFgEAEIgKALIgQAPQgGAFgDAGQgEAFgBAEIA1AAIAAAXg");
	this.shape_81.setTransform(31.7,319.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},225).to({state:[]},75).wait(150));

	// Warranty
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D41F38").s().p("AgoBHIAAiOIBPAAIAAAYIgyAAIAAAiIAvAAIAAAWIgvAAIAAAnIA0AAIAAAXg");
	this.shape_82.setTransform(148.5,413.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D41F38").s().p("AgnBHIAAiOIAdAAIAAB3IAyAAIAAAXg");
	this.shape_83.setTransform(139.2,413.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D41F38").s().p("AgXBFQgKgFgFgKQgFgKgCgOQgBgNAAgRQAAgPABgOQACgNAFgKQAFgKAKgFQAKgGAOAAQAQAAAJAFQAJAFAEAIQAEAIABAIIACARIgdAAQAAgPgDgIQgFgHgJAAQgFAAgDADQgEADgBAHQgDAGgBALIAAAYIABAbQABAKADAFQACAGADABQADACAEAAIAHgBQADgBADgEQACgEACgHIABgTIAdAAQAAAMgCAKQgBALgGAHQgEAIgJAFQgJAEgPAAQgOAAgKgFg");
	this.shape_84.setTransform(128.9,413.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D41F38").s().p("AgNBHIAAiOIAbAAIAACOg");
	this.shape_85.setTransform(120.9,413.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D41F38").s().p("AARBHIAAg/IghAAIAAA/IgdAAIAAiOIAdAAIAAA4IAhAAIAAg4IAcAAIAACOg");
	this.shape_86.setTransform(112.8,413.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D41F38").s().p("AgoBHIAAiOIBPAAIAAAYIgyAAIAAAiIAvAAIAAAWIgvAAIAAAnIA0AAIAAAXg");
	this.shape_87.setTransform(102.7,413.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D41F38").s().p("AgRBHIghiOIAfAAIATBpIAAAAIAWhpIAdAAIggCOg");
	this.shape_88.setTransform(92.4,413.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D41F38").s().p("AgoBHIAAiOIBPAAIAAAYIgyAAIAAAiIAvAAIAAAWIgvAAIAAAnIA0AAIAAAXg");
	this.shape_89.setTransform(78,413.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D41F38").s().p("AARBHIAAg/IghAAIAAA/IgdAAIAAiOIAdAAIAAA4IAhAAIAAg4IAcAAIAACOg");
	this.shape_90.setTransform(67.3,413.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D41F38").s().p("AgNBHIAAh2IggAAIAAgYIBaAAIAAAYIgeAAIAAB2g");
	this.shape_91.setTransform(57,413.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D41F38").s().p("AgnBHIAAiOIBPAAIAAAYIgyAAIAAAiIAvAAIAAAWIgvAAIAAA+g");
	this.shape_92.setTransform(43.1,413.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D41F38").s().p("AgZBFQgJgFgFgKQgFgKgCgOQgCgNABgRQgBgPACgOQACgNAFgKQAFgKAJgFQAKgGAPAAQARAAAJAGQAJAFAGAKQAFAKABANQACAOAAAPQAAARgCANQgBAOgFAKQgGAKgJAFQgJAFgRAAQgPAAgKgFgAgJgxQgEADgCAHQgCAGgBAKIAAAXIAAAZQABAKACAGQACAHAEACQADADAGAAQAGAAAEgDQAFgCACgHQACgGAAgKIABgZIgBgXQAAgKgCgGQgCgHgFgDQgEgDgGAAQgGAAgDADg");
	this.shape_93.setTransform(32.6,413.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D41F38").s().p("AgoBHIAAiOIBPAAIAAAZIgyAAIAAAhIAvAAIAAAWIgvAAIAAAnIA0AAIAAAXg");
	this.shape_94.setTransform(127.1,389.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D41F38").s().p("AgnBHIAAiOIBPAAIAAAZIgyAAIAAAhIAvAAIAAAWIgvAAIAAA+g");
	this.shape_95.setTransform(117.8,389.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D41F38").s().p("AgNBHIAAiOIAbAAIAACOg");
	this.shape_96.setTransform(110.2,389.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D41F38").s().p("AgnBHIAAiOIAdAAIAAB3IAyAAIAAAXg");
	this.shape_97.setTransform(103.4,389.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D41F38").s().p("AgoBHIAAiOIBPAAIAAAZIgyAAIAAAhIAvAAIAAAWIgvAAIAAAnIA0AAIAAAXg");
	this.shape_98.setTransform(89.1,389.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D41F38").s().p("AARBHIAAg/IggAAIAAA/IgdAAIAAiOIAdAAIAAA3IAgAAIAAg3IAdAAIAACOg");
	this.shape_99.setTransform(78.4,389.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D41F38").s().p("AgOBHIAAh1IgeAAIAAgZIBaAAIAAAZIggAAIAAB1g");
	this.shape_100.setTransform(68.1,389.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D41F38").s().p("AARBHQgCgCgBgFIgBgIIAAgbQgBgIgDgFQgFgFgIAAIgPAAIAAA8IgdAAIAAiOIA0AAQASAAAKAKQAKAJAAASQABAPgGAJQgGAJgMABIAAABQALACAEAFQAGAFABAMIAAAJIABAKIABASQACAGADACIAAABgAgTgIIANAAQAJAAAGgFQAFgEAAgMQAAgUgTAAIgOAAg");
	this.shape_101.setTransform(53.2,389.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D41F38").s().p("AgZBFQgJgFgGgKQgFgKgBgOQgBgNAAgRQAAgPABgOQABgNAFgKQAGgKAJgFQAKgGAPAAQARAAAJAGQAKAFAEAKQAGAKABANQABAOAAAPQAAARgBANQgBAOgGAKQgEAKgKAFQgJAFgRAAQgPAAgKgFgAgJgxQgEADgCAHQgDAGAAAKIAAAXIAAAZQAAAKADAGQACAHAEACQAEADAFAAQAHAAADgDQAEgCADgHQACgGAAgKIABgZIgBgXQAAgKgCgGQgDgHgEgDQgDgDgHAAQgFAAgEADg");
	this.shape_102.setTransform(41.8,389.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D41F38").s().p("AgnBHIAAiOIBPAAIAAAZIgyAAIAAAhIAvAAIAAAWIgvAAIAAA+g");
	this.shape_103.setTransform(32,389.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D41F38").s().p("AgOBIIAAg4IglhWIAhAAIASA3IAUg3IAgAAIglBWIAAA4g");
	this.shape_104.setTransform(112.5,366.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D41F38").s().p("AgOBIIAAh2IgeAAIAAgYIBaAAIAAAYIggAAIAAB2g");
	this.shape_105.setTransform(102.5,366.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D41F38").s().p("AAPBIIgihjIgBAAIAABjIgaAAIAAiOIAhAAIAhBhIABAAIAAhhIAaAAIAACOg");
	this.shape_106.setTransform(92,366.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D41F38").s().p("AAZBIIgGgeIglAAIgGAeIgfAAIAniOIAiAAIAmCOgAAOASIgNg/IgBAAIgNA/IAbAAg");
	this.shape_107.setTransform(80.7,366.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D41F38").s().p("AARBIQgCgEgBgEIgBgIIgBgbQAAgIgDgFQgFgFgIAAIgPAAIAAA9IgdAAIAAiOIA0AAQASgBAKAKQAKAJAAASQABAPgGAJQgGAJgMABIAAABQALACAEAFQAGAGABAMIAAAIIABALIABARQACAGADADIAAABgAgTgIIANAAQAJAAAGgFQAFgFAAgLQAAgUgTAAIgOAAg");
	this.shape_108.setTransform(69.9,366.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D41F38").s().p("AARBIQgCgEAAgEIgBgIIgBgbQAAgIgFgFQgEgFgHAAIgQAAIAAA9IgcAAIAAiOIA0AAQARgBALAKQAKAJAAASQgBAPgFAJQgGAJgMABIAAABQALACAEAFQAFAGACAMIABAIIAAALIABARQABAGAFADIAAABgAgTgIIAMAAQAKAAAFgFQAGgFAAgLQAAgUgTAAIgOAAg");
	this.shape_109.setTransform(58.8,366.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D41F38").s().p("AAZBIIgGgeIglAAIgGAeIgfAAIAniOIAiAAIAmCOgAAOASIgNg/IgBAAIgNA/IAbAAg");
	this.shape_110.setTransform(47.4,366.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D41F38").s().p("AAQBIIgQhnIgPBnIggAAIgaiOIAbAAIAQBpIABAAIAQhpIAbAAIAQBpIABAAIAQhpIAbAAIgaCOg");
	this.shape_111.setTransform(34.6,366.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D41F38").s().p("AAPBIIgihjIgBAAIAABjIgaAAIAAiOIAhAAIAhBhIABAAIAAhhIAaAAIAACOg");
	this.shape_112.setTransform(143.3,342.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D41F38").s().p("AgYBFQgLgFgFgKQgEgKgCgOQgBgNgBgRQABgPABgOQACgNAEgKQAFgKALgFQAJgGAPAAQAQAAAKAGQAKAFAEAKQAFAKACANQABAOABAPQgBARgBANQgCAOgFAKQgEAKgKAFQgKAFgQAAQgPAAgJgFgAgJgxQgEADgCAHQgDAGAAAKIgBAXIABAZQAAAKADAGQACAHAEACQAEADAFAAQAGAAAFgDQADgCACgHQADgGAAgKIABgZIgBgXQAAgKgDgGQgCgHgDgDQgFgDgGAAQgFAAgEADg");
	this.shape_113.setTransform(132,342.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D41F38").s().p("AgNBIIAAiOIAbAAIAACOg");
	this.shape_114.setTransform(123.8,342.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D41F38").s().p("AgkA/QgLgKAAgUIAAgGIAdAAIAAAEIABAJQABAFACACQACADAEACQAEABAEAAQAHAAAFgEQAGgEgBgJQAAgFgBgEQgBgDgDgDQgDgDgFgCIgLgFQgKgDgHgEQgHgDgFgFQgEgFgCgGQgCgHgBgJQAAgVAMgKQAMgLAUAAQAJAAAIACQAIACAHAFQAFAFAEAHQADAHAAALIAAAEIgcAAQAAgLgDgFQgEgGgIAAQgEAAgDACIgFADQgDADAAADIgBAGQAAAHADAEQADAFAJADIAVAKIANAGQAGAEADAFQADAEABAGQABAFABAHQgBAWgNALQgNAKgWAAQgYAAgLgLg");
	this.shape_115.setTransform(116.1,342.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D41F38").s().p("AgkA/QgLgKAAgUIAAgGIAdAAIAAAEIABAJQABAFACACQACADAEACQAEABAEAAQAHAAAFgEQAGgEgBgJQAAgFgBgEQgBgDgDgDQgDgDgFgCIgLgFQgKgDgHgEQgHgDgFgFQgEgFgCgGQgCgHgBgJQAAgVAMgKQAMgLAUAAQAJAAAIACQAIACAHAFQAFAFAEAHQADAHAAALIAAAEIgcAAQAAgLgDgFQgEgGgIAAQgEAAgDACIgFADQgDADAAADIgBAGQAAAHADAEQADAFAJADIAVAKIANAGQAGAEADAFQADAEABAGQABAFABAHQgBAWgNALQgNAKgWAAQgYAAgLgLg");
	this.shape_116.setTransform(105.8,342.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D41F38").s().p("AgNBIIAAiOIAbAAIAACOg");
	this.shape_117.setTransform(98,342.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D41F38").s().p("AAlBIIAAhyIgBAAIgZByIgVAAIgahyIAAAAIAAByIgbAAIAAiOIArAAIAUBkIAVhkIAqAAIAACOg");
	this.shape_118.setTransform(88,342.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D41F38").s().p("AgkA/QgLgKABgUIAAgGIAcAAIAAAEIABAJQABAFACACQACADAEACQAEABAEAAQAHAAAFgEQAFgEABgJQgBgFgBgEQgBgDgDgDQgDgDgFgCIgLgFQgKgDgHgEQgHgDgEgFQgFgFgDgGQgBgHAAgJQAAgVALgKQAMgLAVAAQAIAAAJACQAHACAGAFQAGAFADAHQAEAHAAALIAAAEIgcAAQAAgLgEgFQgDgGgIAAQgEAAgDACIgGADQgBADgBADIgBAGQAAAHADAEQADAFAJADIAVAKIAOAGQAFAEADAFQADAEABAGQACAFgBAHQABAWgNALQgOAKgWAAQgZAAgKgLg");
	this.shape_119.setTransform(75.5,342.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D41F38").s().p("AAOBIIgihjIAAAAIAABjIgbAAIAAiOIAhAAIAiBhIABAAIAAhhIAaAAIAACOg");
	this.shape_120.setTransform(64.6,342.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D41F38").s().p("AAZBIIgGgfIglAAIgHAfIgdAAIAliOIAjAAIAlCOgAAOASIgOg/IAAAAIgNA/IAbAAg");
	this.shape_121.setTransform(53.3,342.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D41F38").s().p("AARBIQgCgEAAgDIgBgJIgBgbQgBgJgEgEQgEgFgHAAIgQAAIAAA9IgcAAIAAiOIA0AAQARAAALAJQAKAJAAATQgBAOgFAJQgGAJgMACIAAAAQALACAEAFQAFAGACAMIABAIIAAALIABARQACAGAEADIAAABgAgTgIIAMAAQAKAAAFgFQAGgFAAgMQAAgTgTAAIgOAAg");
	this.shape_122.setTransform(42.5,342.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D41F38").s().p("AgOBIIAAh3IgeAAIAAgXIBaAAIAAAXIggAAIAAB3g");
	this.shape_123.setTransform(31.8,342.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D41F38").s().p("AghBKIAsiTIAXAAIgsCTg");
	this.shape_124.setTransform(88.7,319);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D41F38").s().p("AgoBHIAAiNIBPAAIAAAXIgyAAIAAAiIAvAAIAAAXIgvAAIAAAmIA0AAIAAAXg");
	this.shape_125.setTransform(80.9,319.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D41F38").s().p("AAOBHIghhjIgBAAIAABjIgaAAIAAiNIAgAAIAiBgIABAAIAAhgIAaAAIAACNg");
	this.shape_126.setTransform(70.1,319.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D41F38").s().p("AgNBHIAAiNIAbAAIAACNg");
	this.shape_127.setTransform(61.7,319.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D41F38").s().p("AgZBFQgIgEgFgKQgEgJgDgPQgBgOAAgRQAAgSACgOQADgNAGgKQAFgJAJgEQAKgFAMAAQAXAAALAMQAKAMAAAVIgbAAIgBgIIgDgIQgCgDgDgCQgDgDgFAAQgJAAgEAMQgFAMAAAaIAAAXIADARQADAIADADQAEAEAFAAIAHgBQADgBACgDQADgDABgEQACgFAAgFIAAgPIgTAAIAAgUIAvAAIAABMIgVAAIAAgNIAAAAQgFAIgIADQgIAEgIAAQgOAAgIgFg");
	this.shape_128.setTransform(53.6,319);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D41F38").s().p("AAPBHIgihjIgBAAIAABjIgaAAIAAiNIAgAAIAiBgIABAAIAAhgIAaAAIAACNg");
	this.shape_129.setTransform(42.4,319.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D41F38").s().p("AgoBHIAAiNIBPAAIAAAXIgyAAIAAAiIAvAAIAAAXIgvAAIAAAmIA0AAIAAAXg");
	this.shape_130.setTransform(32.1,319.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},300).to({state:[]},75).wait(75));

	// Myers Approved
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D41F38").s().p("AgnBAIgGgNIgFgKIgDgIQgLgUgOgJQARgOANAAQAIAAAFAIQAFAFAEAQQAZguAOgTQAMgQAJgGQAJgFAPAAQAKAAALADQgaARgeAnQgdAkgdA0g");
	this.shape_131.setTransform(13.8,319.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#201F20").s().p("AgKArIAAgZIAVAAIAAAZgAgKgRIAAgZIAVAAIAAAZg");
	this.shape_132.setTransform(148.8,278.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#201F20").s().p("AghA7IAAh1IBBAAIAAAUIgpAAIAAAcIAnAAIAAASIgnAAIAAAgIArAAIAAATg");
	this.shape_133.setTransform(143.1,276.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#201F20").s().p("AgOA7Igbh1IAZAAIAQBWIAAAAIAShWIAYAAIgbB1g");
	this.shape_134.setTransform(134.6,276.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#201F20").s().p("AAVA7IgFgZIgfAAIgFAZIgZAAIAfh1IAdAAIAfB1gAALAPIgLg0IAAAAIgKA0IAVAAg");
	this.shape_135.setTransform(126.2,276.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#201F20").s().p("AAOA7IAAg0IgbAAIAAA0IgYAAIAAh1IAYAAIAAAtIAbAAIAAgtIAYAAIAAB1g");
	this.shape_136.setTransform(117,276.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#201F20").s().p("AgdA0QgJgIAAgRIAAgFIAYAAIAAADIAAAIQABAEACACIAFAEQADABADAAQAGAAAEgDQAFgEAAgIQAAgEgCgCQgBgEgCgCIgHgEIgJgEIgNgFQgGgDgEgEQgEgEgCgFQgBgGAAgIQAAgRAJgJQAKgIARAAQAHAAAHACQAGABAFAEQAFAEADAGQACAGAAAJIAAADIgWAAQAAgIgDgFQgDgFgHAAIgGABIgEAEIgCAEIgBAFQAAAGADADQACAEAIADIARAIIALAFIAHAHQACAEABAFIABAJQAAATgLAIQgKAJgTAAQgUAAgIgJg");
	this.shape_137.setTransform(104.2,276.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#201F20").s().p("AghA7IAAh1IBBAAIAAAUIgpAAIAAAcIAnAAIAAASIgnAAIAAAgIArAAIAAATg");
	this.shape_138.setTransform(96.2,276.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#201F20").s().p("AggA7IAAh1IAYAAIAABiIApAAIAAATg");
	this.shape_139.setTransform(88.5,276.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#201F20").s().p("AgTA4QgIgEgEgIQgFgIgBgLIgBgZIABgYQABgLAFgIQAEgIAIgEQAIgFAMAAQANAAAHAEQAHAEAEAGQAEAHABAHIABAOIgYAAQAAgNgDgGQgDgGgIAAQgEAAgDADQgDACgBAFIgDAOIAAAUIABAXQABAHACAFQABAEADACQADACADAAQADAAADgBQADgBACgEQACgDABgGIABgPIAYAAQAAAKgCAIQgBAIgEAHQgEAGgIAEQgHAEgMAAQgMAAgIgFg");
	this.shape_140.setTransform(80,276.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#201F20").s().p("AgLA7IAAh1IAXAAIAAB1g");
	this.shape_141.setTransform(73.4,276.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#201F20").s().p("AAOA7IAAg0IgbAAIAAA0IgYAAIAAh1IAYAAIAAAtIAbAAIAAgtIAYAAIAAB1g");
	this.shape_142.setTransform(66.7,276.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#201F20").s().p("AghA7IAAh1IBBAAIAAAUIgpAAIAAAcIAnAAIAAASIgnAAIAAAgIArAAIAAATg");
	this.shape_143.setTransform(58.4,276.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#201F20").s().p("AgOA7Igbh1IAZAAIAQBWIAAAAIAShWIAYAAIgbB1g");
	this.shape_144.setTransform(50,276.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#201F20").s().p("AgmA7IAAh1IAmAAQAMAAAIAEQAHAEAFAIQAEAHABALQACALAAAMQAAAPgCALQgCAMgEAHQgFAIgIADQgIAEgLAAgAgOAqIAKAAQAGAAAEgCQADgDADgEQACgGABgIIAAgTIAAgSQgBgHgCgFQgDgFgDgCQgEgDgGAAIgKAAg");
	this.shape_145.setTransform(37.2,276.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#201F20").s().p("AghA7IAAh1IBBAAIAAAUIgpAAIAAAcIAnAAIAAASIgnAAIAAAgIArAAIAAATg");
	this.shape_146.setTransform(28.6,276.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#201F20").s().p("AgdA0QgJgIAAgRIAAgFIAYAAIAAADIAAAIQABAEACACIAFAEQADABADAAQAGAAAEgDQAFgEAAgIQAAgEgCgCQgBgEgCgCIgHgEIgJgEIgNgFQgGgDgEgEQgEgEgCgFQgBgGAAgIQAAgRAJgJQAKgIARAAQAHAAAHACQAGABAFAEQAFAEADAGQACAGAAAJIAAADIgWAAQAAgIgDgFQgDgFgHAAIgGABIgEAEIgCAEIgBAFQAAAGADADQACAEAIADIARAIIALAFIAHAHQACAEABAFIABAJQAAATgLAIQgKAJgTAAQgUAAgIgJg");
	this.shape_147.setTransform(20.1,276.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#201F20").s().p("AgNA7QgHgCgFgEQgFgEgDgHQgDgIAAgLIAAhSIAXAAIAABSIAAAIQABADACADIAEAEQADACADAAQAEAAADgCIAEgEIACgGIAAgIIAAhSIAZAAIAABSQAAALgDAHQgEAIgFADQgGAFgGACIgOABQgGAAgHgBg");
	this.shape_148.setTransform(11.5,276.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#201F20").s().p("AgmA7IAAh1IAmAAQAMAAAIAEQAHAFAEAHQAFAHACALQABAKAAANQAAAPgCALQgCAMgFAHQgEAHgIAFQgIADgKAAgAgPApIALAAQAFAAAEgBQAEgDACgFQACgEABgJIABgTIgBgSQgBgHgCgFQgBgFgFgDQgEgCgFAAIgLAAg");
	this.shape_149.setTransform(123.2,257);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#201F20").s().p("AghA7IAAh1IBBAAIAAATIgpAAIAAAcIAnAAIAAATIgnAAIAAAgIArAAIAAATg");
	this.shape_150.setTransform(114.6,257);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#201F20").s().p("AgOA7Igbh1IAZAAIAQBXIAAAAIAShXIAYAAIgbB1g");
	this.shape_151.setTransform(106.1,257);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#201F20").s().p("AgVA5QgHgFgEgIQgFgIgBgLIgBgZIABgXQABgMAFgIQAEgIAHgFQAJgEAMAAQANAAAIAEQAIAFAEAIQAFAIABAMIABAXIgBAZQgBALgFAIQgEAIgIAFQgIAEgNAAQgMAAgJgEgAgHgoQgEACgCAGQgCAEAAAJIAAATIAAAVQAAAHACAGQACAFAEACQADADAEAAQAFAAAEgDQADgCABgFIACgNIABgVIgBgTQAAgJgCgEQgBgGgDgCQgEgCgFAAQgEAAgDACg");
	this.shape_152.setTransform(97.3,257);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#201F20").s().p("AAPA7QgCgDgBgDIgBgGIgBgXQAAgHgDgEQgDgEgGAAIgNAAIAAAyIgYAAIAAh1IArAAQAPAAAIAIQAIAHAAAPQAAAMgEAIQgFAHgKACIAAAAQAJABAEAEQAEAFABAKIAAAHIABAJIABAOQABAFADACIAAABgAgPgGIAKAAQAIAAAEgFQAFgDgBgKQAAgQgOAAIgMAAg");
	this.shape_153.setTransform(88.4,257);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#201F20").s().p("AgkA7IAAh1IApAAQAJAAAGADQAGAEAEAEQAEAFACAGIABAOQAAAJgCAHQgEAGgEAEQgFADgHADQgHACgIAAIgMAAIAAAvgAgMgEIALAAQAFgBAFgEQAFgEgBgJQAAgJgDgFQgEgEgIAAIgKAAg");
	this.shape_154.setTransform(79.5,257);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#201F20").s().p("AgkA7IAAh1IApAAQAJAAAGADQAGAEAEAEQAEAFACAGIABAOQAAAJgCAHQgEAGgEAEQgFADgHADQgHACgIAAIgMAAIAAAvgAgMgEIALAAQAFgBAFgEQAFgEgBgJQAAgJgDgFQgEgEgIAAIgKAAg");
	this.shape_155.setTransform(71,257);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#201F20").s().p("AAVA7IgFgZIgfAAIgFAZIgZAAIAfh1IAdAAIAfB1gAAMAOIgMg0IAAAAIgKA0IAWAAg");
	this.shape_156.setTransform(61.9,257);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#201F20").s().p("AgdA0QgJgJAAgQIAAgFIAYAAIAAADIAAAIQABADACADIAFADQADACADAAQAGAAAEgDQAFgEAAgHQAAgFgCgDQgBgCgCgDIgHgEIgJgEIgNgFQgGgDgEgEQgEgEgCgFQgBgGAAgHQAAgSAJgIQAKgJARAAQAHAAAHACQAGACAFADQAFAEADAGQACAGAAAIIAAAEIgWAAQAAgJgDgEQgDgFgHABIgGABIgEACIgCAFIgBAFQAAAFADAEQACAEAIADIARAIIALAFIAHAHQACAEABAEIABAKQAAATgLAIQgKAJgTAAQgUAAgIgJg");
	this.shape_157.setTransform(49.1,257);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#201F20").s().p("AAPA7QgDgDAAgDIgBgGIgBgXQAAgHgCgEQgEgEgGAAIgNAAIAAAyIgYAAIAAh1IArAAQAPAAAIAIQAJAHAAAPQAAAMgGAIQgEAHgKACIAAAAQAJABAEAEQAEAFABAKIABAHIAAAJIABAOQABAFADACIAAABgAgPgGIAKAAQAHAAAFgFQAFgDgBgKQABgQgQAAIgLAAg");
	this.shape_158.setTransform(40.5,257);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#201F20").s().p("AghA7IAAh1IBBAAIAAATIgpAAIAAAcIAnAAIAAATIgnAAIAAAgIArAAIAAATg");
	this.shape_159.setTransform(31.9,257);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#201F20").s().p("AgLA7IAAguIgehHIAaAAIAPAuIAAAAIAQguIAaAAIgeBHIAAAug");
	this.shape_160.setTransform(23.5,257);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#201F20").s().p("AAeA7IAAhdIgVBdIgRAAIgVhdIgBAAIAABdIgVAAIAAh1IAjAAIAQBSIARhSIAjAAIAAB1g");
	this.shape_161.setTransform(13.1,257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]}).to({state:[]},375).wait(75));

	// Subtitle
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D41F38").s().p("AgOBOIAAgdIAdAAIAAAdgAgKAjIgEg9IAAgzIAdAAIAAAzIgEA9g");
	this.shape_162.setTransform(149.8,380.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D41F38").s().p("AgrBOIAAibIBVAAIAAAaIg2AAIAAAkIAzAAIAAAZIgzAAIAAAqIA4AAIAAAag");
	this.shape_163.setTransform(141.7,380.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D41F38").s().p("AgqBOIAAibIAfAAIAACBIA2AAIAAAag");
	this.shape_164.setTransform(131.6,380.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D41F38").s().p("AgZBKQgKgFgGgLQgGgKgCgPQgBgPAAgSQAAgQABgPQACgPAGgLQAGgKAKgGQAKgGARAAQARAAAJAFQAKAGAEAIQAGAIAAAKIACASIgfAAQAAgRgFgIQgDgHgLAAQgFAAgEADQgDADgDAHQgCAHgBAMIAAAaIABAdQABALACAGQACAGAFACQADACAFAAQAEAAADgCQADgBADgEQADgFACgHQABgIAAgMIAfAAQAAAMgCALQgCAMgFAIQgGAJgJAEQgJAFgQAAQgRAAgKgGg");
	this.shape_165.setTransform(120.4,380.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D41F38").s().p("AgPBOIAAibIAfAAIAACbg");
	this.shape_166.setTransform(111.8,380.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D41F38").s().p("AASBOIAAhFIgkAAIAABFIgeAAIAAibIAeAAIAAA8IAkAAIAAg8IAgAAIAACbg");
	this.shape_167.setTransform(103,380.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D41F38").s().p("AgrBOIAAibIBVAAIAAAaIg2AAIAAAkIAzAAIAAAZIgzAAIAAAqIA4AAIAAAag");
	this.shape_168.setTransform(92,380.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#D41F38").s().p("AgTBOIgkibIAiAAIAVByIAAAAIAXhyIAhAAIgkCbg");
	this.shape_169.setTransform(80.9,380.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#D41F38").s().p("AgyBOIAAibIAyAAQAQAAAKAGQAKAFAGAKQAFAKACAOQACAOAAARQAAAUgCAPQgDAOgGAKQgGAKgKAEQgLAFgOABgAgTA3IAOAAQAHgBAFgCQAFgDADgGQADgHABgLIABgZIgBgYQgBgKgDgGQgCgHgGgDQgFgEgIABIgNAAg");
	this.shape_170.setTransform(64,380.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D41F38").s().p("AgrBOIAAibIBVAAIAAAaIg2AAIAAAkIAzAAIAAAZIgzAAIAAAqIA4AAIAAAag");
	this.shape_171.setTransform(52.7,380.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D41F38").s().p("AgoBFQgLgMABgVIAAgHIAeAAIAAAFIACAKQAAAEADADQACADAEACQAEACAFAAQAHAAAGgFQAGgEAAgKQAAgGgBgDQgCgEgEgDQgDgDgFgDIgMgFQgLgDgHgEQgHgEgGgFQgFgGgCgHQgCgHgBgKQAAgXANgLQANgLAXAAQAJAAAJACQAIACAHAFQAGAFAEAIQADAIABALIAAAFIgeAAQgBgLgEgGQgEgGgIAAQgFAAgDABIgGAEQgCADAAADIgBAHQAAAHACAFQAEAFAKAEIAXAKIAPAHQAFAFAEAFQADAEABAGQABAGAAAHQAAAZgOALQgOALgZAAQgaAAgMgLg");
	this.shape_172.setTransform(41.6,380.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D41F38").s().p("AgSBNQgIgCgHgFQgHgGgFgJQgEgKAAgQIAAhrIAfAAIAABrIACALQAAAFADAEQACADADACQAEACAEAAQAFAAAEgCQADgCACgDIADgJIABgLIAAhrIAfAAIAABrQAAAPgEAKQgEAJgHAGQgHAGgIACQgJACgKAAQgJAAgJgCg");
	this.shape_173.setTransform(30.2,380.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D41F38").s().p("AAcBOIgHghIgpAAIgHAhIggAAIApibIAlAAIApCbgAAPATIgPhFIAAAAIgOBFIAdAAg");
	this.shape_174.setTransform(13.1,380.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D41F38").s().p("AgeBTQgKgGgGgLQgGgMgCgRQgBgRAAgUQAAgWACgQQADgRAHgLQAHgKALgGQALgFAPgBQAcABANAOQAMAOAAAZIghAAIgBgKQgBgEgCgFQgDgEgDgDQgEgCgFAAQgMgBgFAOQgGAOAAAhIABAbQABAMADAJQACAIAFAGQAEAEAHAAQADAAAEgCQADgCAEgDQADgDACgGQACgEAAgIIAAgRIgXAAIAAgZIA4AAIAABcIgZAAIAAgQIgBAAQgGALgJADQgIAFgMAAQgPgBgKgFg");
	this.shape_175.setTransform(146.1,353.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D41F38").s().p("AASBWIgqh3IAAAAIAAB3IggAAIAAirIAoAAIApB1IAAAAIAAh1IAgAAIAACrg");
	this.shape_176.setTransform(132.5,353.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D41F38").s().p("AgQBWIAAirIAiAAIAACrg");
	this.shape_177.setTransform(122.6,353.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D41F38").s().p("AgQBWIAAhEIgthnIAnAAIAWBDIAAAAIAYhDIAmAAIgtBnIAABEg");
	this.shape_178.setTransform(113.3,353.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D41F38").s().p("AgUBVQgJgCgIgGQgIgFgEgMQgFgKAAgSIAAh2IAjAAIAAB2IAAANQABAFADAEQACAEAEACQAEADAFAAQAGAAAEgDQAEgCACgEQACgEABgFIABgNIAAh2IAjAAIAAB2QAAARgFAKQgFAMgHAFQgIAHgKACQgKACgKAAQgKAAgKgCg");
	this.shape_179.setTransform(100.6,353.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D41F38").s().p("Ag3BWIAAirIA5AAQAKAAAKADQAIACAHAFQAGAFAEAIQADAJAAAMQAAAOgGAKQgHAKgNADIAAABQAPACAJAJQAIAKAAASQAAAKgDAJQgCAJgHAHQgGAHgLAEQgJAEgPAAgAgVA8IAOAAQAMAAAHgFQAIgGAAgPQAAgHgCgFQgCgFgDgDQgEgDgFgBIgJgBIgQAAgAgVgOIAKAAQAOAAAGgFQAHgGAAgMQAAgMgGgFQgGgFgMAAIgNAAg");
	this.shape_180.setTransform(87.7,353.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D41F38").s().p("AgvBWIAAirIBfAAIAAAdIg8AAIAAAoIA4AAIAAAbIg4AAIAABLg");
	this.shape_181.setTransform(70,353.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D41F38").s().p("AgeBSQgLgGgHgMQgGgMgCgQQgBgQAAgUQAAgSABgQQACgRAGgMQAHgMALgGQALgGATgBQATABAMAGQALAGAHAMQAGAMACARQABAQAAASQAAAUgBAQQgCAQgGAMQgHAMgLAGQgMAHgTAAQgTAAgLgHgAgLg7QgFADgDAJQgCAHgBAMIgBAcIABAeQABAMACAHQADAIAFAEQAEADAHAAQAIAAAEgDQAFgEADgIQACgHABgMIABgeIgBgcQgBgMgCgHQgDgJgFgDQgEgEgIABQgHgBgEAEg");
	this.shape_182.setTransform(57.4,353.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D41F38").s().p("AgQBWIAAiOIgmAAIAAgdIBtAAIAAAdIgmAAIAACOg");
	this.shape_183.setTransform(39.2,353.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D41F38").s().p("AgUBVQgJgCgIgGQgIgFgEgMQgFgKAAgSIAAh2IAjAAIAAB2IAAANQABAFADAEQACAEAEACQAEADAFAAQAGAAAEgDQAEgCACgEQACgEABgFIABgNIAAh2IAjAAIAAB2QAAARgFAKQgFAMgHAFQgIAHgKACQgKACgKAAQgKAAgKgCg");
	this.shape_184.setTransform(27,353.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D41F38").s().p("AgeBSQgLgGgHgMQgGgMgCgQQgBgQAAgUQAAgSABgQQACgRAGgMQAHgMALgGQALgGATgBQATABAMAGQALAGAHAMQAGAMACARQABAQAAASQAAAUgBAQQgCAQgGAMQgHAMgLAGQgMAHgTAAQgTAAgLgHgAgLg7QgFADgDAJQgCAHgBAMIgBAcIABAeQABAMACAHQADAIAFAEQAEADAHAAQAIAAAEgDQAFgEADgIQACgHABgMIABgeIgBgcQgBgMgCgHQgDgJgFgDQgEgEgIABQgHgBgEAEg");
	this.shape_185.setTransform(13.9,353.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D41F38").s().p("AAaBoIgqhWIgPAYIAAA+IgqAAIAAjOIAqAAIAABSIABAAIA0hSIAtAAIg5BYIA/B2g");
	this.shape_186.setTransform(146,322.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D41F38").s().p("AAZBoQgDgFgBgFIgBgNIgCgnQAAgMgGgHQgFgHgMAAIgXAAIAABYIgpAAIAAjOIBMAAQAagBAPANQAOAOAAAbQAAAVgIANQgJANgRADIAAAAQAPADAHAIQAIAIABARIABANIABAOIACAaQABAIAGAEIAAACgAgcgMIASAAQAOAAAIgHQAIgIAAgQQAAgdgcAAIgUAAg");
	this.shape_187.setTransform(129.5,322.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D41F38").s().p("AgkBjQgOgHgHgOQgIgPgCgTQgCgUgBgYQABgWACgUQACgUAIgOQAHgOAOgIQAOgIAWAAQAXAAAOAIQAPAIAHAOQAHAOADAUQACAUAAAWQAAAYgCAUQgDATgHAPQgHAOgPAHQgOAIgXAAQgWAAgOgIgAgOhHQgGAEgDAJQgDAJgBAPIAAAiIAAAkQABAOADAKQADAJAGAEQAGAEAIAAQAJAAAGgEQAFgEAEgJQADgKABgOIABgkIgBgiQgBgPgDgJQgEgJgFgEQgGgFgJAAQgIAAgGAFg");
	this.shape_188.setTransform(113,322.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D41F38").s().p("AAXBoIgXiWIAAAAIgXCWIguAAIgmjOIAoAAIAXCYIABAAIAYiYIAnAAIAYCYIABAAIAXiYIAoAAIgmDOg");
	this.shape_189.setTransform(94,322.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D41F38").s().p("Ag1BcQgPgQAAgcIAAgJIAqAAIAAAGIABANQABAGADAEQAEAEAFADQAFACAIAAQAJAAAIgGQAHgGAAgOQAAgGgCgGQgBgEgFgFQgEgEgHgDIgRgHQgOgEgKgGQgKgFgHgHQgHgHgDgKQgDgKAAgMQAAgfARgPQARgPAeAAQANAAAMADQALADAJAHQAJAGAEALQAFALAAAOIAAAGIgoAAQAAgPgFgIQgFgIgMAAQgGAAgFACQgFACgCAEQgDADgBAFIgBAIQAAAKAEAHQAEAGANAGIAfANQAMAGAIAEQAHAGAFAHQAEAGACAIQACAIAAAJQAAAhgTAPQgTAPghAAQgjAAgQgPg");
	this.shape_190.setTransform(75.4,322.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D41F38").s().p("Ag1BcQgPgQAAgcIAAgJIAqAAIAAAGIABANQABAGADAEQAEAEAFADQAFACAIAAQAJAAAIgGQAHgGAAgOQAAgGgCgGQgBgEgFgFQgEgEgHgDIgRgHQgOgEgKgGQgKgFgHgHQgHgHgDgKQgDgKAAgMQAAgfARgPQARgPAeAAQANAAAMADQALADAJAHQAJAGAEALQAFALAAAOIAAAGIgoAAQAAgPgFgIQgFgIgMAAQgGAAgFACQgFACgCAEQgDADgBAFIgBAIQAAAKAEAHQAEAGANAGIAfANQAMAGAIAEQAHAGAFAHQAEAGACAIQACAIAAAJQAAAhgTAPQgTAPghAAQgjAAgQgPg");
	this.shape_191.setTransform(60.4,322.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#D41F38").s().p("Ag6BoIAAjOIBzAAIAAAiIhKAAIAAAwIBFAAIAAAiIhFAAIAAA3IBMAAIAAAjg");
	this.shape_192.setTransform(46.3,322.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D41F38").s().p("AgXBnQgMgDgKgHQgJgHgFgNQgGgNAAgVIAAiPIAqAAIAACPIAAAOQABAHADAFQADAFAFACQAFADAGAAQAIAAAEgDQAFgCADgFQACgFABgHIABgOIAAiPIAqAAIAACPQAAAUgGANQgFANgJAHQgJAIgNACQgLADgNAAQgLAAgMgCg");
	this.shape_193.setTransform(31.2,322.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D41F38").s().p("AglBkQgMgGgHgOQgHgOgCgVQgCgUAAgaQAAgaADgUQADgUAJgNQAIgNANgHQANgGATAAQAjAAAPARQAPARAAAfIgoAAIgCgMQgBgGgDgFQgDgFgEgDQgFgEgGAAQgOAAgHARQgHARAAAnIACAhQABAPADAKQADALAGAFQAFAGAIAAQAEAAAEgCQAFgCAEgEQAEgEACgGQADgHAAgIIAAgVIgcAAIAAgeIBEAAIAABvIgfAAIAAgTIAAAAQgIAMgKAFQgLAFgOAAQgTAAgMgHg");
	this.shape_194.setTransform(15.3,322.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D41F38").s().p("Ag4BjIAAjFIBuAAIAAAgIhGAAIAAAvIBCAAIAAAgIhCAAIAAA1IBJAAIAAAhg");
	this.shape_195.setTransform(146.6,288.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D41F38").s().p("AAXBjIAAhYIgtAAIAABYIgpAAIAAjFIApAAIAABLIAtAAIAAhLIAoAAIAADFg");
	this.shape_196.setTransform(131.8,288.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D41F38").s().p("AgTBjIAAilIgsAAIAAggIB+AAIAAAgIgrAAIAAClg");
	this.shape_197.setTransform(117.4,288.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D41F38").s().p("Ag4BjIAAjFIBuAAIAAAgIhGAAIAAAvIBCAAIAAAgIhCAAIAAA1IBJAAIAAAhg");
	this.shape_198.setTransform(97.7,288.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D41F38").s().p("AAaBjIgphRIgOAWIAAA7IgpAAIAAjFIApAAIAABPIAAAAIAyhPIArAAIg2BUIA9Bxg");
	this.shape_199.setTransform(84.1,288.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D41F38").s().p("AAkBjIgJgqIg1AAIgJAqIgqAAIA1jFIAxAAIA1DFgAATAZIgThZIAAAAIgSBZIAlAAg");
	this.shape_200.setTransform(67.9,288.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D41F38").s().p("AgTBjIAAilIgrAAIAAggIB+AAIAAAgIgsAAIAAClg");
	this.shape_201.setTransform(55,288.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D41F38").s().p("Ag4BjIAAjFIBuAAIAAAgIhGAAIAAAvIBCAAIAAAgIhCAAIAAA1IBJAAIAAAhg");
	this.shape_202.setTransform(35.4,288.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D41F38").s().p("AAWBjIgViPIgBAAIgWCPIgtAAIgkjFIAmAAIAXCRIABAAIAXiRIAmAAIAXCRIAAAAIAWiRIAnAAIglDFg");
	this.shape_203.setTransform(17.7,288.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},375).wait(75));

	// Myers Automotive Group - Logo - Color
	this.instance = new lib.MyersAutomotiveGroupLogoColor_1();
	this.instance.parent = this;
	this.instance.setTransform(79.5,525,1,1,0,0,0,52.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// Rectangle
	this.instance_1 = new lib.Rectangle_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,300,1,1,0,0,0,71,-211);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(450));

	// View Used Inventory
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#D41F38").s().p("AgKA2IAAgrIgbhAIAYAAIANAqIAAAAIAPgqIAXAAIgbBAIAAArg");
	this.shape_204.setTransform(143.8,571.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D41F38").s().p("AAMA2IgCgGIAAgGIgBgVQAAgGgCgDQgEgEgFAAIgMAAIAAAuIgVAAIAAhrIAmAAQAOABAIAGQAGAHAAAOQAAALgDAGQgFAIgJAAQAIACAEAEQADAEABAJIABAHIAAAIIABAMQABAFADACIAAABgAgOgGIAJAAQAHAAAEgDQAEgEAAgJQABgOgPAAIgKAAg");
	this.shape_205.setTransform(136.3,571.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D41F38").s().p("AgSAzQgHgDgEgIQgEgHgBgKQgBgLAAgMQAAgLABgKQABgLAEgHQAEgHAHgEQAHgEALAAQAMAAAHAEQAHAEAEAHQAEAHABALIABAVIgBAXQgBAKgEAHQgEAIgHADQgHAEgMAAQgLAAgHgEgAgHgkQgCACgCAFIgCAMIgBARIABATIACAMQACAFACACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_206.setTransform(127.8,571.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D41F38").s().p("AgKA2IAAhZIgXAAIAAgSIBDAAIAAASIgXAAIAABZg");
	this.shape_207.setTransform(120.1,571.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#D41F38").s().p("AALA2IgZhKIgBAAIAABKIgTAAIAAhrIAYAAIAZBIIABAAIAAhIIATAAIAABrg");
	this.shape_208.setTransform(112.3,571.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D41F38").s().p("AgdA2IAAhrIA6AAIAAASIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_209.setTransform(104.7,571.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#D41F38").s().p("AgNA2IgYhrIAXAAIAOBPIABAAIAPhPIAWAAIgYBrg");
	this.shape_210.setTransform(97.1,571.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D41F38").s().p("AALA2IgZhKIgBAAIAABKIgTAAIAAhrIAYAAIAZBIIABAAIAAhIIATAAIAABrg");
	this.shape_211.setTransform(89,571.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#D41F38").s().p("AgKA2IAAhrIAVAAIAABrg");
	this.shape_212.setTransform(82.8,571.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D41F38").s().p("AgiA2IAAhrIAiAAQALABAHADQAHADADAIQAEAGACAKIABAWQAAAMgCALQgBALgFAGQgDAHgIADQgGADgLABgAgMAlIAJAAQAFAAADgCQAEgCABgEQADgFAAgHIABgRIgBgQQAAgHgDgEQgBgFgEgDQgEgBgEAAIgJAAg");
	this.shape_213.setTransform(73.2,571.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#D41F38").s().p("AgdA2IAAhrIA6AAIAAASIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_214.setTransform(65.4,571.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D41F38").s().p("AgbAvQgHgIAAgOIAAgFIAVAAIAAADIABAHIACAFQABADADABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEIgNgFIgIgFQgEgEgBgFQgCgFAAgHQAAgQAJgIQAJgHAPAAQAGAAAGABQAGACAEADQAFAEACAFQADAGAAAHIAAADIgVAAQAAgHgDgEQgCgFgGAAIgFABIgEADIgCAEIgBAFQAAAFACADQADAEAGACIAQAIIAKAEIAGAHIADAHIABAJQAAARgKAIQgJAHgRAAQgSAAgIgIg");
	this.shape_215.setTransform(57.8,571.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D41F38").s().p("AgLA1QgHgBgFgEQgEgDgDgHQgDgHAAgLIAAhJIAWAAIAABJIAAAIIACAGIAEAEIAFABIAGgBIAEgEIACgGIAAgIIAAhJIAWAAIAABJQAAALgDAGQgDAHgEAEQgGAEgGABIgMABIgLgBg");
	this.shape_216.setTransform(50,571.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D41F38").s().p("AAMA2IgMhNIgLBNIgYAAIgThrIAUAAIAMBPIANhPIATAAIAMBPIABAAIAMhPIAUAAIgTBrg");
	this.shape_217.setTransform(36.8,571.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D41F38").s().p("AgdA2IAAhrIA6AAIAAASIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_218.setTransform(27.8,571.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#D41F38").s().p("AgKA2IAAhrIAVAAIAABrg");
	this.shape_219.setTransform(22.1,571.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#D41F38").s().p("AgNA2IgYhrIAXAAIAOBPIABAAIAPhPIAWAAIgYBrg");
	this.shape_220.setTransform(16.3,571.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]}).wait(450));

	// CTA Rectangle
	this.instance_2 = new lib.CTARectangle_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,571.5,1,1,0,0,0,71,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(450));

	// 2016 Vehicles
	this.instance_3 = new lib._2016Vehicles();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,130,1,1,0,0,0,120,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(450));

	// Background
	this.instance_4 = new lib.Background_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,258,600);
// library properties:
lib.properties = {
	id: '4D326542F9634AC2A0587BA432828BA8',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_.png", id:"17_10_MyersAutoGroup_AdWords_Used_160x600_atlas_"}
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
an.compositions['4D326542F9634AC2A0587BA432828BA8'] = {
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
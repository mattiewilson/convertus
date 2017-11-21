(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_", frames: [[302,68,116,50],[302,0,137,66],[302,120,93,52],[0,0,300,250],[302,174,150,29],[302,205,105,22],[0,252,300,250]]}
];


// symbols:



(lib._2016ChevroletCruze = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2016NissanRogue = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2016ToyotaCorolla = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Background = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CTARectangle = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.MyersAutomotiveGroupLogoColor = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle = function() {
	this.spriteSheet = ss["17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_"];
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
	mask.graphics.p("Ap/CRIAAkhITXAAQARAAALAMQAMAMAAAQIAADSQAAAQgMAMQgLALgRAAg");
	mask.setTransform(64,14.5);

	// Layer_1
	this.instance = new lib.Rectangle();
	this.instance.parent = this;
	this.instance.setTransform(0,-213);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rectangle_1, new cjs.Rectangle(0,0,128,29), null);


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

}).prototype = getMCSymbolPrototype(lib.CTARectangle_1, new cjs.Rectangle(0,0,150,29), null);


(lib.Background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background_1, new cjs.Rectangle(0,0,300,250), null);


(lib._2016ToyotaCorolla_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2016ToyotaCorolla();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2016ToyotaCorolla_1, new cjs.Rectangle(0,0,93,52), null);


(lib._2016NissanRogue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2016NissanRogue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2016NissanRogue_1, new cjs.Rectangle(0,0,137,66), null);


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
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// 2016 Nissan Rogue
	this.instance = new lib._2016NissanRogue_1();
	this.instance.parent = this;
	this.instance.setTransform(230.5,60,1,1,0,0,0,68.5,33);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:150.5,y:80,alpha:1},18,cjs.Ease.quadOut).wait(1));

	// 2016 Chevrolet Cruze
	this.instance_1 = new lib._2016ChevroletCruze_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148,50,1,1,0,0,0,58,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:68,y:70,alpha:1},18,cjs.Ease.quadOut).wait(11));

	// 2016 Toyota Corolla
	this.instance_2 = new lib._2016ToyotaCorolla_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(164.5,54,1,1,0,0,0,46.5,26);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:244.5,y:74,alpha:1},18,cjs.Ease.quadOut).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118,28,93,52);


// stage content:
(lib._17_10_MyersAutoGroup_AdWords_Used_300x250 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#D41F38").s().p("AAMA5IgchPIAAAAIAABPIgVAAIAAhxIAaAAIAbBNIAAhNIAWAAIAABxg");
	this.shape.setTransform(166.3,161.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D41F38").s().p("AgUA3QgIgEgDgIQgFgIgBgLQgBgLAAgNQAAgMABgLQABgLAFgIQADgHAIgFQAIgEAMAAQANAAAIAEQAIAFAEAHQADAIABALQACALAAAMQAAANgCALQgBALgDAIQgEAIgIAEQgIAEgNAAQgMAAgIgEgAgHgnQgEACgBAFIgCAOIgBASIABAUIACANQABAFAEACQADADAEAAQAFAAADgDQADgCACgFIACgNIABgUIgBgSIgCgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_1.setTransform(157.3,161.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D41F38").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_2.setTransform(150.8,161.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D41F38").s().p("AgKA5IAAheIgZAAIAAgTIBHAAIAAATIgZAAIAABeg");
	this.shape_3.setTransform(145,161.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D41F38").s().p("AgSA3QgIgEgEgIQgEgIgBgLQgCgLAAgNQAAgMACgLQABgLAEgIQAEgHAIgFQAHgEAMAAQANAAAHAEQAHAEADAGQAEAGABAHIABAOIgXAAQAAgNgDgGQgDgFgIAAQgDAAgDACQgDACgCAGQgBAFgBAIIgBAUIABAVQABAIACAEQACAFADABQACACADAAQADAAADgCQACgBACgDQACgDABgFIABgPIAYAAQAAAJgCAIQgBAJgEAGQgEAGgHADQgHAEgMAAQgMAAgHgEg");
	this.shape_4.setTransform(136.9,161.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_5.setTransform(129,161.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D41F38").s().p("AgjA5IAAhxIAoAAQAIAAAGADQAGADAEAFQAEAEABAGQACAHAAAGQAAAJgDAGQgCAHgFADQgFAEgHACQgGACgIAAIgMAAIAAAugAgMgEIALAAQAFgBAFgEQAEgEAAgIQAAgKgEgEQgDgFgIABIgKAAg");
	this.shape_6.setTransform(121,161.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D41F38").s().p("AgcAzQgJgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACADAAQAFAAAFgEQAEgDAAgIIgBgGIgDgFIgHgEIgJgEIgMgGQgHgDgDgDQgEgEgCgFQgBgGAAgHQAAgRAJgIQAKgIAQAAQAGAAAHABQAGACAGAEQAEAEACAFQAEAGAAAIIAAAEIgXAAQAAgIgCgFQgDgEgHAAIgGABIgDADIgCAEIgCAFQAAAFADAEQACAEAIADIAQAHIALAFIAHAHIADAIIABAJQAAATgLAIQgKAIgRAAQgUAAgIgIg");
	this.shape_7.setTransform(112.5,161.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D41F38").s().p("AAMA5IgchPIAAAAIAABPIgVAAIAAhxIAaAAIAbBNIAAhNIAWAAIAABxg");
	this.shape_8.setTransform(103.8,161.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D41F38").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_9.setTransform(97.1,161.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D41F38").s().p("AgKA5IAAheIgaAAIAAgTIBIAAIAAATIgZAAIAABeg");
	this.shape_10.setTransform(87.5,161.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D41F38").s().p("AALA5IgahPIgBAAIAABPIgVAAIAAhxIAbAAIAbBNIAAhNIAVAAIAABxg");
	this.shape_11.setTransform(79.1,161.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D41F38").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_12.setTransform(72.4,161.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41F38").s().p("AgTA3QgJgEgDgIQgFgIgBgLQgBgLAAgNQAAgMABgLQABgLAFgIQADgHAJgFQAHgEAMAAQANAAAIAEQAIAFAEAHQADAIABALQACALAAAMQAAANgCALQgBALgDAIQgEAIgIAEQgIAEgNAAQgMAAgHgEgAgHgnQgEACgBAFIgCAOIgBASIABAUIACANQABAFAEACQADADAEAAQAFAAADgDQADgCACgFIADgNIAAgUIAAgSIgDgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_13.setTransform(66,161.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D41F38").s().p("AgjA5IAAhxIAoAAQAIAAAGADQAGADAEAFQAEAEABAGQACAHAAAGQAAAJgDAGQgCAHgFADQgFAEgHACQgGACgIAAIgMAAIAAAugAgMgEIALAAQAFgBAFgEQAEgEAAgIQAAgKgEgEQgDgFgIABIgKAAg");
	this.shape_14.setTransform(57.6,161.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D41F38").s().p("AgWAJIAAgRIAsAAIAAARg");
	this.shape_15.setTransform(50.3,162.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D41F38").s().p("AgiA5QAAgIACgGQABgHADgGQADgGAFgFQAFgGAGgGIAJgHIAGgHIADgFIACgHIAAgHQAAgOgLAAQgDAAgDABIgEAFIgBAHIgBAJIgWAAIAAgFQAAgQAJgIQAIgJARAAQASAAAIAIQAIAIAAAPIgBAKIgDAKIgFAHIgIAIIgNAMQgEAFgDAEQgDAFgBADIAqAAIAAASg");
	this.shape_16.setTransform(43.4,161.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D41F38").s().p("AgSA2QgGgDgEgFQgDgFgCgFIgBgLIAAgDIAWAAIABAGIABAHIADAEQADACADAAQAHAAADgGQADgFAAgLIgBgMIgCgHQgBgCgDgBQgDgCgCAAQgFAAgDAEQgDACAAAEIgVAAIAEg8IA6AAIAAASIgoAAIgDAZQAEgEAFgCQAEgCAHAAQAIAAAGADQAFADADAFQADAFACAFIABAOQAAAJgCAIQgBAIgEAFQgEAGgIADQgHACgJAAQgLAAgHgCg");
	this.shape_17.setTransform(35.8,162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},75).wait(375));

	// Carproof Report
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D41F38").s().p("AgLA5IAAheIgYAAIAAgTIBIAAIAAATIgZAAIAABeg");
	this.shape_18.setTransform(150.4,161.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_19.setTransform(142.6,161.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D41F38").s().p("AgUA3QgHgEgEgIQgFgIgBgLQgBgLAAgNQAAgMABgLQABgLAFgIQAEgHAHgFQAIgEAMAAQANAAAIAEQAHAFAFAHQADAIACALQABALAAAMQAAANgBALQgCALgDAIQgFAIgHAEQgIAEgNAAQgMAAgIgEgAgHgnQgDACgCAFIgCAOIgBASIABAUIACANQACAFADACQADADAEAAQAFAAADgDQADgCACgFIACgNIABgUIgBgSIgCgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_20.setTransform(133.6,161.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D41F38").s().p("AgjA5IAAhxIAoAAQAIAAAGADQAGADAEAFQAEAEABAGQACAHAAAGQAAAJgDAGQgCAHgFADQgFAEgHACQgGACgIAAIgMAAIAAAugAgMgEIALAAQAFgBAFgEQAEgEAAgIQAAgKgEgEQgDgFgIABIgKAAg");
	this.shape_21.setTransform(125.2,161.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_22.setTransform(117.2,161.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_23.setTransform(109,161.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D41F38").s().p("AgfA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAyg");
	this.shape_24.setTransform(97.1,161.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D41F38").s().p("AgTA3QgIgEgFgIQgEgIAAgLQgCgLAAgNQAAgMACgLQAAgLAEgIQAFgHAIgFQAHgEAMAAQANAAAHAEQAIAFAFAHQADAIABALQACALAAAMQAAANgCALQgBALgDAIQgFAIgIAEQgHAEgNAAQgMAAgHgEgAgHgnQgEACgBAFIgDAOIAAASIAAAUIADANQABAFAEACQADADAEAAQAFAAADgDQAEgCABgFIADgNIAAgUIAAgSIgDgOQgBgFgEgCQgDgCgFAAQgEAAgDACg");
	this.shape_25.setTransform(88.7,161.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D41F38").s().p("AgUA3QgIgEgEgIQgDgIgBgLQgCgLAAgNQAAgMACgLQABgLADgIQAEgHAIgFQAIgEAMAAQANAAAIAEQAIAFADAHQAFAIABALQABALAAAMQAAANgBALQgBALgFAIQgDAIgIAEQgIAEgNAAQgMAAgIgEgAgHgnQgDACgCAFIgDAOIAAASIAAAUIADANQACAFADACQADADAEAAQAFAAADgDQADgCACgFIACgNIABgUIgBgSIgCgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_26.setTransform(79.9,161.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_27.setTransform(71.2,161.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D41F38").s().p("AgjA5IAAhxIAoAAQAIAAAGADQAGADAEAFQAEAEABAGQACAHAAAGQAAAJgDAGQgCAHgFADQgFAEgHACQgGACgIAAIgMAAIAAAugAgMgEIALAAQAFgBAFgEQAEgEAAgIQAAgKgEgEQgDgFgIABIgKAAg");
	this.shape_28.setTransform(62.6,161.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_29.setTransform(54.1,161.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D41F38").s().p("AAVA5IgGgYIgdAAIgGAYIgXAAIAehxIAbAAIAeBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_30.setTransform(45,161.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D41F38").s().p("AgSA3QgIgEgEgIQgEgIgBgLQgCgLAAgNQAAgMACgLQABgLAEgIQAEgHAIgFQAHgEAMAAQANAAAHAEQAHAEADAGQAEAGABAHIABAOIgXAAQAAgNgDgGQgDgFgIAAQgDAAgDACQgDACgCAGQgBAFgBAIIgBAUIABAVQABAIACAEQACAFADABQACACADAAQADAAADgCQACgBACgDQACgDABgFIABgPIAYAAQAAAJgCAIQgBAJgEAGQgEAGgHADQgHAEgMAAQgMAAgHgEg");
	this.shape_31.setTransform(36.3,161.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},75).to({state:[]},75).wait(300));

	// Exchange Policy
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D41F38").s().p("AgKA5IAAgtIgehEIAaAAIAOAsIAAAAIAQgsIAZAAIgeBEIAAAtg");
	this.shape_32.setTransform(255.8,161.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D41F38").s().p("AgSA3QgIgEgEgIQgEgIgBgLQgCgLAAgNQAAgMACgLQABgLAEgIQAEgHAIgFQAHgEAMAAQANAAAHAEQAHAEADAGQAEAGABAHIABAOIgXAAQAAgNgDgGQgDgFgIAAQgDAAgDACQgDACgCAGQgBAFgBAIIgBAUIABAVQABAIACAEQACAFADABQACACADAAQADAAADgCQACgBACgDQACgDABgFIABgPIAYAAQAAAJgCAIQgBAJgEAGQgEAGgHADQgHAEgMAAQgMAAgHgEg");
	this.shape_33.setTransform(247.4,161.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D41F38").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_34.setTransform(241,161.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D41F38").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_35.setTransform(235.6,161.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D41F38").s().p("AgUA3QgHgEgEgIQgFgIgBgLQgBgLAAgNQAAgMABgLQABgLAFgIQAEgHAHgFQAIgEAMAAQANAAAIAEQAHAFAEAHQAEAIACALQABALAAAMQAAANgBALQgCALgEAIQgEAIgHAEQgIAEgNAAQgMAAgIgEgAgHgnQgDACgCAFIgCAOIgBASIABAUIACANQACAFADACQADADAEAAQAFAAADgDQADgCACgFIACgNIABgUIgBgSIgCgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_36.setTransform(227.2,161.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D41F38").s().p("AgjA5IAAhxIAoAAQAIAAAGADQAGADAEAFQAEAEABAGQACAHAAAGQAAAJgDAGQgCAHgFADQgFAEgHACQgGACgIAAIgMAAIAAAugAgMgEIALAAQAFgBAFgEQAEgEAAgIQAAgKgEgEQgDgFgIABIgKAAg");
	this.shape_37.setTransform(218.8,161.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_38.setTransform(207,161.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D41F38").s().p("AgUA3QgHgDgEgIQgDgIgBgLIgCgZQABgPACgKQABgLAEgIQAFgHAIgEQAGgDALAAQATAAAIAJQAJAKAAARIgXAAIgBgHIgCgGQgCgDgCgBQgDgCgDAAQgHAAgEAJQgDAJgBAWIABARQABAJABAFQACAGADADQAEAEAEAAIAEgCIAFgDIADgGQABgDAAgFIAAgLIgOAAIAAgQIAlAAIAAA8IgRAAIAAgKQgFAGgFADQgHADgHAAQgLAAgGgEg");
	this.shape_39.setTransform(198.6,161.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D41F38").s().p("AAMA5IgbhPIgBAAIAABPIgVAAIAAhxIAaAAIAbBNIAAhNIAWAAIAABxg");
	this.shape_40.setTransform(189.6,161.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D41F38").s().p("AAVA5IgGgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_41.setTransform(180.6,161.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D41F38").s().p("AAOA5IAAgyIgaAAIAAAyIgYAAIAAhxIAYAAIAAAsIAaAAIAAgsIAWAAIAABxg");
	this.shape_42.setTransform(171.7,161.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D41F38").s().p("AgSA3QgIgEgEgIQgEgIgBgLQgCgLAAgNQAAgMACgLQABgLAEgIQAEgHAIgFQAHgEAMAAQANAAAHAEQAHAEADAGQAEAGABAHIABAOIgXAAQAAgNgDgGQgDgFgIAAQgDAAgDACQgDACgCAGQgBAFgBAIIgBAUIABAVQABAIACAEQACAFADABQACACADAAQADAAADgCQACgBACgDQACgDABgFIABgPIAYAAQAAAJgCAIQgBAJgEAGQgEAGgHADQgHAEgMAAQgMAAgHgEg");
	this.shape_43.setTransform(163,161.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D41F38").s().p("AAQA5IgQgnIgPAnIgaAAIAcg5Igag4IAaAAIAOAlIAOglIAZAAIgbA4IAdA5g");
	this.shape_44.setTransform(154.5,161.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_45.setTransform(146.6,161.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D41F38").s().p("AAeA5IAAhaIgBAAIgUBaIgRAAIgUhaIgBAAIAABaIgVAAIAAhxIAiAAIAQBQIAAAAIARhQIAiAAIAABxg");
	this.shape_46.setTransform(132.8,161.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D41F38").s().p("AAPA5IgXgvIgJANIAAAiIgWAAIAAhxIAWAAIAAAuIABAAIAcguIAZAAIgfAwIAjBBg");
	this.shape_47.setTransform(123.2,161.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D41F38").s().p("AgQA3QgHgDgEgGQgEgHgCgLQgCgKAAgPIABgWQABgLAEgIQADgIAHgFQAHgGAMAAQALAAAGADQAHADAEAHQAEAHACAKQACAKgBAQIgBAVQAAALgDAJQgEAIgIAFQgGAFgNAAQgKAAgGgDgAgFgoQgDACgBAFQgCAEAAAHIAAATIAAALIAAARQAAAHACAEQACAEACACIAFABQAEAAACgCQADgCABgEIACgMIABgSIAAgLIgBgSQgBgHgBgEQgBgEgDgBIgGgBQgDAAgCABg");
	this.shape_48.setTransform(114.6,161.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D41F38").s().p("AgQA3QgHgDgEgGQgEgHgCgLQgCgKAAgPIABgWQABgLAEgIQADgIAHgFQAHgGAMAAQALAAAGADQAHADAEAHQAEAHACAKQACAKgBAQIgBAVQAAALgDAJQgEAIgIAFQgGAFgNAAQgKAAgGgDgAgFgoQgDACgBAFQgBAEgBAHIAAATIAAALIAAARQABAHABAEQACAEACACIAFABQAEAAACgCQADgCABgEIACgMIABgSIAAgLIgBgSQgBgHgBgEQgBgEgDgBIgGgBQgDAAgCABg");
	this.shape_49.setTransform(106.9,161.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D41F38").s().p("AgSA2QgGgDgEgFQgDgFgCgFIgBgLIAAgDIAWAAIABAGIABAHIADAEQADACADAAQAHAAADgGQADgFAAgLIgBgMIgCgHQgBgCgDgBQgDgCgCAAQgFAAgDAEQgDACAAAEIgVAAIAEg8IA6AAIAAASIgoAAIgDAZQAEgEAFgCQAEgCAHAAQAIAAAGADQAFADADAFQADAFACAFIABAOQAAAJgCAIQgBAIgEAFQgEAGgIADQgHACgJAAQgLAAgHgCg");
	this.shape_50.setTransform(99.2,162);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D41F38").s().p("AgKAOQAFgBACgEQACgDAAgFIAAgBIgJAAIAAgZIAVAAIAAAWIgBAKQgBAFgDAEQgCAEgEADQgDACgHABg");
	this.shape_51.setTransform(93.5,167.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D41F38").s().p("AgiA5QAAgIACgGQABgHADgGQADgGAFgFQAFgGAGgGIAJgHIAGgHIADgFIACgHIAAgHQAAgOgLAAQgDAAgDABIgEAFIgBAHIgBAJIgWAAIAAgFQAAgQAJgIQAIgJARAAQASAAAIAIQAIAIAAAPIgBAKIgDAKIgFAHIgIAIIgNAMQgEAFgDAEQgDAFgBADIAqAAIAAASg");
	this.shape_52.setTransform(87.7,161.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D41F38").s().p("AgaA7IAjh1IASAAIgjB1g");
	this.shape_53.setTransform(81.3,161.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D41F38").s().p("AgLA5IAAgtIgdhEIAaAAIAOAsIAAAAIAQgsIAZAAIgdBEIAAAtg");
	this.shape_54.setTransform(74.5,161.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D41F38").s().p("AAUA5IgFgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_55.setTransform(66.8,161.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D41F38").s().p("AglA5IAAhxIAlAAQAMAAAIADQAHAFAEAHQAEAHABAKQACAKAAAOQAAANgCAMQgCALgEAHQgFAHgHADQgIAEgKAAgAgOAoIALAAQAFAAADgCQAEgCACgFQACgEABgJIABgSIgBgRQAAgIgCgEQgCgFgEgDQgEgCgGAAIgKAAg");
	this.shape_56.setTransform(57.9,161.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D41F38").s().p("AgWAJIAAgRIAsAAIAAARg");
	this.shape_57.setTransform(50.3,162.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D41F38").s().p("AgQA3QgHgDgEgGQgEgHgCgLQgCgKABgPIAAgWQABgLADgIQAEgIAHgFQAIgGALAAQALAAAGADQAHADAEAHQAEAHACAKQABAKABAQIgBAVQgBALgEAJQgDAIgHAFQgIAFgMAAQgJAAgHgDgAgGgoQgCACgBAFQgCAEAAAHIgBATIAAALIABARQAAAHACAEQABAEADACIAFABQAEAAACgCQACgCACgEIACgMIAAgSIAAgLIAAgSQAAgHgCgEQgCgEgCgBIgGgBQgDAAgDABg");
	this.shape_58.setTransform(43.5,161.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D41F38").s().p("AgaAxQgIgJAAgRIAAAAIAWAAQAAAKADAFQACAFAHAAIAGgBIAEgEQACgDAAgDIAAgHIAAgIIgCgGIgFgEQgDgCgEAAIgHAAIAAgOIAHAAQADAAACgBIAEgEIADgGIAAgHQAAgIgCgDQgDgDgFAAIgGABIgDAEQgCACAAAEIAAAHIgVAAQAAgRAIgIQAJgJAPAAQAPAAAJAIQAIAHAAAPQAAAKgEAGQgFAHgIACQALACAFAGQAEAHAAALIgBALQgCAHgEAEQgEAFgHAEQgHADgLAAQgRAAgIgJg");
	this.shape_59.setTransform(35.8,161.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},150).to({state:[]},75).wait(225));

	// Roadside Assistance
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_60.setTransform(212.8,161.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D41F38").s().p("AgSA3QgIgEgEgIQgEgIgBgLQgCgLAAgNQAAgMACgLQABgLAEgIQAEgHAIgFQAHgEAMAAQANAAAHAEQAHAEADAGQAEAGABAHIABAOIgXAAQAAgNgDgGQgDgFgIAAQgDAAgDACQgDACgCAGQgBAFgBAIIgBAUIABAVQABAIACAEQACAFADABQACACADAAQADAAADgCQACgBACgDQACgDABgFIABgPIAYAAQAAAJgCAIQgBAJgEAGQgEAGgHADQgHAEgMAAQgMAAgHgEg");
	this.shape_61.setTransform(204.5,161.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D41F38").s().p("AALA5IgbhPIAAAAIAABPIgVAAIAAhxIAbAAIAbBNIAAhNIAVAAIAABxg");
	this.shape_62.setTransform(195.6,161.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D41F38").s().p("AAUA5IgFgYIgdAAIgFAYIgYAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_63.setTransform(186.6,161.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D41F38").s().p("AgLA5IAAheIgYAAIAAgTIBIAAIAAATIgZAAIAABeg");
	this.shape_64.setTransform(179.2,161.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D41F38").s().p("AgdAzQgIgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACAEAAQAEAAAFgEQAEgDAAgIIgBgGIgDgFIgHgEIgIgEIgNgGQgHgDgDgDQgEgEgBgFQgCgGAAgHQAAgRAJgIQAKgIAQAAQAHAAAGABQAGACAFAEQAFAEACAFQADAGABAIIAAAEIgXAAQAAgIgCgFQgDgEgHAAIgFABIgEADIgDAEIgBAFQABAFACAEQACAEAIADIAQAHIALAFIAGAHIAEAIIABAJQAAATgKAIQgLAIgRAAQgUAAgJgIg");
	this.shape_65.setTransform(171.2,161.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D41F38").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_66.setTransform(165,161.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D41F38").s().p("AgcAzQgJgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACADAAQAFAAAFgEQAEgDAAgIIgBgGIgEgFIgGgEIgJgEIgMgGQgHgDgDgDQgEgEgCgFQgBgGAAgHQAAgRAJgIQAKgIAQAAQAGAAAHABQAGACAGAEQAEAEACAFQAEAGAAAIIAAAEIgXAAQAAgIgDgFQgCgEgHAAIgGABIgDADIgCAEIgCAFQAAAFADAEQACAEAIADIAQAHIALAFIAHAHIADAIIABAJQAAATgKAIQgLAIgRAAQgUAAgIgIg");
	this.shape_67.setTransform(158.8,161.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D41F38").s().p("AgdAzQgIgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACAEAAQAEAAAFgEQAEgDAAgIIgBgGIgDgFIgHgEIgJgEIgMgGQgHgDgDgDQgEgEgBgFQgCgGAAgHQAAgRAJgIQAKgIAQAAQAHAAAGABQAGACAFAEQAFAEACAFQADAGABAIIAAAEIgXAAQAAgIgCgFQgDgEgHAAIgGABIgDADIgDAEIgBAFQABAFACAEQACAEAIADIAQAHIALAFIAGAHIAEAIIABAJQAAATgKAIQgLAIgRAAQgUAAgJgIg");
	this.shape_68.setTransform(150.5,161.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D41F38").s().p("AAVA5IgGgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_69.setTransform(142,161.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_70.setTransform(130.1,161.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D41F38").s().p("AglA5IAAhxIAlAAQAMAAAIADQAHAFAEAHQAEAHABAKQACAKAAAOQAAANgCAMQgCALgEAHQgFAHgHADQgIAEgKAAgAgOAoIALAAQAFAAADgCQAEgCACgFQACgEABgJIABgSIgBgRQAAgIgCgEQgCgFgEgDQgEgCgGAAIgKAAg");
	this.shape_71.setTransform(121.6,161.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D41F38").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_72.setTransform(114.9,161.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D41F38").s().p("AgdAzQgIgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACAEAAQAEAAAFgEQAEgDAAgIIgBgGIgDgFIgHgEIgJgEIgMgGQgHgDgDgDQgEgEgBgFQgCgGAAgHQAAgRAJgIQAKgIAQAAQAHAAAGABQAGACAFAEQAFAEACAFQADAGABAIIAAAEIgXAAQAAgIgCgFQgDgEgHAAIgGABIgDADIgDAEIgBAFQABAFACAEQACAEAIADIAQAHIALAFIAGAHIAEAIIABAJQAAATgKAIQgLAIgRAAQgUAAgJgIg");
	this.shape_73.setTransform(108.7,161.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D41F38").s().p("AglA5IAAhxIAlAAQAMAAAIADQAHAFAEAHQAEAHABAKQACAKAAAOQAAANgCAMQgCALgEAHQgFAHgHADQgIAEgKAAgAgOAoIALAAQAFAAADgCQAEgCACgFQACgEABgJIABgSIgBgRQAAgIgCgEQgCgFgEgDQgEgCgGAAIgKAAg");
	this.shape_74.setTransform(100,161.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D41F38").s().p("AAUA5IgFgYIgdAAIgFAYIgZAAIAehxIAdAAIAeBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_75.setTransform(91,161.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D41F38").s().p("AgUA3QgIgEgEgIQgDgIgBgLQgCgLAAgNQAAgMACgLQABgLADgIQAEgHAIgFQAIgEAMAAQANAAAIAEQAIAFADAHQAFAIABALQABALAAAMQAAANgBALQgBALgFAIQgDAIgIAEQgIAEgNAAQgMAAgIgEgAgHgnQgDACgCAFIgDAOIAAASIAAAUIADANQACAFADACQADADAEAAQAFAAADgDQADgCACgFIACgNIABgUIgBgSIgCgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_76.setTransform(82.1,161.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_77.setTransform(73.5,161.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_78.setTransform(60.8,161.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D41F38").s().p("AANA5IAAgyIgaAAIAAAyIgXAAIAAhxIAXAAIAAAsIAaAAIAAgsIAYAAIAABxg");
	this.shape_79.setTransform(51.8,161.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D41F38").s().p("AAEA5IAAgYIgnAAIAAgTIAkhGIAYAAIAABHIALAAIAAASIgLAAIAAAYgAgRAPIAVAAIAAgqg");
	this.shape_80.setTransform(43.5,161.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D41F38").s().p("AgiA5QAAgIACgGQABgHADgGQADgGAFgFQAFgGAGgGIAJgHIAGgHIADgFIACgHIAAgHQAAgOgLAAQgDAAgDABIgEAFIgBAHIgBAJIgWAAIAAgFQAAgQAJgIQAIgJARAAQASAAAIAIQAIAIAAAPIgBAKIgDAKIgFAHIgIAIIgNAMQgEAFgDAEQgDAFgBADIAqAAIAAASg");
	this.shape_81.setTransform(35.8,161.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},225).to({state:[]},75).wait(150));

	// Warranty
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAATIgmAAIAAAeIAqAAIAAATg");
	this.shape_82.setTransform(187.2,180.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D41F38").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_83.setTransform(179.8,180.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D41F38").s().p("AgSA3QgIgEgEgIQgEgIgBgLQgCgLAAgNQAAgMACgLQABgLAEgIQAEgHAIgFQAHgEAMAAQANAAAHAEQAHAEADAGQAEAGABAHIABAOIgXAAQAAgNgDgGQgDgFgIAAQgDAAgDACQgDACgCAGQgBAFgBAIIgBAUIABAVQABAIACAEQACAFADABQACACADAAQADAAADgCQACgBACgDQACgDABgFIABgPIAYAAQAAAJgCAIQgBAJgEAGQgEAGgHADQgHAEgMAAQgMAAgHgEg");
	this.shape_84.setTransform(171.5,180.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D41F38").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_85.setTransform(165.2,180.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D41F38").s().p("AANA5IAAgzIgaAAIAAAzIgWAAIAAhxIAWAAIAAArIAaAAIAAgrIAYAAIAABxg");
	this.shape_86.setTransform(158.7,180.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAATIgmAAIAAAeIAqAAIAAATg");
	this.shape_87.setTransform(150.7,180.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D41F38").s().p("AgOA5IgahxIAYAAIAQBTIAAAAIARhTIAYAAIgaBxg");
	this.shape_88.setTransform(142.5,180.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAATIgmAAIAAAeIAqAAIAAATg");
	this.shape_89.setTransform(130.9,180.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D41F38").s().p("AAOA5IAAgzIgaAAIAAAzIgYAAIAAhxIAYAAIAAArIAaAAIAAgrIAWAAIAABxg");
	this.shape_90.setTransform(122.5,180.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D41F38").s().p("AgLA5IAAhfIgZAAIAAgSIBIAAIAAASIgYAAIAABfg");
	this.shape_91.setTransform(114.2,180.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D41F38").s().p("AgfA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAATIgmAAIAAAxg");
	this.shape_92.setTransform(103.2,180.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D41F38").s().p("AgUA3QgIgEgDgIQgFgIgBgLQgBgLAAgNQAAgMABgLQABgLAFgIQADgHAIgFQAIgEAMAAQANAAAIAEQAIAFAEAHQADAIABALQACALAAAMQAAANgCALQgBALgDAIQgEAIgIAEQgIAEgNAAQgMAAgIgEgAgHgnQgEACgBAFIgCAOIgBASIABAUIACANQABAFAEACQADADAEAAQAFAAADgDQADgCACgFIACgNIABgUIgBgSIgCgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_93.setTransform(94.8,180.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAATIgmAAIAAAeIAqAAIAAATg");
	this.shape_94.setTransform(82.9,180.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D41F38").s().p("AgfA5IAAhxIA/AAIAAASIgoAAIAAAbIAlAAIAAATIglAAIAAAxg");
	this.shape_95.setTransform(75.5,180.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D41F38").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_96.setTransform(69.4,180.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D41F38").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_97.setTransform(64,180.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAATIgmAAIAAAeIAqAAIAAATg");
	this.shape_98.setTransform(52.6,180.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D41F38").s().p("AAOA5IAAgzIgbAAIAAAzIgXAAIAAhxIAXAAIAAArIAbAAIAAgrIAXAAIAABxg");
	this.shape_99.setTransform(44.1,180.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D41F38").s().p("AgKA5IAAhfIgZAAIAAgSIBIAAIAAASIgaAAIAABfg");
	this.shape_100.setTransform(35.9,180.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_101.setTransform(282.1,161.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D41F38").s().p("AgUA3QgHgEgEgIQgFgIgBgLQgBgLAAgNQAAgMABgLQABgLAFgIQAEgHAHgFQAIgEAMAAQANAAAIAEQAHAFAEAHQAEAIACALQABALAAAMQAAANgBALQgCALgEAIQgEAIgHAEQgIAEgNAAQgMAAgIgEgAgHgnQgDACgCAFIgCAOIgBASIABAUIACANQACAFADACQADADAEAAQAFAAADgDQADgCACgFIACgNIABgUIgBgSIgCgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_102.setTransform(273.1,161.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D41F38").s().p("AgfA5IAAhxIA/AAIAAATIgoAAIAAAbIAlAAIAAARIglAAIAAAyg");
	this.shape_103.setTransform(265.2,161.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D41F38").s().p("AgLA5IAAgtIgdhEIAaAAIAOAsIAAAAIAQgsIAZAAIgdBEIAAAtg");
	this.shape_104.setTransform(253.3,161.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D41F38").s().p("AgKA5IAAheIgaAAIAAgTIBIAAIAAATIgZAAIAABeg");
	this.shape_105.setTransform(245.3,161.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D41F38").s().p("AAMA5IgbhPIgBAAIAABPIgVAAIAAhxIAaAAIAcBNIAAhNIAVAAIAABxg");
	this.shape_106.setTransform(236.9,161.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D41F38").s().p("AAUA5IgFgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_107.setTransform(227.9,161.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_108.setTransform(219.3,161.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_109.setTransform(210.4,161.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D41F38").s().p("AAUA5IgFgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_110.setTransform(201.4,161.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D41F38").s().p("AANA5IgNhSIAAAAIgMBSIgaAAIgUhxIAVAAIANBTIABAAIANhTIAVAAIANBTIANhTIAWAAIgUBxg");
	this.shape_111.setTransform(191.2,161.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D41F38").s().p("AALA5IgahPIgBAAIAABPIgVAAIAAhxIAbAAIAbBNIAAhNIAVAAIAABxg");
	this.shape_112.setTransform(176.7,161.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D41F38").s().p("AgTA3QgIgEgFgIQgDgIgBgLQgCgLAAgNQAAgMACgLQABgLADgIQAFgHAIgFQAHgEAMAAQANAAAHAEQAJAFADAHQAFAIAAALQACALAAAMQAAANgCALQAAALgFAIQgDAIgJAEQgHAEgNAAQgMAAgHgEgAgHgnQgEACgBAFIgDAOIAAASIAAAUIADANQABAFAEACQADADAEAAQAFAAADgDQADgCACgFIADgNIAAgUIAAgSIgDgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_113.setTransform(167.7,161.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D41F38").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_114.setTransform(161.2,161.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D41F38").s().p("AgdAzQgIgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACAEAAQAEAAAFgEQAEgDAAgIIgBgGIgDgFIgHgEIgJgEIgMgGQgHgDgDgDQgEgEgBgFQgCgGAAgHQAAgRAJgIQAKgIAQAAQAHAAAGABQAGACAFAEQAFAEACAFQADAGABAIIAAAEIgXAAQAAgIgCgFQgDgEgHAAIgGABIgDADIgDAEIgBAFQABAFACAEQACAEAIADIAQAHIALAFIAGAHIAEAIIABAJQAAATgKAIQgLAIgRAAQgUAAgJgIg");
	this.shape_115.setTransform(155,161.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D41F38").s().p("AgdAzQgIgJAAgQIAAgEIAXAAIAAADIABAHIACAGIAFADQADACAEAAQAFAAAEgEQAEgDAAgIIgBgGIgDgFIgHgEIgIgEIgOgGQgFgDgEgDQgEgEgBgFQgCgGgBgHQAAgRAKgIQAKgIAQAAQAGAAAHABQAHACAEAEQAFAEACAFQADAGAAAIIAAAEIgVAAQAAgIgDgFQgEgEgGAAIgFABIgFADIgCAEIgBAFQABAFACAEQACAEAHADIARAHIALAFIAGAHIAEAIIABAJQAAATgKAIQgLAIgSAAQgTAAgJgIg");
	this.shape_116.setTransform(146.7,161.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D41F38").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_117.setTransform(140.5,161.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D41F38").s().p("AAeA5IAAhaIgBAAIgUBaIgRAAIgUhaIgBAAIAABaIgVAAIAAhxIAiAAIAQBQIAAAAIARhQIAiAAIAABxg");
	this.shape_118.setTransform(132.6,161.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D41F38").s().p("AgdAzQgIgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACAEAAQAFAAAEgEQAEgDAAgIIgBgGIgDgFIgHgEIgIgEIgOgGQgGgDgDgDQgEgEgBgFQgCgGAAgHQgBgRAKgIQAKgIAQAAQAHAAAGABQAGACAFAEQAFAEACAFQADAGAAAIIAAAEIgVAAQAAgIgDgFQgEgEgGAAIgFABIgFADIgCAEIgBAFQABAFACAEQACAEAHADIARAHIALAFIAGAHIAEAIIABAJQAAATgKAIQgLAIgSAAQgTAAgJgIg");
	this.shape_119.setTransform(122.5,161.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D41F38").s().p("AALA5IgbhPIAAAAIAABPIgVAAIAAhxIAbAAIAbBNIAAhNIAVAAIAABxg");
	this.shape_120.setTransform(113.8,161.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D41F38").s().p("AAUA5IgFgYIgdAAIgFAYIgZAAIAehxIAdAAIAeBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_121.setTransform(104.8,161.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D41F38").s().p("AAOA5IgDgFIAAgHIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAHAAAPQAAALgEAIQgFAHgKABQAJACAEAFQAEADABAKIAAAHIABAIIABAPQABAFADABIAAABgAgPgHIAKAAQAHABAFgEQAEgEAAgKQAAgPgPAAIgLAAg");
	this.shape_122.setTransform(96.2,161.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D41F38").s().p("AgKA5IAAheIgZAAIAAgTIBHAAIAAATIgZAAIAABeg");
	this.shape_123.setTransform(87.7,161.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D41F38").s().p("AgaA7IAjh1IASAAIgjB1g");
	this.shape_124.setTransform(81.2,161.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_125.setTransform(75,161.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D41F38").s().p("AAMA5IgbhPIgBAAIAABPIgVAAIAAhxIAaAAIAcBNIAAhNIAVAAIAABxg");
	this.shape_126.setTransform(66.4,161.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D41F38").s().p("AgKA5IAAhxIAVAAIAABxg");
	this.shape_127.setTransform(59.7,161.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D41F38").s().p("AgUA3QgGgDgEgIQgEgIgCgLIgBgZQABgPABgKQACgLAFgIQAEgHAHgEQAIgDAKAAQASAAAJAJQAIAKAAARIgVAAIgBgHIgDgGQgBgDgDgBQgDgCgDAAQgHAAgEAJQgDAJAAAWIAAARQABAJACAFQABAGADADQADAEAEAAIAFgCIAEgDIAEgGQABgDABgFIAAgLIgQAAIAAgQIAlAAIAAA8IgRAAIAAgKQgEAGgGADQgGADgGAAQgLAAgHgEg");
	this.shape_128.setTransform(53.3,161.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D41F38").s().p("AALA5IgbhPIAAAAIAABPIgVAAIAAhxIAbAAIAaBNIAAhNIAWAAIAABxg");
	this.shape_129.setTransform(44.3,161.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D41F38").s().p("AggA5IAAhxIA/AAIAAATIgoAAIAAAbIAmAAIAAARIgmAAIAAAfIAqAAIAAATg");
	this.shape_130.setTransform(36.1,161.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},300).to({state:[]},75).wait(75));

	// Myers Approved
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D41F38").s().p("AgfAzIgEgLIgFgIIgCgGQgJgQgLgHQANgKAKAAQAIAAADAFQAFAEACAOQAVgmAKgPQAKgNAIgEQAGgEANAAQAHAAAJACQgVAOgXAeQgXAegYApg");
	this.shape_131.setTransform(19.5,161.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#201F20").s().p("AgKAqIAAgZIAVAAIAAAZgAgKgQIAAgZIAVAAIAAAZg");
	this.shape_132.setTransform(270.1,138.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#201F20").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAASIgmAAIAAAfIAqAAIAAATg");
	this.shape_133.setTransform(264.6,136.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#201F20").s().p("AgOA5IgahxIAZAAIAPBTIAAAAIARhTIAYAAIgaBxg");
	this.shape_134.setTransform(256.4,136.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#201F20").s().p("AAUA5IgFgYIgdAAIgGAYIgXAAIAdhxIAcAAIAfBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_135.setTransform(248.2,136.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#201F20").s().p("AAOA5IAAgzIgaAAIAAAzIgYAAIAAhxIAYAAIAAAsIAaAAIAAgsIAWAAIAABxg");
	this.shape_136.setTransform(239.3,136.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#201F20").s().p("AgdAzQgIgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACAEAAQAFAAAEgEQAEgDAAgIIgBgGIgDgFIgHgEIgIgEIgOgGQgGgDgDgDQgEgEgBgFQgCgGAAgHQgBgRAKgIQAKgIAQAAQAHAAAGABQAGACAFAEQAFAEACAFQADAGAAAIIAAAEIgWAAQAAgIgCgFQgEgEgGAAIgFABIgFADIgCAEIgBAFQABAFACAEQACAEAHADIARAHIALAFIAGAHIAEAIIABAJQAAATgKAIQgLAIgSAAQgTAAgJgIg");
	this.shape_137.setTransform(226.9,136.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#201F20").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAASIgmAAIAAAfIAqAAIAAATg");
	this.shape_138.setTransform(219.2,136.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#201F20").s().p("AgfA5IAAhxIAXAAIAABeIAoAAIAAATg");
	this.shape_139.setTransform(211.7,136.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#201F20").s().p("AgSA3QgIgEgEgIQgEgIgBgLQgCgLAAgNQAAgMACgLQABgLAEgIQAEgHAIgFQAHgEAMAAQANAAAHAEQAHAEADAGQAEAGABAHIABAOIgXAAQAAgNgDgGQgDgFgIAAQgDAAgDACQgDACgCAGQgBAFgBAIIgBAUIABAVQABAIACAEQACAFADABQACACADAAQADAAADgCQACgBACgDQACgDABgFIABgPIAYAAQAAAJgCAIQgBAJgEAGQgEAGgHADQgHAEgMAAQgMAAgHgEg");
	this.shape_140.setTransform(203.5,136.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#201F20").s().p("AgLA5IAAhxIAXAAIAABxg");
	this.shape_141.setTransform(197.1,136.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#201F20").s().p("AANA5IAAgzIgaAAIAAAzIgWAAIAAhxIAWAAIAAAsIAaAAIAAgsIAYAAIAABxg");
	this.shape_142.setTransform(190.7,136.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#201F20").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAASIgmAAIAAAfIAqAAIAAATg");
	this.shape_143.setTransform(182.6,136.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#201F20").s().p("AgOA5IgahxIAYAAIAQBTIAAAAIARhTIAYAAIgaBxg");
	this.shape_144.setTransform(174.4,136.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#201F20").s().p("AglA5IAAhxIAlAAQAMAAAIADQAHAFAEAHQAEAHABALQACAJAAANQAAAOgCALQgCALgEAIQgFAHgHADQgIAEgKAAgAgOAoIALAAQAFAAADgCQAEgCACgFQACgEABgJIABgSIgBgRQAAgIgCgFQgCgEgEgDQgEgDgGABIgKAAg");
	this.shape_145.setTransform(162,136.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#201F20").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAASIgmAAIAAAfIAqAAIAAATg");
	this.shape_146.setTransform(153.7,136.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#201F20").s().p("AgcAzQgJgJAAgQIAAgEIAXAAIAAADIABAHIACAGIAFADQADACADAAQAFAAAFgEQAEgDAAgIIgBgGIgEgFIgGgEIgJgEIgMgGQgGgDgEgDQgEgEgCgFQgCgGAAgHQAAgRAKgIQAJgIARAAQAHAAAGABQAHACAFAEQAEAEADAFQACAGAAAIIAAAEIgVAAQgBgIgDgFQgDgEgGAAIgGABIgEADIgBAEIgBAFQAAAFACAEQACAEAHADIARAHIALAFIAHAHIADAIIABAJQAAATgLAIQgKAIgSAAQgTAAgIgIg");
	this.shape_147.setTransform(145.5,136.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#201F20").s().p("AgMA5QgHgCgGgEQgEgDgDgIQgEgHAAgLIAAhPIAYAAIAABPIAAAIQAAADACACQACAEADABQACACADgBQAEABADgCQADgBABgEIACgFIABgIIAAhPIAWAAIAABPQAAAKgDAIQgDAGgFAEQgFAFgGACQgHABgHAAQgGAAgGgBg");
	this.shape_148.setTransform(137.1,136.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#201F20").s().p("AglA5IAAhxIAlAAQAMAAAIADQAHAFAEAHQAEAHABALQACAJAAANQAAAOgCALQgCALgEAIQgFAHgHADQgIAEgKAAgAgOAoIALAAQAFAAADgCQAEgCACgFQACgEABgJIABgSIgBgRQAAgIgCgFQgCgEgEgDQgEgDgGABIgKAAg");
	this.shape_149.setTransform(124.5,136.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#201F20").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAASIgmAAIAAAfIAqAAIAAATg");
	this.shape_150.setTransform(116.2,136.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#201F20").s().p("AgOA5IgahxIAZAAIAPBTIABAAIAQhTIAYAAIgaBxg");
	this.shape_151.setTransform(108,136.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#201F20").s().p("AgUA3QgHgEgEgIQgEgIgCgLQgBgLAAgNQAAgMABgLQACgLAEgIQAEgHAHgFQAIgEAMAAQANAAAIAEQAHAFAEAHQAEAIACALQABALAAAMQAAANgBALQgCALgEAIQgEAIgHAEQgIAEgNAAQgMAAgIgEgAgHgnQgDACgCAFIgCAOIgBASIABAUIACANQACAFADACQADADAEAAQAFAAADgDQADgCACgFIACgNIABgUIgBgSIgCgOQgCgFgDgCQgDgCgFAAQgEAAgDACg");
	this.shape_152.setTransform(99.5,136.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#201F20").s().p("AAOA5IgDgGIAAgGIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAIAAAOQAAALgEAIQgFAHgKABQAJACAEAEQAEAEABAKIAAAHIABAIIABAPQABAEADACIAAABgAgPgGIAKAAQAHAAAFgEQAEgEAAgJQAAgRgPABIgLAAg");
	this.shape_153.setTransform(90.8,136.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#201F20").s().p("AgjA5IAAhxIAoAAQAIAAAGADQAGADAEAEQAEAGABAFQACAHAAAGQAAAJgDAHQgCAGgFADQgFAEgHACQgGADgIAAIgMAAIAAAtgAgMgEIALAAQAFAAAFgFQAEgEAAgIQAAgKgEgEQgDgEgIAAIgKAAg");
	this.shape_154.setTransform(82.2,136.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#201F20").s().p("AgjA5IAAhxIAoAAQAIAAAGADQAGADAEAEQAEAGABAFQACAHAAAGQAAAJgDAHQgCAGgFADQgFAEgHACQgGADgIAAIgMAAIAAAtgAgMgEIALAAQAFAAAFgFQAEgEAAgIQAAgKgEgEQgDgEgIAAIgKAAg");
	this.shape_155.setTransform(73.9,136.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#201F20").s().p("AAVA5IgGgYIgdAAIgGAYIgYAAIAfhxIAbAAIAeBxgAALAOIgLgzIgKAzIAVAAg");
	this.shape_156.setTransform(65.2,136.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#201F20").s().p("AgdAzQgIgJAAgQIAAgEIAXAAIAAADIAAAHIADAGIAFADQADACAEAAQAFAAAEgEQAEgDAAgIIgBgGIgDgFIgHgEIgIgEIgOgGQgGgDgDgDQgEgEgBgFQgCgGAAgHQgBgRAKgIQAKgIAQAAQAHAAAGABQAGACAFAEQAFAEACAFQADAGAAAIIAAAEIgVAAQAAgIgDgFQgEgEgGAAIgFABIgFADIgCAEIgBAFQABAFACAEQACAEAHADIARAHIALAFIAGAHIAEAIIABAJQAAATgKAIQgLAIgSAAQgTAAgJgIg");
	this.shape_157.setTransform(52.8,136.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#201F20").s().p("AAOA5IgDgGIAAgGIgBgWQAAgGgDgEQgDgFgGAAIgNAAIAAAxIgXAAIAAhxIAqAAQAOAAAIAHQAIAIAAAOQAAALgEAIQgFAHgKABQAJACAEAEQAEAEABAKIAAAHIABAIIABAPQABAEADACIAAABgAgPgGIAKAAQAHAAAFgEQAEgEAAgJQAAgRgPABIgLAAg");
	this.shape_158.setTransform(44.4,136.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#201F20").s().p("AggA5IAAhxIA/AAIAAASIgoAAIAAAbIAmAAIAAASIgmAAIAAAfIAqAAIAAATg");
	this.shape_159.setTransform(36.2,136.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#201F20").s().p("AgKA5IAAgtIgehEIAaAAIAOAsIAAAAIAQgsIAZAAIgeBEIAAAtg");
	this.shape_160.setTransform(28,136.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#201F20").s().p("AAeA5IAAhaIgBAAIgUBaIgRAAIgUhaIgBAAIAABaIgVAAIAAhxIAiAAIAQBQIAAAAIARhQIAiAAIAABxg");
	this.shape_161.setTransform(17.9,136.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]}).to({state:[]},375).wait(75));

	// Subtitle
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D41F38").s().p("AgPBWIAAggIAgAAIAAAggAgLAmIgEhDIAAg4IAgAAIAAA4IgFBDg");
	this.shape_162.setTransform(281,170.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D41F38").s().p("AgwBWIAAirIBfAAIAAAdIg8AAIAAAoIA4AAIAAAbIg4AAIAAAuIA+AAIAAAdg");
	this.shape_163.setTransform(272.1,170.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D41F38").s().p("AgvBWIAAirIAiAAIAACOIA9AAIAAAdg");
	this.shape_164.setTransform(260.9,170.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D41F38").s().p("AgcBTQgLgHgHgLQgGgMgCgRQgBgQAAgUQAAgSABgRQACgQAGgMQAHgMALgGQALgHATABQASAAALAFQALAGAFAKQAFAJACAKIABAUIgjAAQAAgSgEgJQgEgIgMgBQgGAAgEAEQgEADgDAIQgCAJgBAMIgBAeQAAATACAMQABAMADAGQACAIAFABQAEADAEAAQAFAAAEgCQAEgBADgFQADgFABgIQACgIAAgOIAiAAQAAAOgCAMQgCAMgGAKQgGAJgKAGQgLAEgRAAQgTAAgLgFg");
	this.shape_165.setTransform(248.5,170.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D41F38").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_166.setTransform(239,170.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D41F38").s().p("AAUBWIAAhMIgnAAIAABMIgjAAIAAirIAjAAIAABCIAnAAIAAhCIAjAAIAACrg");
	this.shape_167.setTransform(229.2,170.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D41F38").s().p("AgwBWIAAirIBfAAIAAAdIg8AAIAAAoIA4AAIAAAbIg4AAIAAAuIA+AAIAAAdg");
	this.shape_168.setTransform(217.2,170.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#D41F38").s().p("AgVBWIgoirIAlAAIAYB+IAAAAIAah+IAkAAIgoCrg");
	this.shape_169.setTransform(204.8,170.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#D41F38").s().p("Ag4BWIAAirIA4AAQASAAALAGQALAGAGALQAGALADAPQACAQAAATQAAAVgDARQgDARgHAKQgGALgMAFQgLAGgQAAgAgVA8IAPAAQAJAAAFgDQAGgDADgHQADgHABgMIABgcIgBgaQgBgLgDgHQgDgIgGgDQgFgEgJAAIgPAAg");
	this.shape_170.setTransform(186.1,170.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D41F38").s().p("AgwBWIAAirIBfAAIAAAdIg8AAIAAAoIA4AAIAAAbIg4AAIAAAuIA+AAIAAAdg");
	this.shape_171.setTransform(173.7,170.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D41F38").s().p("AgrBMQgNgNAAgXIAAgIIAiAAIAAAGIABALQABAEADAEQADADAEACQAEACAGAAQAIAAAGgFQAHgGAAgKQAAgGgCgEQgCgFgDgDQgDgDgHgDIgNgFQgLgEgJgFQgIgFgGgEQgFgHgDgIQgDgIAAgLQAAgZAOgMQAOgMAZAAQAKAAAKACQAKADAIAFQAGAGAEAIQAEAJABANIAAAEIgiAAQAAgMgEgHQgEgGgKgBQgGAAgDADQgEABgCADIgDAGIgBAIQAAAHADAGQAEAFALAFIAZALQAKAFAGADQAHAFADAGQAEAFABAHQACAGAAAIQAAAbgQANQgPAMgbgBQgeAAgMgMg");
	this.shape_172.setTransform(161.4,170.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D41F38").s().p("AgUBVQgJgCgIgFQgIgHgEgKQgFgLAAgRIAAh3IAjAAIAAB3IAAAMQABAFADAEQACAEAEACQAEACAFAAQAGAAAEgCQAEgCACgEQACgEABgFIABgMIAAh3IAjAAIAAB3QAAAQgFALQgFAKgHAHQgIAGgKACQgKACgKAAQgKAAgKgCg");
	this.shape_173.setTransform(148.7,170.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D41F38").s().p("AAfBWIgIgkIgtAAIgIAkIgkAAIAuirIApAAIAuCrgAARAVIgRhMIAAAAIgQBMIAhAAg");
	this.shape_174.setTransform(129.9,170.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D41F38").s().p("AgeBTQgKgFgGgMQgGgMgCgQQgBgSAAgVQAAgVACgQQADgRAHgLQAHgKALgGQALgGAPABQAcAAANANQAMAPAAAaIghAAIgBgLQgBgEgCgFQgDgEgDgCQgEgEgFAAQgMAAgFAPQgGAOAAAfIABAbQABANADAJQACAJAFAEQAEAFAHAAQADAAAEgCQADgCAEgDQADgDACgFQACgGAAgHIAAgRIgXAAIAAgYIA4AAIAABbIgZAAIAAgQIgBAAQgGAKgJAFQgIADgMAAQgPABgKgGg");
	this.shape_175.setTransform(110.8,170.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D41F38").s().p("AASBWIgqh3IAAAAIAAB3IggAAIAAirIAoAAIApB1IAAAAIAAh1IAgAAIAACrg");
	this.shape_176.setTransform(97.3,170.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D41F38").s().p("AgRBWIAAirIAiAAIAACrg");
	this.shape_177.setTransform(87.4,170.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D41F38").s().p("AgQBWIAAhEIgthnIAnAAIAWBDIAAAAIAYhDIAmAAIgtBnIAABEg");
	this.shape_178.setTransform(78,170.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D41F38").s().p("AgUBVQgJgCgIgFQgIgHgEgKQgFgLAAgRIAAh3IAjAAIAAB3IAAAMQABAFADAEQACAEAEACQAEACAFAAQAGAAAEgCQAEgCACgEQACgEABgFIABgMIAAh3IAjAAIAAB3QAAAQgFALQgFAKgHAHQgIAGgKACQgKACgKAAQgKAAgKgCg");
	this.shape_179.setTransform(65.4,170.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D41F38").s().p("Ag3BWIAAirIA5AAQAKAAAJADQAKACAGAFQAHAFADAIQAEAJgBAMQABAOgHAKQgGAKgOADIAAABQAPACAIAJQAJAKAAASQAAAKgDAJQgCAJgHAHQgGAHgKAEQgLAEgPAAgAgVA8IAOAAQALAAAIgFQAIgGAAgPQAAgHgCgFQgCgFgEgDQgDgDgFgBIgJgBIgQAAgAgVgOIAKAAQAOAAAHgFQAGgGAAgMQAAgMgGgFQgGgFgMAAIgNAAg");
	this.shape_180.setTransform(52.4,170.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D41F38").s().p("AgvBWIAAirIBfAAIAAAdIg9AAIAAAoIA5AAIAAAbIg5AAIAABLg");
	this.shape_181.setTransform(34.8,170.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D41F38").s().p("AgeBTQgLgHgHgLQgGgMgCgRQgBgQAAgUQAAgSABgRQACgQAGgMQAHgMALgGQALgHATABQATgBAMAHQALAGAHAMQAGAMACAQQABARAAASQAAAUgBAQQgCARgGAMQgHALgLAHQgMAFgTAAQgTAAgLgFgAgLg7QgFADgDAIQgCAIgBAMIgBAcIABAeQABAMACAIQADAHAFADQAEAEAHAAQAIAAAEgEQAFgDADgHQACgIABgMIABgeIgBgcQgBgMgCgIQgDgIgFgDQgEgEgIAAQgHAAgEAEg");
	this.shape_182.setTransform(22.1,170.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D41F38").s().p("AgPBOIAAiBIgiAAIAAgbIBjAAIAAAbIgiAAIAACBg");
	this.shape_183.setTransform(279.8,143.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D41F38").s().p("AgSBOQgJgCgHgFQgHgGgEgKQgEgJAAgQIAAhtIAfAAIAABtIABALQABAFACADQACAEAEACQADACAFAAQAGAAADgCQAEgCACgEIADgIIAAgLIAAhtIAgAAIAABtQAAAPgEAJQgEAKgHAGQgHAGgJACQgJACgKAAQgJAAgJgCg");
	this.shape_184.setTransform(268.7,143.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D41F38").s().p("AgbBLQgLgFgGgLQgFgLgCgPQgCgPAAgSQAAgRACgPQACgPAFgLQAGgKALgGQAKgGARAAQASAAAKAGQALAGAFAKQAHALABAPQACAPgBARQABASgCAPQgBAPgHALQgFALgLAFQgKAGgSAAQgRAAgKgGgAgKg2QgEADgDAHQgCAHgBALIAAAaIAAAbQABALACAHQADAHAEADQAEAEAGAAQAHAAAEgEQAFgDACgHQADgHAAgLIABgbIgBgaQAAgLgDgHQgCgHgFgDQgEgDgHAAQgGAAgEADg");
	this.shape_185.setTransform(256.7,143.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D41F38").s().p("AAUBOIgfhAIgMASIAAAuIggAAIAAicIAgAAIAAA/IAAAAIAng/IAjAAIgrBDIAwBZg");
	this.shape_186.setTransform(240.2,143.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D41F38").s().p("AATBOIgDgHIgBgJIgBgeQAAgKgFgEQgEgGgJAAIgRAAIAABCIgfAAIAAicIA5AAQAUAAALAKQALAKAAAVQAAAQgGAJQgHALgNACIAAAAQAMACAFAGQAGAGABANIABAKIAAALIABATQACAGAEADIAAABgAgVgJIAOAAQAKAAAGgGQAGgFAAgNQAAgVgVAAIgPAAg");
	this.shape_187.setTransform(227.7,143.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D41F38").s().p("AgbBLQgLgFgFgLQgGgLgBgPQgCgPAAgSQAAgRACgPQABgPAGgLQAFgKALgGQALgGAQAAQASAAALAGQAKAGAGAKQAGALABAPQACAPAAARQAAASgCAPQgBAPgGALQgGALgKAFQgLAGgSAAQgQAAgLgGgAgKg2QgEADgDAHQgCAHgBALIgBAaIABAbQABALACAHQADAHAEADQAEAEAGAAQAHAAAFgEQAEgDACgHQACgHABgLIABgbIgBgaQgBgLgCgHQgCgHgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_188.setTransform(215.2,143.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D41F38").s().p("AASBOIgShwIAAAAIgRBwIgjAAIgdicIAeAAIASB0IAAAAIATh0IAeAAIASB0IASh0IAeAAIgdCcg");
	this.shape_189.setTransform(200.8,143.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D41F38").s().p("AgoBGQgLgMAAgWIAAgGIAfAAIAAAEIABAKQABAFACADQADADAEACQAEACAFAAQAHAAAGgFQAGgFAAgKQAAgFgBgEQgCgEgDgDQgDgDgGgCIgMgGQgLgDgHgEQgIgFgFgEQgFgGgDgHQgCgIAAgJQAAgYANgLQANgLAWAAQAKAAAJACQAJACAGAFQAHAGADAIQAEAIAAALIAAAEIgeAAQAAgLgEgGQgEgGgJAAQgFAAgDABIgGAEIgDAGIgBAHQAAAHAEAFQADAFAKAFIAXAKQAJAEAGADQAGAFADAFQADAFACAFQABAGAAAIQAAAZgOALQgPALgYAAQgbAAgMgLg");
	this.shape_190.setTransform(186.7,143.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D41F38").s().p("AgoBGQgLgMAAgWIAAgGIAfAAIAAAEIABAKQABAFACADQADADAEACQAEACAFAAQAHAAAGgFQAGgFAAgKQAAgFgBgEQgCgEgDgDQgDgDgGgCIgMgGQgLgDgHgEQgIgFgFgEQgFgGgDgHQgCgIAAgJQAAgYANgLQANgLAWAAQAKAAAJACQAJACAGAFQAHAGADAIQAEAIAAALIAAAEIgeAAQAAgLgEgGQgEgGgJAAQgFAAgDABIgGAEIgDAGIgBAHQAAAHAEAFQADAFAKAFIAXAKQAJAEAGADQAGAFADAFQADAFACAFQABAGAAAIQAAAZgOALQgPALgYAAQgbAAgMgLg");
	this.shape_191.setTransform(175.3,143.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#D41F38").s().p("AgsBOIAAicIBXAAIAAAbIg4AAIAAAkIA0AAIAAAaIg0AAIAAAqIA6AAIAAAZg");
	this.shape_192.setTransform(164.7,143.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D41F38").s().p("AgSBOQgJgCgHgFQgHgGgEgKQgEgJAAgQIAAhtIAfAAIAABtIABALQABAFACADQACAEAEACQADACAFAAQAGAAADgCQAEgCACgEIADgIIAAgLIAAhtIAgAAIAABtQAAAPgEAJQgEAKgHAGQgHAGgJACQgJACgKAAQgJAAgJgCg");
	this.shape_193.setTransform(153.2,143.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D41F38").s().p("AgcBMQgJgFgFgLQgFgKgCgQQgCgPAAgUQAAgTADgPQACgPAGgKQAHgKAKgFQAKgFAOAAQAaAAALAMQAMANAAAYIgeAAIgCgJIgDgIQgCgEgDgDQgEgCgFAAQgKAAgFANQgFAMAAAeIABAYQABAMACAIQACAIAFAEQAEAFAGAAQACAAAEgCQADgCADgDQADgDACgEQACgFAAgHIAAgQIgVAAIAAgWIA0AAIAABUIgYAAIAAgPIAAAAQgGAJgIAEQgIAEgKAAQgPAAgJgFg");
	this.shape_194.setTransform(141.2,143.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D41F38").s().p("AgsBOIAAicIBXAAIAAAbIg4AAIAAAkIA0AAIAAAaIg0AAIAAAqIA6AAIAAAZg");
	this.shape_195.setTransform(124.9,143.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D41F38").s().p("AASBOIAAhFIgkAAIAABFIgfAAIAAicIAfAAIAAA9IAkAAIAAg9IAgAAIAACcg");
	this.shape_196.setTransform(113.2,143.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D41F38").s().p("AgPBOIAAiBIgiAAIAAgbIBjAAIAAAbIgiAAIAACBg");
	this.shape_197.setTransform(101.8,143.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D41F38").s().p("AgsBOIAAicIBXAAIAAAbIg3AAIAAAkIA0AAIAAAaIg0AAIAAAqIA5AAIAAAZg");
	this.shape_198.setTransform(86.3,143.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D41F38").s().p("AAUBOIgfhAIgMASIAAAuIggAAIAAicIAgAAIAAA/IAAAAIAng/IAjAAIgrBDIAwBZg");
	this.shape_199.setTransform(75.6,143.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D41F38").s().p("AAcBOIgHggIgpAAIgHAgIghAAIApicIAnAAIApCcgAAPAUIgPhHIAAAAIgOBHIAdAAg");
	this.shape_200.setTransform(62.8,143.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#D41F38").s().p("AgPBOIAAiBIgiAAIAAgbIBjAAIAAAbIgiAAIAACBg");
	this.shape_201.setTransform(52.7,143.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D41F38").s().p("AgsBOIAAicIBXAAIAAAbIg4AAIAAAkIA0AAIAAAaIg0AAIAAAqIA6AAIAAAZg");
	this.shape_202.setTransform(37.2,143.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D41F38").s().p("AASBOIgRhwIgBAAIgRBwIgjAAIgdicIAeAAIASB0IAAAAIATh0IAeAAIASB0IASh0IAeAAIgcCcg");
	this.shape_203.setTransform(23.3,143.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},375).wait(75));

	// Myers Automotive Group - Logo - Color
	this.instance = new lib.MyersAutomotiveGroupLogoColor_1();
	this.instance.parent = this;
	this.instance.setTransform(63.5,227,1,1,0,0,0,52.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450));

	// Rectangle
	this.instance_1 = new lib.Rectangle_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(450));

	// View Used Inventory
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#D41F38").s().p("AgKA2IAAgrIgbg/IAYAAIANApIAAAAIAPgpIAXAAIgbA/IAAArg");
	this.shape_204.setTransform(278.8,227.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#D41F38").s().p("AAMA2IgCgGIAAgGIAAgVQgBgFgCgEQgEgEgFAAIgMAAIAAAuIgVAAIAAhqIAmAAQAOAAAIAGQAGAHAAAOQAAALgEAHQgEAGgJACQAIABAEAEQADAEABAJIABAHIAAAIIABANQABAEADACIAAABgAgOgGIAJAAQAHAAAEgDQAEgEAAgJQABgOgPAAIgKAAg");
	this.shape_205.setTransform(271.3,227.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D41F38").s().p("AgSAzQgHgDgEgIQgEgHgBgKQgBgLAAgMQAAgLABgKQABgLAEgHQAEgHAHgEQAHgEALAAQAMAAAHAEQAHAEAEAHQAEAHABALIABAVIgBAXQgBAKgEAHQgEAIgHADQgHAEgMAAQgLAAgHgEgAgHgkQgCACgCAFIgCAMIgBARIABATIACAMQACAFACACQADACAEAAQAFAAADgCQADgCABgFIACgMIABgTIgBgRIgCgMQgBgFgDgCQgDgDgFAAQgEAAgDADg");
	this.shape_206.setTransform(262.8,227.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D41F38").s().p("AgKA2IAAhZIgXAAIAAgRIBDAAIAAARIgXAAIAABZg");
	this.shape_207.setTransform(255.1,227.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#D41F38").s().p("AALA2IgZhLIgBAAIAABLIgTAAIAAhqIAYAAIAZBIIABAAIAAhIIATAAIAABqg");
	this.shape_208.setTransform(247.3,227.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#D41F38").s().p("AgdA2IAAhqIA6AAIAAARIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_209.setTransform(239.7,227.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#D41F38").s().p("AgNA2IgYhqIAXAAIAOBOIABAAIAPhOIAWAAIgYBqg");
	this.shape_210.setTransform(232.1,227.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D41F38").s().p("AALA2IgZhLIgBAAIAABLIgTAAIAAhqIAYAAIAZBIIABAAIAAhIIATAAIAABqg");
	this.shape_211.setTransform(224,227.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_212.setTransform(217.8,227.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D41F38").s().p("AgiA2IAAhqIAiAAQALAAAHADQAHAEADAGQAEAIACAJIABAWQAAANgCAKQgBAKgFAHQgDAHgIADQgGADgLABgAgMAlIAJAAQAFAAADgBQAEgCABgFQADgFAAgGIABgSIgBgQQAAgHgDgEQgBgFgEgCQgEgCgEAAIgJAAg");
	this.shape_213.setTransform(208.2,227.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#D41F38").s().p("AgdA2IAAhqIA6AAIAAARIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_214.setTransform(200.4,227.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D41F38").s().p("AgbAvQgHgIAAgOIAAgFIAVAAIAAADIABAHIACAFQABADADABIAGABQAFAAAEgDQAEgDAAgHIgBgHIgDgEIgGgEIgIgEIgNgFIgIgFQgEgEgBgFQgCgFAAgHQAAgQAJgIQAJgHAPAAQAGAAAGABQAGACAEADQAFAEACAFQADAGAAAHIAAADIgVAAQAAgHgDgEQgCgFgGAAIgFABIgEADIgCAEIgBAFQAAAFACADQADAEAGACIAQAIIAKAEIAGAHIADAHIABAJQAAARgKAIQgJAHgRAAQgSAAgIgIg");
	this.shape_215.setTransform(192.8,227.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D41F38").s().p("AgLA1QgHgBgFgEQgEgDgDgHQgDgHAAgLIAAhJIAWAAIAABJIAAAIIACAGIAEAEIAFABIAGgBIAEgEIACgGIAAgIIAAhJIAWAAIAABJQAAALgDAGQgDAHgEAEQgGAEgGABIgMABIgLgBg");
	this.shape_216.setTransform(185,227.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D41F38").s().p("AAMA2IgMhNIgLBNIgYAAIgThqIAUAAIAMBOIANhOIAUAAIALBOIABAAIAMhOIAVAAIgUBqg");
	this.shape_217.setTransform(171.8,227.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D41F38").s().p("AgdA2IAAhqIA6AAIAAARIglAAIAAAZIAjAAIAAARIgjAAIAAAdIAmAAIAAASg");
	this.shape_218.setTransform(162.8,227.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#D41F38").s().p("AgKA2IAAhqIAVAAIAABqg");
	this.shape_219.setTransform(157.1,227.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#D41F38").s().p("AgNA2IgYhqIAXAAIAOBOIABAAIAPhOIAWAAIgYBqg");
	this.shape_220.setTransform(151.3,227.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]}).wait(450));

	// CTA Rectangle
	this.instance_2 = new lib.CTARectangle_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(215,227.5,1,1,0,0,0,75,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(450));

	// 2016 Vehicles
	this.instance_3 = new lib._2016Vehicles();
	this.instance_3.parent = this;
	this.instance_3.setTransform(244.5,74,1,1,0,0,0,244.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(450));

	// Background
	this.instance_4 = new lib.Background_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	id: 'D1C1D4432354410DB1E121E77F7922C5',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_.png", id:"17_10_MyersAutoGroup_AdWords_Used_300x250_atlas_"}
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
an.compositions['D1C1D4432354410DB1E121E77F7922C5'] = {
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
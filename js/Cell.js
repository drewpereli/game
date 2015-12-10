

function Cell(x, y){
	this.x = x;
	this.y = y;
	this.xPx = this.x * g.view.cellLength;
	this.yPx = this.y * g.view.cellLength;

	this.cellLength;

	this.ctxs = {
		//This gets filled in 'initialize'
	}
}




Cell.prototype.fillRect = function(color, ctxName)
{
	var ctx = this.ctxs[ctxName];
	ctx.fillStyle = color;
	ctx.fillRect(this.xPx, this.yPx, this.cellLength, this.cellLength);
}



Cell.prototype.fillText = function(character, color, ctxName)
{
	var ctx = this.ctxs[ctxName];
	ctx.fillStyle = color;
	ctx.fillText(character, this.xPx + this.cellLength / 2, this.yPx + this.cellLength / 2);
}




Cell.prototype.strokeRect = function(color, ctxName)
{
	var ctx = this.ctxs[ctxName];
	ctx.strokeStyle = color;
	ctx.strokeRect(this.xPx + 1, this.yPx + 1, this.cellLength - 2, this.cellLength - 2);
}

Cell.prototype.strokeThickRect = function(color, ctxName)
{
	var ctx = this.ctxs[ctxName];
	ctx.strokeStyle = color;
	var thickness = 2;
	for (var i = 1 ; i <= thickness ; i++)
	{
		ctx.strokeRect(this.xPx + i, this.yPx + i, this.cellLength - 2 * i, this.cellLength - 2 * i);
	}
}



//Experimental cool looking lava
Cell.prototype.fillLava = function()
{
	var squareLength = 5;
	var ctx = this.ctxs.terrain;
	var done = false;

	for (var xPx = this.xPx ; xPx <= this.xPx + this.cellLength - squareLength ; xPx += squareLength)
	{
		for (var yPx = this.yPx ; yPx <= this.yPx + this.cellLength - squareLength ; yPx += squareLength)
		{
			var color = 'rgb(' +  g.rand.nextInt(200, 256) + ', 50, 0)';
			ctx.fillStyle = color;
			ctx.fillRect(xPx, yPx, squareLength, squareLength);
		}
	}

	/*
	ctx.fillStyle = 'blue';
	ctx.fillRect(this.xPx, this.yPx, this.cellLength, this.cellLength);
	*/
}



Cell.prototype.clearRect = function(ctxName)
{
	var ctx = this.ctxs[ctxName];
	ctx.clearRect(this.xPx, this.yPx, this.cellLength, this.cellLength);
}


Cell.prototype.fullClear = function()
{
	for (var name in this.ctxs)
	{
		this.clearRect(name);
	}
}




Cell.prototype.initialize = function()
{
	for (name in g.view.canvases)
	{
		var canvas = g.view.canvases[name];
		this.ctxs[name] = canvas.getContext('2d');
		this.ctxs[name].font = g.fontSize + 'pt ' + g.fontFamily;
	}
	this.cellLength = g.view.cellLength;
}




var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var block_image_object= "";

function newImage(get_image)
{
	fabric.Image.fromURL(get_image,function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(blockImageWidth);
		block_image_object.scaleToHeight(blockImageHeight);
		block_image_object.set({
        top:blockY,
		left:blockX
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69')
	{
		blockX = 50;
		newImage('rr1.png');
		console.log("e");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png');
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png');
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('pr.png');
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	    newImage('br.png');
	}
	
}


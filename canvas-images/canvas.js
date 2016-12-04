let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.height=window.innerHeight-20;
canvas.width =window.innerWidth-20;

const NUM_POINTS = 1;
const points = [];

// Load the images
var image1=document.getElementById("mypictureID");
var image2=document.getElementById("mypictureID2");

for(let i = 0; i < NUM_POINTS; i++)
{

  points.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: Math.random() * 100,
    height: Math.random() * 100,
    xDelta: 0.9,
    yDelta: 1,
    color: 'orange', // the best color
	image: image1 //Set the starting image 
	
  });
}

const draw = function()
{
  context.clearRect(0,0,canvas.width,canvas.height);

  for (let i=0;i<NUM_POINTS;i++)
  {
    point=points[i];
   
	context.drawImage(point.image,point.x,point.y); //Draw the image from points array

    point.x+=point.xDelta;
    point.y+=point.yDelta;

    if(point.x<=0 ||point.x>=canvas.width-point.width)
	{
      point.xDelta*=-1;
	  
		  if(point.image==image1)point.image=image2; //Switch the images when hitting edge
		  else
			  point.image=image1;
	}

    if(point.y<=0 ||point.y>=canvas.height-point.height)
	{
      point.yDelta*=-1;
	  
		if(point.image==image1)point.image=image2; //Switch the images when hitting edge
		else
		  point.image=image1;
	}
  }

};
let animate = function() {
  draw();
  setTimeout(animate, 5);

};

animate();

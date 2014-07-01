# Matts Parallax

This is a plugin for creating super smooth parallax animations in small places.

**Features**

* Uses hardware accelerated 3D Transform as to animate the background. All the work is offloaded to the GPU.
* Only animates the image when its within the viewport.
* It never lets the image animate outside of the parallax area (For some reason most parallax plugins move the image too much, showing the background)
* Scrolling is debounced to requestAnimationFrame for maximum scrolling efficiency. 
* The parallax image is defined in the CSS. It's possible to have different images for responsive breakpoints.
* Every pixel of the image is used in the animation. 

## Example use

```html
<!DOCTYPE html>
<html>
<head>
<style>
.parallax {
	position: relative;
	width:100%;
	height:300px;
	background-color: #000;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
}
.parallaxBk{
	position: relative;
	width:100%;
	height:100%;
	left:0;
	top:0;
	bottom:0;
}
.parallaxBk .imgBackground {
	position: absolute;
	width:100%;
	height:100%;
	bottom:0;
	background-size:cover;
	background-position: center center;
	transform: translate3d(0px, 0px, 0px);
	background-image:url('background.jpg');
}
.parallaxFront{
	position: absolute;
	width:100%;	
	left:0;
	top:0;
}
</style>
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="jquery.mattsparallax.min.js"></script>
</head>
<body>
	<section class="parallax">
		<div class="parallaxBk">
			<div class="imgBackground"></div>
		</div>
		<div class="parallaxFront">
			<div class="container">Text in front</div>
		</div>
	</section>
<script>

$(".parallax").mattsParallax(40);

</script>
</body>
</html>
```


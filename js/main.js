<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hello, world!</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="" />
  <link href="https://cdn.jsdelivr.net/npm/modern-normalize@v3.0.1/modern-normalize.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="apple-touch-icon.png">
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <script async src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'></script>
  <script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
  
	gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
<body>
  <header>
	<h1>Hello, world!</h1>
  </header>
  <nav class="nav" id="nav">
	<a href="#home">Logo</a>
	<a href="#menu-item-1">Menu Item 1</a>
	<a href="#menu-item-2">Menu Item 2</a>
	<a href="#menu-item-3">Menu Item 3</a>
	<a href="javascript:void(0);" id="menu-toggle" onclick="togglemenu()">
	  <div class="menu-toggle__bar1"></div>
	  <div class="menu-toggle__bar2"></div>
	  <div class="menu-toggle__bar3"></div>
	</a>
  </nav>
  <style>
  /* For best practice, move CSS below to an external CSS file. */
  .nav {
	overflow: hidden; }
  .nav a {
	float: left;
	margin: 10px;
	display: block; }
  .nav #menu-toggle {
	display: none; }
  @media screen and (max-width: 600px) {
	.nav a:not(:first-child) {
	  display: none; }
	.nav a#menu-toggle {
	  float: right;
	  display: block; } }
  @media screen and (max-width: 600px) {
	.nav.nav--open {
	  position: relative; }
	.nav.nav--open #menu-toggle {
	  position: absolute;
	  right: 0;
	  top: 0; }
	.nav.nav--open a {
	  float: none;
	  display: block;
	  text-align: left; } }
  .menu-toggle__bar1, .menu-toggle__bar2, .menu-toggle__bar3 {
	width: 21px;
	height: 3px;
	background-color: #000000;
	margin: 4px 0;
	transition: 0.3s; }
  .menu-toggle--open .menu-toggle__bar1 {
	transform: translate(0, 7px) rotate(-45deg); }
  .menu-toggle--open .menu-toggle__bar2 {
	opacity: 0; }
  .menu-toggle--open .menu-toggle__bar3 {
	transform: translate(0, -7px) rotate(45deg); }
  </style>
  <main>
	<section></section>
	<section></section>
	<section></section>
  </main>
  <table border="1" cellspacing="0" cellpadding="5">
	<tr>
	  <td>Row 1, Column 1</td>
	  <td>Row 1, Column 2</td>
	  <td>Row 1, Column 3</td>
	</tr>
	<tr>
	  <td>Row 2, Column 1</td>
	  <td>Row 2, Column 2</td>
	  <td>Row 2, Column 3</td>
	</tr>
  </table>
  <footer>
	<small>© <script>document.write(new Date().getFullYear())</script> Your company name. All Rights Reserved.</small>
  </footer>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" crossorigin="anonymous"></script>
  <script>
  function togglemenu() {
	var x = document.getElementById("nav");
	if (x.className === "nav") {
	  x.className += " nav--open";
	} else {
	  x.className = "nav";
	}
	var element = document.getElementById("menu-toggle");
	element.classList.toggle("menu-toggle--open");
  }
  </script>
  <script src="app.js"></script>
</body>
</html>
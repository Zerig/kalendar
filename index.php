<!DOCTYPE html>
<html lang="cs">
<head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Kalendář - farnost Litomyšl</title>

    <!-- CSS -->
    <link href="css/main.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

	<!--textarea id="from" style="width:100%; height:400px;">

	</textarea-->

	<button id="convert">Convert</button>

	<!--textarea id="to" style="width:100%; height:400px;"></textarea-->



	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/assets/js/vendor/jquery.min.js"><\/script>')</script>

	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/assets/tether.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/assets/docs.min.js"></script>

    <!-- My scripts -->
    <script src="js/getJsonData.js"></script>

	<!-- Spustí speciální title -->
	<script>
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();

		$('[data-toggle="popover"]').popover()
	});
	</script>
</body>
</html>

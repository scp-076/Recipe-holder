<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Recipe holder</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/materialize.min.css') }}">
    <script defer src="{{ asset('/js/materialize.min.js') }}"></script>
    <script defer src="{{ asset('/js/app.js') }}"></script>
</head>
<body>
<main id="app">
    <div>
        <Auth/>
    </div>
    <transition name="page" mode="out-in">
        <router-view/>
    </transition>
</main>
<div class="circle1"></div>
<div class="circle2"></div>
</body>
</html>

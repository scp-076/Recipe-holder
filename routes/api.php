<?php

    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\RegisterController;
    use App\Http\Controllers\LoginController;
    use App\Http\Controllers\RecipesController;

    Route::middleware('auth:sanctum')->get('/user', function(Request $request) {
        return $request->user();
    });

    Route::middleware('auth:sanctum')->get('/authenticated', function() {
        return true;
    });

    Route::post('register', [RegisterController::class, 'register']);
    Route::post('login', [LoginController::class, 'login']);
    Route::post('logout', [LoginController::class, 'logout']);

    Route::resource('recipes', RecipesController::class);

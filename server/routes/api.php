<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::controller(GenderController::class)->group(function(){
    Route::post('/stroreGender', 'storeGender');
});














//Route::get('/user', function (Request $request) {
 //   return $request->user();
//})->middleware('auth:sanctum');
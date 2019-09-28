<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Use App\Task;
Use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return view('ember');
});

Route::get('/tasks', function () {
    return view('ember');
});


/**
 * API endpoints
 */
Route::group(['prefix' => 'api'], function() {
    Route::get('tasks', 'TaskController@index');
    Route::get('tasks/{id}', 'TaskController@show');
    Route::post('tasks', 'TaskController@store');
    Route::put('tasks/{id}', 'TaskController@update');
    Route::delete('tasks/{id}', 'TaskController@delete');
});
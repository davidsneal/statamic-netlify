<?php

use Illuminate\Support\Facades\Route;
use Davidsneal\Netlify\Http\Controllers\Actions\BuildHookController;
use Davidsneal\Netlify\Http\Controllers\Actions\GetSiteController;
use Davidsneal\Netlify\Http\Controllers\Actions\NetlifyController;
use Davidsneal\Netlify\Http\Controllers\ViewController;

Route::name(config('netlify.path').'.')->prefix(config('netlify.path'))->group(function () {
    Route::get('/', [ViewController::class, '__invoke'])->name('index');
    Route::get('/site', [GetSiteController::class, '__invoke'])->name('site');
    Route::post('/', [BuildHookController::class, '__invoke'])->name('build');
});

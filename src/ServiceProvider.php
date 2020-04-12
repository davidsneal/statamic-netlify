<?php

namespace Davidsneal\Netlify;

use Statamic\Providers\AddonServiceProvider;
use Statamic\Facades\CP\Nav;
use Statamic\Facades\Permission;

class ServiceProvider extends AddonServiceProvider
{
    protected $routes = [
        'cp' => __DIR__ . '/../routes/cp.php',
    ];

    protected $scripts = [
        __DIR__.'/../dist/js/cp.js',
    ];

    public function boot()
    {
        parent::boot();

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'netlify');
        $this->mergeConfigFrom(__DIR__ . '/../config/netlify.php', 'netlify');
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'netlify');

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../resources/lang' => resource_path('lang/vendor/davidsneal/netlify/'),
            ], 'lang');

            $this->publishes([
                __DIR__.'/../config/netlify.php' => config_path('netlify.php'),
            ], 'config');

            $this->publishes([
                __DIR__.'/../dist' => public_path('vendor/davidsneal/netlify'),
            ], 'public');
        }

        $this->bootNavigation();
        $this->bootPermissions();
    }

    private function bootNavigation(): void
    {
        Nav::extend(function($nav) {
            $nav->create(__('netlify::lang.name'))
                ->icon(config('netlify.icon'))
                ->section('Tools')
                ->route(config('netlify.path').'.index')
                ->can('use netlify');
        });
    }

    private function bootPermissions() {
        $this->app->booted(function () {
            Permission::group('netlify', __('netlify::lang.name'), function () {
                Permission::register('use netlify')
                    ->label(__('netlify::lang.permission'));
            });
        });
    }
}

@extends('statamic::layout')

@section('title', 'Netlify')

@section('content')
    <header class="mb-3">
        <div class="flex items-center justify-between">
            <h1>{{ __('netlify::lang.name') }}</h1>
        </div>
    </header>
    <div class="p-0 card">
        <div class="p-2">
            <netlify-addon
                hash="{{ $hash }}"
                :lang='@json(__('netlify::lang.component'))'
                :routes='@json($routes)'
            />
        </div>
    </div>
@endsection

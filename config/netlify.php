<?php

return [
    'icon' => 'radio',
    'netlify' => [
        'access_token' => env('NETLIFY_ACCESS_TOKEN'),
        'site_id' => env('NETLIFY_SITE_ID'),
    ],
    'path' => 'netlify',
    'build_hook' => env('NETLIFY_BUILD_HOOK'),
];

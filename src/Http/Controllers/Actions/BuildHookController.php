<?php

namespace Davidsneal\Netlify\Http\Controllers\Actions;

use Davidsneal\Netlify\Http\Controllers\BaseController;
use Zttp\Zttp;

class BuildHookController extends BaseController
{
    public function __invoke()
    {
        // $response = Zttp::post('https://api.netlify.com/api/v1/sites/'.config('netlify.netlify.site_id').'/builds?access_token='.config('netlify.netlify.access_token'));
        $response = Zttp::post(config('netlify.build_hook'));

        abort_unless($response->isOk(), __('netlify::lang.failed'));

        return response()->json();
    }
}

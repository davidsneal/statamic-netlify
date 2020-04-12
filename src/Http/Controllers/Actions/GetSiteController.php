<?php

namespace Davidsneal\Netlify\Http\Controllers\Actions;

use Davidsneal\Netlify\Http\Controllers\BaseController;
use Zttp\Zttp;

class GetSiteController extends BaseController
{
    public function __invoke()
    {
        $response = Zttp::get('https://api.netlify.com/api/v1/sites/'.config('netlify.netlify.site_id').'?access_token='.config('netlify.netlify.access_token'));

        abort_unless($response->isOk(), $response->status(), __('netlify::lang.netlify.failed'));

        return response()->json($response->json());
    }
}

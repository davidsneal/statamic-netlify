<?php

namespace Davidsneal\Netlify\Http\Controllers;

use Illuminate\Support\Str;

class ViewController extends BaseController
{
    public function __invoke()
    {
        return view('netlify::cp.netlify', [
            'hash' => $this->getCommitHash(),
            'routes' => [
                'build' => route('statamic.cp.'.config('netlify.path').'.build'),
                'site' => route('statamic.cp.'.config('netlify.path').'.site'),
            ],
        ]);
    }

    /**
     * Get the current commit hash
     *
     * @return string
     */
    private function getCommitHash(): string
    {
        return trim(file_get_contents(base_path('.git/refs/heads/'.$this->getBranchName())));
    }

    /**
     * Get the active branch name
     *
     * @return string
     */
    private function getBranchName(): string
    {
        // get the contents of the current HEAD file
        $head = trim(file_get_contents(base_path('.git/HEAD')));

        // get the end of the string (ref: refs/heads/{branchName})
        return Str::afterLast($head, '/');
    }
}

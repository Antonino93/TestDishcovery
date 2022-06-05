<?php

namespace App\Http\Requests\Api;

use App\Role_User;

class DeleteArticle extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $article = $this->route('article');
        $roleId = auth()->user()->role_id;
        $adminRole = Role_User::where('role_name', 'admin')->first();
        return (($article->user_id == auth()->id()) || ($roleId == $adminRole->id));
    }
}

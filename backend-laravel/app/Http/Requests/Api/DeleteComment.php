<?php

namespace App\Http\Requests\Api;

use App\Role_User;

class DeleteComment extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $comment = $this->route('comment');
        $roleId = auth()->user()->role_id;
        $adminRole = Role_User::where('role_name', 'admin')->first();
        return (($comment->user_id == auth()->id()) || ($roleId == $adminRole->id));
    }
}

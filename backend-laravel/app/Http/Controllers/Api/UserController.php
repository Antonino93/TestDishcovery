<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\UpdateUser;
use App\RealWorld\Transformers\UserTransformer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends ApiController
{
    /**
     * UserController constructor.
     *
     * @param UserTransformer $transformer
     */
    public function __construct(UserTransformer $transformer)
    {
        $this->transformer = $transformer;

        $this->middleware('auth.api');
    }

    /**
     * Get the authenticated user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return $this->respondWithTransformer(auth()->user());
    }

    /**
     * Update the authenticated user and return the user if successful.
     *
     * @param UpdateUser $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        $user = auth()->user();

        $filename = time() . '.' . request()->uploadImage->getClientOriginalExtension();
        request()->uploadImage->move(storage_path('profile-pic'), $filename);

        $pathToStore = Storage::disk('profile-pic') . "/" . $filename;

        $user = User::findOrFail(auth()->id());

        // Make sure you've got the Page model
        if ($user) {
            //Insert and mapping other field of user
            //Update user image profile
            $user->image = $pathToStore;
            $user->save();
        }
        // if ($request->has('user')) {
        //     $user->update($request->get('user'));
        // }

        return $this->respondWithTransformer($user);
    }
}

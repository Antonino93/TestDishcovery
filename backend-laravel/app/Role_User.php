<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role_User extends Model
{
    /**
     * Table name.
     *
     * @var array
     */
    protected $table = 'role_users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'role_name'
    ];

    /**
     * Get all roles
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role_User::class)->latest();
    }
}

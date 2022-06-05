<?php

use App\Role_User;
use Illuminate\Database\Seeder;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role_User::insert(['role_name' => 'admin']);
        Role_User::insert(['role_name' => 'editor']);
        Role_User::insert(['role_name' => 'user']);
    }
}

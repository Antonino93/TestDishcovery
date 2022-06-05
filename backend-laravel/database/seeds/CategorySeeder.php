<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        static $reduce = 999;

        Category::insert(['name' => 'sport', 'flag' => true, 'created_at' => \Carbon\Carbon::now()->subSeconds($reduce--)]);
        Category::insert(['name' => 'food', 'flag' => true, 'created_at' => \Carbon\Carbon::now()->subSeconds($reduce--)]);
        Category::insert(['name' => 'travel', 'flag' => true, 'created_at' => \Carbon\Carbon::now()->subSeconds($reduce--)]);
        Category::insert(['name' => 'news', 'flag' => true, 'created_at' => \Carbon\Carbon::now()->subSeconds($reduce--)]);
    }
}

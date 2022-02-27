<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contacts = [
            ['name' => 'toni',  'surname' => 'morell', 'phone' => 423],
            ['name' => 'viki', 'surname' => 'rubia', 'phone' => 53453],
            ['name' => 'pau', 'surname' => 'valorant', 'phone' => 5634],

        ];

        DB::table('contacts')->insert($contacts);
    }
}

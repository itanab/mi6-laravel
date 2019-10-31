<?php

use Illuminate\Database\Seeder;
use App\Status;

class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = [["name" => "Active"],
        ["name" => "Alive"],
        ["name" => "Arrested"],
        ["name" => "Deceased"],
        ["name" => "In Custody"],
        ["name" => "Incarcerated"],
        ["name" => "Retired"],
        ["name" => "Unknown"]];
        
        
        Status::insert($array);
    }
}

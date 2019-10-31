<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::orderBy('name')->limit(20)->get();
        return $people;
    }
}

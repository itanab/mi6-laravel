<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function person()
    {
        return $this->hasOne('App\Person');
    }
}

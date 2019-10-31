<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    public function aliases()
    {
        return $this->hasMany('App\Alias');
    }

    public function image()
    {
        return $this->belongsTo('App\Image');
    }

    public function status()
    {
        return $this->belongsTo('App\Status');
    }
}

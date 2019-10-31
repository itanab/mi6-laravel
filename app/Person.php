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
        return $this->hasOne('App\Image');
    }

    public function statuses()
    {
        return $this->belongsTo('App\Status');
    }
}

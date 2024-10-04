<?php

use Kirby\Template\Snippet;

function layout($name = 'default', ?array $data = []) {
  return Snippet::begin(
    file: kirby()->root('layouts') . "/$name.php",
    data: $data,
  );
}

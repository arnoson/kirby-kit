<?php

Kirby\Cms\App::plugin('arnoson/kirby-auto-srcset', [
  'options' => [
    'minWidth' => 300,
    'maxWidth' => 1000,
    'fileSizeStep' => 20,
    'maxSteps' => 10,
    'thumb' => [
      'quality' => 80,
      'crop' => 'center',
    ],
  ],
  'fileMethods' => require_once __DIR__ . '/fileMethods.php',
]);
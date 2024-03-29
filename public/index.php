<?php

include __DIR__ . '/../vendor/autoload.php';

$kirby = new Kirby\Cms\App([
  'roots' => [
    'index' => __DIR__,
    'base' => ($base = dirname(__DIR__)),
    'content' => "$base/content",
    'site' => ($site = "$base/site"),

    'templates' => "$site/compiled/templates",
    'snippets' => "$site/compiled/snippets",
    'layouts' => "$site/compiled/layouts",

    'storage' => ($storage = "$base/storage"),
    'accounts' => "$storage/accounts",
    'cache' => "$storage/cache",
    'sessions' => "$storage/sessions",
  ],
]);

echo $kirby->render();

<?php
require __DIR__ . '/../plugins/kirby3-dotenv/global.php';
loadenv(['dir' => __DIR__ . '/../../', 'file' => '.env.production']);

return [
  'bnomei.janitor.secret' => $_ENV['JANITOR_SECRET'],
];

<?php
require __DIR__ . '/../plugins/kirby3-dotenv/global.php';
loadenv(['dir' => __DIR__ . '/../../', 'file' => '.env.development']);

return [
  'debug' => true,
  'panel' => ['install' => true],
  // Local email testing with Mailpit (included in DDEV)
  'email' => [
    'transport' => [
      'type' => 'smtp',
      'host' => 'localhost',
      'port' => 1025,
      'security' => false,
    ],
  ],
];

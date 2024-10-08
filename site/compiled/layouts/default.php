<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="data:," >
  <title><?= $site->title() ?></title>
  <?= vite()->css('scripts/index.ts') ?>
  <?= vite()->js('scripts/index.ts', ['defer' => true]) ?>
</head>
<body class="no-js" data-template="<?= $page->template()->name() ?>">
  <script>document.body.classList.remove('no-js')</script>
  <?php snippet('menu'); ?>
  <main><?= $slots->default() ?></main>
</body>
</html>
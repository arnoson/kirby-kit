<?php layout('default'); ?>

<h1><?= $page->title() ?></h1>

<?php snippet('image', __snippetData([ '$image' => $page->files()->first(), ])); ?>
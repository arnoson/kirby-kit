<?php

use Kirby\Toolkit\A;

$format ??= 'webp';
$lazy ??= true;
$ratio ??= null;
$sizes ??= null;
$maxWidth ??= 3000;

$isSvg = $image->mime() === 'image/svg+xml';
if ($isSvg) {
  $lazy = false;
}

$style = 'aspect-ratio: ' . ($ratio ?? $image->ratio());

$src = $image->url();
$srcset = $image->autoSrcset([
  'thumb' => ['format' => $format],
  'ratio' => $ratio,
  'maxWidth' => $maxWidth,
]);

$commonAttr = [
  'class' => 'image',
  'style' => $style,
  'alt' => '',
];

$normalAttr = [
  'src' => $src,
  'srcset' => $srcset,
];

$lazyAttr = [
  'data-src' => $src,
  'data-srcset' => $srcset,
  'data-thumbhash' => $image->thumbhash(),
  'data-sizes' => 'auto',
  'loading' => 'lazy',
];
?>

<img <?= attributes(
  A::append($commonAttr, $lazy ? $lazyAttr : $normalAttr),
)->merge($attr) ?> >
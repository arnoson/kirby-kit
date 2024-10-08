# Kirby Auto Srcset

A plugin for `Kirby 3` to generate an image srcset automatically.
Based on `Processwire CMS` user `DaveP`'s forum [post](https://processwire.com/talk/topic/12036-responsive-image-breakpoints-with-field-templates/).

## Installation

```
composer require arnoson/kirby-auto-srcset
```

## Usage

```php
$srcset = $image->autoSrcset([
  'minWidth' => 300,
  'maxWidth' => 1024,
  'format' => 'avif'
  'quality' => 80
]);
```

This will create the min and max dimensions as well as the dimensions in between,
trying to create the images in roughly 20kb file size steps.

## Configuration

All options passed to `$file->autoSrcset()` directly or set in the config.

```php
// your-template.php
$srcset = $image->autoSrcset([
  'minWidth' => 300,
  'maxWidth' => 1000,

  // in kb
  'fileSizeStep' => 20,

  // The maximum number of images to be created.
  'maxSteps' => 10,

  // Options to pass to kirby's `$file->thumb()` method.
  'quality' => 80,
  'format' => 'webp',
  // ...
]);
```

```php
// config.php
return [
  'arnoson/kirby-auto-srcset' => [
    'minWidth' => 300,
    'maxWidth' => 1000,
    // ...
  ]
];
```

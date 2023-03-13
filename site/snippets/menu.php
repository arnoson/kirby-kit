<nav class="menu" aria-label="Main Menu">
  <ul>
    <?php foreach (
    	$site
    		->children()
    		->listed()
    		->prepend($site->homePage())
    	as $child
    ): ?>
      <li>
        <a <?= attr([
        	'href' => $child->url(),
        	'aria-current' => $child->isActive() ? 'page' : null,
        ]) ?>><?= $child->title() ?></a>
      </li>
    <?php endforeach; ?>
  </ul>
</nav>
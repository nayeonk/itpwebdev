Object Oriented Programming Workshop 2
====

## Overview

* Access control modifiers / visibility on properties and methods
	* public, private, protected (later)
* Inheritance
* protected visibility
* statics
* UrlSlug class

```php
class UrlSlug {
	private $phrase;
	private $delimeter;

	public function __construct($phrase, $delimeter = '-')
	{
		$this->phrase = $phrase;
		$this->delimeter = $delimeter;
	}


	public function create()
	{
		return str_replace(' ', $this->delimeter, strtolower($this->phrase));
	}

}


$slug = new UrlSlug('welcome to ITP 405', '_');
var_dump($slug->create());
```
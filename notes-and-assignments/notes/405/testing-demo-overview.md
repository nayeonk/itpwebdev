Testing Demo Overview
=====================

* Calculator example
	* AAA
	* assertEquals
	* other assertions
* Billing example
	* setUp
	* tearDown
* running phpunit in Laravel

### 1. Billing example

```php
class MonthlyBillingTest extends PHPUnit_Framework_TestCase {
	public $data;

	public function setUp()
	{
		$this->data = [
			[
				'campaign' => 'Campaign 1',
				'spent' => 10
			],
			[
				'campaign' => 'Campaign 2',
				'spent' => 30
			],
			[
				'campaign' => 'Campaign 3',
				'spent' => 20
			]
		];
	}

	public function test_total_spent_with_cr()
	{
		$billing = new MonthlyBilling($this->data, 0.05);
		$total = $billing->total();
		$this->assertEquals(60 * 0.05, $total);
	}

	public function test_total_without_cr()
	{
		$billing = new MonthlyBilling($this->data);
		$total = $billing->total();
		$this->assertEquals(6, $total); // uses 0.10 by default
	}

	public function test_get_invoice_items()
	{
		$billing = new MonthlyBilling($this->data);
		$items = $billing->getInvoiceItems();

		$expected = [
			[
				'campaign' => 'Campaign 1',
				'total' => 10 * 0.10
			],
			[
				'campaign' => 'Campaign 2',
				'total' => 30 * 0.10
			],
			[
				'campaign' => 'Campaign 3',
				'total' => 20 * 0.10
			]
		];

		$this->assertEquals($expected, $items);
	}
```


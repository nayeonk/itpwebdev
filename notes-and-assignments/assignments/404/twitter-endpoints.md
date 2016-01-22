Twitter Endpoints
=================

Read through the [Twitter API REST Documentation](https://dev.twitter.com/docs/api/1.1) and work with an endpoint using the Twitter library that I posted. You can use the endpoints that I created in the demo files search-tweets.php and statuses-user_timeline.php. Or if you are up for the challenge, feel free to modify that library to make requests to another endpoint.


Next, create a demo page that pulls JSON from this endpoint and dump out that JSON data into a JavaScript variable.

```php
<script>
	var json = <?php echo $json_data; ?>;
</script>
```

Lastly, render the data on a page using client-side templating

### Submission

To submit, post a link to your Cloud 9 project on your classpage so that I can view your code. Remember to change your Application Keys to your own and not mine!
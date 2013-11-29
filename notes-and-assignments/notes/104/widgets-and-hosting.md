<h3 class="grid_12">Image Maps</h3>			
<div class="grid_12">
	<p>An image map is an image with clickable areas that go to other links within your site or external links. Defining the regions to be clickable on an image map can be difficult by hand. Dreamweaver provides a great interface for creating image maps.</p>
	<ol>
		<li>Select the image which you would like to make an image map. In the Properties panel at the bottom of the Dreamweaver environment, click on the rectangular hotspot tool. Select the rectangle tool and drag the mouse pointer over a region of the image to create a rectangular hotspot. You can also choose the oval or polygon hotspot tool to make an oval or polygon hotspot region.</li>
		<li>In the Hotspot section of Property Panel, go to the Link field and click the folder icon to browse to the file you want opened when the hotspot region is clicked. Alternatively, type the file name. This can be an HTML file or an image.</li>
		<li>Repeat the steps above to define additional hotspot regions on the image map.</li>
	</ol>
</div>

<h3>Widgets</h3>
<div>
	Many social media sites allow you to embed widgets on your own site for a specific peice of functionality. For example, if you want to embed a YouTube video on your site, you can easily copy out a peice of HTML embed code (typically via an iFrame element) that they offer. An iFrame in short is a tag that allows you to embed another webpage onto your site. Head over to Youtube, select a video, and on the video view page, click on Share -> Embed, and you will be given some iFrame HTML code that allows you to display that video on your own page. Vimeo also has similar functionality.

	<h4>Twitter Widgets</h4>
	<div>
		You can put an embeddable Twitter widget on your site by visiting the <a href="https://twitter.com/settings/widgets" target="_blank">Twitter widget builder</a>. The steps to build a Twitter widget are pretty intutitive, but there are a couple things you should know.

		<ol>
			<li>You must have a Twitter account in order to set up a widget</li>
			<li>This twitter widget requires a web server. Thus, you will need to test it out by uploading your file to a web server, which will probably be the USC server in your case.</li>
			<li>If the Twitter stream widget does not work initially, open up the Console in Chrome (right click, inspect element, click on the Console tab) and you may see an error that says:

			<blockquote style="color:red;">
				You have not whitelisted this domain for your Twitter widget. Go to https://twitter.com/settings/widgets/275460925698473985/edit and add 'www-scf.usc.edu' to the 'Domains' list for this timeline.
			</blockquote>

			If this is the case, head over to the provided link and add 'www-scf.usc.edu' to the input where you can specify the domains that this widget will live on. It may take a few minutes to register.
			</li>
		</ol>
	</div>
</div>


<h3 class="grid_12">Taking your site beyond USC</h3>			
<div class="grid_12">
	<h4>Different Hosting Plans</h4>
	  <ol>
	    <li><em>Free</em>: Almost never use for real/business sites. OK for hobby or fan sites I guess. Examples: Yahoo Geocities, Tripod, etc.</li>
	    <li><em>Internet Service Providers (ISP</em>): When you get an Internet connection, from AOL to Earthlink to MCI et al, usually comes with 5-10MB of free file space in which you can build Web sites</li>
	    <li><em>Inexpensive</em>: $5-$10/month hosts. Typically more Web services, such as CGI/script space. Also tend to come with more pre-installed scripts/programs you can use.</li>
	    <li><em>Dedicated Web hosts</em>: Range from $30-$300/month. Tend to have the best up-time and technical support (for their servers, not your site).
	      <ul>
	        <li>Dedicated Servers with GoDaddy: <a href="http://www.godaddy.com/Hosting/dedicated-servers.aspx">http://www.godaddy.com/Hosting/dedicated-servers.aspx</a></li>
	        <li><a href="http://hosting.verio.com/index.php/web_webcompare.html">http://hosting.verio.com/index.php/web_webcompare.html </a></li>
	      </ul>
	    </li>
	  </ol>
	  <h4>Hosting Features</h4>
	  <p>Different plans have different features and services. For the inexpensive option, you can see 3 different levels of hosting packages and what each provides: <a href="http://www.godaddy.com/hosting/web-hosting.aspx?ci=8971G">GoDaddy Comparison Chart</a></p>
	  <p>Here is a list of some features you will typically see and use:</p>
	  <ul>
	    <li><em>Database</em>: The 'open source' solutions are often free (MySQL, etc.), while the commercial databases (from Access to SQL Server to Oracle) are usually extra charges, and sometimes substantially so.</li>
	    <li><em>Forums:</em> Many hosts have forum software pre-installed so that you can easily add forums to your web site. Some are free and some are add-on costs to hosting plan</li>
	    <li><em>Scripts</em>: Most Web hosts have a suite of scripts for common tasks (such as e-mailing the contents of forms on pages), typically in Perl. </li>
	    <li><em>E-commerce</em>: Shopping carts, online CC transactions, etc., tend to cost extra or to be bundled in higher-cost plans e-commerce plans.</li>
	    <li><em>Traffic reports</em>: Most major Web hosts include at least basic reports generated by programs such as Webtrends. Also, most plans above the basic level allow you access (to download or process yourself) to the raw log files that record your site's traffic.</li>
	    <li><em>PHP/ASP/ColdFusion/.NET</em>: Active Server Pages (ASP) is usually standard on any Windows based web server andPHP is standard on Linux web servers. PHP and ASP are typically free; ColdFusion is usually extra.</li>
	    <li><em>Secure Server</em>: SSL connections are typically included in mid-range and e-commerce plans.</li>
	  </ul>
	<h4>How to Host your Website in 3 Steps:</h4>
	  <ol>
	    <li>Register a Domain Name
	    <ul>
	      <li>A domain name is a pointer/alias to an IP address, a unique number to identify a device/machine. When you make a request for a specific domain name like (www.usc.edu), your computer accesses a Domain Name Server (DNS) to look up the IP address associated with that domain name. Once the domain name is resolved, your computer makes a request to the server with that IP address to fetch the webpage you asked for</li>
	      <li><a href="http://www.howstuffworks.com/dns.htm">Great article on how Domain Name Servers work</a></li>
	      <li>All domain names are registered in a central registry maintained by ICANN (Internet Coproration for Assigned Names and Numbers)</li>
	      <li>ICANN certifies domain name registrars like <a href="http://www.godaddy.com/">Go Daddy</a> or <a href="http://dreamhost.com/">Dreamhost</a></li>
	      <li>You can choose any name you want (given that it is available), but it should reflect what your website is about. Domain names can only contain letters, numbers, and hyphens and it is limited to 70 characters. Domain names also can be upper or lower case, but case is ignored by Domain Name Servers (DNS)</li>
	      <li>Extensions available(.com, .cm, .biz, .net, .us, .edu, .gov)</li>
	      <li>Find a domain name using a site like <a href="http://instantdomainsearch.com/">Instant Domain Search</a> instead of typing into the URL bar . Once you’ve found a domain name, register your domain name with a domain registrar. Prices vary considerably depending on the domain registrar you choose. In the past, I have always found Go Daddy to be the cheapest (more on this)</li>
	      <li><a href="http://www.internic.net/alpha.html">List of registrars</a></li>
	      <li>Domain names are usually registered for a minimum of one year, but usually you can register your domain name for longer than that. Typically, the longer the contract, the cheaper the domain name</li>
	    </ul>
		</li>
	    <li>Find a web host
	    <ul>
	      <li>At this point, all you have is a domain name. However, you don’t have a server to host your website, so you now need a server to host your files. You will link up your hosting server with your domain name</li>
	      <li>Rather than doing Step 1 (registering a domain name) and Step 2 (finding web hosting) separately, you can register a domain name and sign up for hosting in one process. If we wanted to use GoDaddy, we would create an account on their site and purchase a domain name and web hosting.</li>
	      <li>When you are browsing hosting plans, it will ask you to choose an operating system. On GoDaddy for example, it will ask you to choose between Linux or Windows. This does not mean the operating system of your local computer. This refers to the operating system of the server. The default is Linux, which is typically what you want. If you get into ASP.NET development, you will probably want Windows. </li>
	      <li>You can usually find coupon codes when buying web hosting. Google something like “coupon code GoDaddy” and you will find various discounts. In the end, hosting a site for a year will typically range from $45-$65.</li>
	    </ul>
	    <li>Upload your files using FTP
	    <ul>
		</li>
	      <li>After you’ve purchased a domain name and web hosting, you will be sent an email with FTP information so that you can upload your website files using an FTP client like Fetch, Cyberduck, or FileZilla. This process will be just like how you uploaded to the <a href="http://aludra.usc.edu/">aludra.usc.edu</a> server  </li>
	    </ul>
		</li>
	  </ol>
</div>
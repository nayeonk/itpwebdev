PHP can communicate with any database that has a ODBC driver. The upside is this includes not only any database, but other formats that have ODBC drivers such as excel. The downside is that the php odbc commands/tools are not as easy to use and bulletproof as the php commands specifically dedicated to working with mySql databases. 
  
W3School has a reading on the basics of PHP Database ODBC, including how to create an odbc connection to a database on windows and some sample code for the basic commands. 
 
For reference on individual odbc functions and their parameters and capabilities we can use the "php manual":
odbc_connect()
odbc_exec()
odbc_result_all()
odbc_fetch_row()
odbc_result()
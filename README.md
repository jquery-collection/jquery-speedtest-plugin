# jquery-speedtest-plugin
This is a plugin created in Jquery to display the speed in the network. A file from the user specified location is taked and it is used to measure the bandwidth between the server and the user sytem.

<pre>
The plugin takes inputs like:
- fileSize
- fileType
- fileUrl
- error message
- waiting message
</pre>
<h2>Description of arguments</h2>
<ol>
<li>
  <h3>filesize</h3>
  <p>Takes the size of the reference file in bytes. This will be the maximum size of the file That will be downloaded from the server</p>
<p>
  The file will be downloaded and the time taken to download this file is returned as the bandwidth speed.
</p>
</li>
<li>
  <h3>fileType</h3>
  <p>The file type is the extension of the file that is to be downloaded to calculate the Bandwidth speed.</p>
  <b>Currently handling documents and image formats.</b>
</li>
<li>
  <h3>fileUrl</h3>
  <p>This takes the url of the file location.</p>
  <b>Currently handling complete URL without validation</b>
</li>
<li>
  <h3>error Message</h3>
  <p>The message that needs to be displayed when the file fails to download</p>
<p>
  This will replace all text inside the calling DOM element with the error message.
</p>
</li>
<li>
  <h3>Waiting Message</h3>
  <p>The message that needs to be displayed when the user waits to for the file to download and the operations to complete</p>
</li>

</ol>
<h2>TODO</h2>
<p>Create a fallback for all the arguments in case the user is not able to provide them in the call.</p>
<p>Create a function to handle upload speed check.</p>

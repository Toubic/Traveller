<a href="/" >Back to the homepage</a>
<br>
<br>
<h1>Second query:</h1>
<br>
<h2>Which people have been to the same cities?</h2>
<br>
{{#each query}}
    <h2>{{this.[creatorone]}} {{this.[city]}} {{this.[creatortwo]}}</h2>
{{/each}}

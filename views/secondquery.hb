<h1><a href="/" >Back to the homepage</a> Second query: </h1>
<br>
<h2>Which people have been to the same cities?</h2>
{{#each query}}
    <h2>{{this.[creatorone]}} {{this.[city]}} {{this.[creatortwo]}}</h2>
{{/each}}

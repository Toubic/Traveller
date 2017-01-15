<h1><a href="/" >Back to the homepage</a> Third query: </h1>
<br>
<h2>Has Tobbe been to Gothenburg?</h2>
{{#each query}}
    <h2>{{this.[creator]}} {{this.[city]}} {{this.[visited]}}</h2>
{{/each}}

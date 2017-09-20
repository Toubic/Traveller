<a href="/" >Back to the homepage</a>
<br>
<br>
<h1>Third query:</h1>
<br>
<h2>Has Tobbe been to Gothenburg?</h2>
<br>
{{#each query}}
    <h2>{{this.[creator]}} {{this.[city]}} {{this.[visited]}}</h2>
{{/each}}

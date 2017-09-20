<a href="/" >Back to the homepage</a>
<br>
<br>
<h1>First query:</h1>
<br>
<h2>How many countries have all the people been to all together?</h2>
<br>
{{#each query}}
    <h2>{{this.[countries_total]}}</h2>
{{/each}}
